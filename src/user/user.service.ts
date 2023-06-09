import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private orderModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    const res = await new this.orderModel({
      ...createUserDto,
      password: hashedPassword,
    }).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async findByPhone(phone: string) {
    const res = await this.orderModel.findOne({ phone }).exec();
    if (!res)
      throw new HttpException(
        { msg: `User not found` },
        HttpStatus.BAD_REQUEST,
      );
    return res;
  }

  async findByEmail(email: string) {
    const res = await this.orderModel.findOne({ email }).exec();
    if (!res)
      throw new HttpException(
        { msg: `User not found` },
        HttpStatus.BAD_REQUEST,
      );
    return res;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
