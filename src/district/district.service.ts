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
    private currentModel: Model<DistrictDocument>,
  ) {}

  async create(createDistrictDto: CreateDistrictDto) {
    const res = await new this.currentModel(createDistrictDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.currentModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.currentModel.findById(id).exec();
  }

  async update(id: string, updateDistrictDto: UpdateDistrictDto) {
    return this.currentModel
      .findByIdAndUpdate(id, updateDistrictDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.currentModel.findByIdAndDelete(id).exec();
  }
}
