import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import {
  Notification,
  NotificationDocument,
} from './schemas/notification.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private currentModel: Model<NotificationDocument>,
  ) {}

  async create(createNotificationDto: CreateNotificationDto) {
    const res = await new this.currentModel(createNotificationDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.currentModel
      .find()
      .populate('user_id')
      .populate('appeal_id')
      .exec();
    return res;
  }

  async findOne(id: string) {
    return this.currentModel
      .findById(id)
      .populate('user_id')
      .populate('appeal_id')
      .exec();
  }

  async fineByUserId(user_id: string) {
    return this.currentModel.find({ user_id }).exec();
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto) {
    return this.currentModel
      .findByIdAndUpdate(id, updateNotificationDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.currentModel.findByIdAndDelete(id).exec();
  }
}
