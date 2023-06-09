import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type NotificationDocument = HydratedDocument<Notification>;

@Schema({ timestamps: true })
export class Notification {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'User'  }])
	user_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'User'  }])
	appeal_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	description:string;

	;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
