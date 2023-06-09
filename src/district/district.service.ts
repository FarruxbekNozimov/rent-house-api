import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District, DistrictDocument } from './schemas/district.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District.name)
    private orderModel: Model<DistrictDocument>,
  ) {}

  async create(createDistrictDto: CreateDistrictDto) {
    const res = await new this.orderModel(createDistrictDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateDistrictDto: UpdateDistrictDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateDistrictDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
