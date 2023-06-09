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
    private currentModel: Model<RentDocument>,
  ) {}

  async create(createRentDto: CreateRentDto) {
    const res = await new this.currentModel(createRentDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.currentModel
      .find()
      .populate('user_id')
      .populate('region_id')
      .populate('district_id')
      .exec();
    return res;
  }

  async findOne(id: string) {
    return this.currentModel
      .findById(id)
      .populate('user_id')
      .populate('region_id')
      .populate('district_id')
      .exec();
  }

  async update(id: string, updateRentDto: UpdateRentDto) {
    return this.currentModel
      .findByIdAndUpdate(id, updateRentDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.currentModel.findByIdAndDelete(id).exec();
  }
}
