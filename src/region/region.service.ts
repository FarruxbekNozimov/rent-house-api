import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region, RegionDocument } from './schemas/region.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name)
    private currentModel: Model<RegionDocument>,
  ) {}

  async create(createRegionDto: CreateRegionDto) {
    const res = await new this.currentModel(createRegionDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.currentModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.currentModel.findById(id).exec();
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    return this.currentModel
      .findByIdAndUpdate(id, updateRegionDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.currentModel.findByIdAndDelete(id).exec();
  }
}
