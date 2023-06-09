import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AdDocument = HydratedDocument<Ad>;

@Schema({ timestamps: true })
export class Ad {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Region'  }])
	region_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'District'  }])
	district_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	address:string;

	@Prop()
	location:string;

	@Prop()
	gas:boolean;

	@Prop()
	light:boolean;

	@Prop()
	water_cold:boolean;

	@Prop()
	water_hot:boolean;

	@Prop()
	conditioner:boolean;

	@Prop()
	freezer:boolean;

	@Prop()
	status:string;

	@Prop()
	price:string;

	@Prop(5)
	people:number;

	@Prop(oilali)
	client_status:number;

	@Prop()
	square_meter:number;

	@Prop()
	is_floor:boolean;

	@Prop()
	home_floor:number;

	@Prop()
	total_floor:number;

	@Prop()
	img:string;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'User'  }])
	user_id:mongoose.Schema.Types.ObjectId;

	;
}

export const AdSchema = SchemaFactory.createForClass(Ad);
