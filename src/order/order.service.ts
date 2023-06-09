import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order, OrderDocument } from './schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private currentModel: Model<OrderDocument>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const res = await new this.currentModel(createOrderDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.currentModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.currentModel.findById(id).exec();
  }

  async findBySellerId(id: string) {
    return this.currentModel.find({ seller_id: id }).exec();
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.currentModel
      .findByIdAndUpdate(id, updateOrderDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.currentModel.findByIdAndDelete(id).exec();
  }
}
