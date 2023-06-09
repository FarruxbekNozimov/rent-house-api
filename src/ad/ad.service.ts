import { Injectable } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { Ad, AdDocument } from './schemas/ad.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AdService {
  constructor(
    @InjectModel(Ad.name)
    private currentModel: Model<AdDocument>,
  ) {}

  async create(createAdDto: CreateAdDto) {
    const res = await new this.currentModel(createAdDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.currentModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.currentModel.findById(id).exec();
  }

  async update(id: string, updateAdDto: UpdateAdDto) {
    return this.currentModel
      .findByIdAndUpdate(id, updateAdDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.currentModel.findByIdAndDelete(id).exec();
  }
}
