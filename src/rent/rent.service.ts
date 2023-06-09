import { Injectable } from '@nestjs/common';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { Rent, RentDocument } from './schemas/rent.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RentService {
  constructor(
    @InjectModel(Rent.name)
    private orderModel: Model<RentDocument>,
  ) {}

  async create(createRentDto: CreateRentDto) {
    const res = await new this.orderModel(createRentDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateRentDto: UpdateRentDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateRentDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
