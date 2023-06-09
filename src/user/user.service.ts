import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { AdService } from '../ad/ad.service';
import { OrderService } from '../order/order.service';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private readonly adService: AdService,
    private readonly orderService: OrderService,
    private readonly notificationService: NotificationService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    const res = await new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    }).save();
    return res;
  }

  async findAll(query: string) {
    let res = await this.userModel.find();
    return res;
  }

  async findOne(id: string) {
    let res = await this.userModel.findById(id);
    let ads = await this.adService.findByUserId(id);
    let orders = await this.orderService.findBySellerId(id);
    let notification = await this.notificationService.fineByUserId(id);
    let result = { ...res.toObject(), ads, orders, notification };
    return result;
  }

  async findByPhone(phone: string) {
    const res = await this.userModel.findOne({ phone }).exec();
    if (!res)
      throw new HttpException(
        { msg: `User not found` },
        HttpStatus.BAD_REQUEST,
      );
    return res;
  }

  async findByEmail(email: string) {
    const res = await this.userModel.findOne({ email }).exec();
    if (!res)
      throw new HttpException(
        { msg: `User not found` },
        HttpStatus.BAD_REQUEST,
      );
    return res;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
