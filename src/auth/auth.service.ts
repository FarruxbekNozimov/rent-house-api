import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { AdminService } from '../admin/admin.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto, res: Response) {
    const { phone, password } = loginDto;
    const admin = await this.adminService.findByPhone(phone);
    if (!admin) {
      throw new HttpException(
        { msg: `User not found` },
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatchPass = await bcrypt.compare(password, admin.password);
    if (!isMatchPass) {
      throw new UnauthorizedException({
        msg: `Parol yoki Login xato kiritilgan !!!`,
      });
    }
    const tokens = await this.getToken(admin.id, 'ADMIN');

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.adminService.update(admin.id, {
      token: hashed_refresh_token,
    });

    res.cookie('token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      status: 200,
      msg: 'Muvaffaqiyatli kirdingiz',
      admin: updatedUser,
      tokens,
    };
    return response;
  }

  async registerUser(userDto: CreateUserDto, res: Response) {
    const userIsExist = await this.userService.findByPhone(userDto.phone);
    if (userIsExist) {
      throw new HttpException(`Bunday user mavjud`, HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await bcrypt.hash(userDto.password, 7);
    const user = await this.userService.create({
      ...userDto,
      password: hashedPassword,
    });
    const tokens = await this.getToken(user.id, 'USER');
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedUser = await this.userService.update(user.id, {
      ...userDto,
      token: hashed_refresh_token,
    });

    res.cookie('token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'USER REGISTERED',
      user: updatedUser[1][0],
      tokens,
    };
    return response;
  }

  async loginUser(loginDto: LoginDto, res: Response) {
    const { phone, password } = loginDto;
    const users = await this.userService.findByPhone(phone);
    if (!users) {
      throw new HttpException(
        { msg: `User not found` },
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatchPass = await bcrypt.compare(password, users.password);
    if (!isMatchPass) {
      throw new UnauthorizedException({
        msg: `Parol yoki Login xato kiritilgan !!!`,
      });
    }
    const tokens = await this.getToken(users.id, 'USER');

    const hashed_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.userService.update(users.id, {
      token: hashed_token,
    });

    res.cookie('token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      status: 200,
      msg: 'Muvaffaqiyatli kirdingiz',
      admin: updatedUser,
      tokens,
    };
    return response;
  }

  private async getToken(id: string, role: string) {
    const payload = { id, role };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return { access_token: accessToken, refresh_token: refreshToken };
  }
}
