import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DistrictDocument = HydratedDocument<District>;

@Schema({ timestamps: true })
export class District {
  @Prop()
	name:string;

	;
}

export const DistrictSchema = SchemaFactory.createForClass(District);
