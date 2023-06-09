import {
  Controller,
  Post,
  Body,
  HttpCode,
  Res,
  Param,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { CreateUserDto } from '../user/dto/create-user.dto';

@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login Admin' })
  @HttpCode(200)
  @Post('admins/login')
  login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(loginDto, res);
  }

  @ApiOperation({ summary: 'Login User' })
  @HttpCode(200)
  @Post('user/login')
  loginUser(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.loginUser(loginDto, res);
  }

  @ApiOperation({ summary: 'Register User' })
  @HttpCode(200)
  @Post('user/register')
  registerUser(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.registerUser(createUserDto, res);
  }
}
