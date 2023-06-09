import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private currentModel: Model<AdminDocument>,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
    const res = await new this.currentModel({
      ...createAdminDto,
      password: hashedPassword,
    }).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.currentModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    const res = await this.currentModel.findById(id).exec();
    if (!res)
      throw new HttpException(
        { msg: `User not found` },
        HttpStatus.BAD_REQUEST,
      );
    return res;
  }

  async findByPhone(phone: string) {
    const res = await this.currentModel.findOne({ phone }).exec();
    if (!res)
      throw new HttpException(
        { msg: `User not found` },
        HttpStatus.BAD_REQUEST,
      );
    return res;
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.currentModel
      .findByIdAndUpdate(id, updateAdminDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.currentModel.findByIdAndDelete(id).exec();
  }
}
