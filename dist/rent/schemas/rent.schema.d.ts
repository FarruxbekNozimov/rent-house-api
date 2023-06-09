import mongoose, { HydratedDocument } from 'mongoose';
export type RentDocument = HydratedDocument<Rent>;
export declare class Rent {
    region_id: mongoose.Schema.Types.ObjectId;
    district_id: mongoose.Schema.Types.ObjectId;
    address: string;
    location: string;
    gas: boolean;
    light: boolean;
    water_cold: boolean;
    water_hot: boolean;
    conditioner: boolean;
    freezer: boolean;
    status: string;
    price: string;
    square_meter: number;
    is_floor: boolean;
    home_floor: number;
    total_floor: number;
    img: string;
    user_id: mongoose.Schema.Types.ObjectId;
}
export declare const RentSchema: mongoose.Schema<Rent, mongoose.Model<Rent, any, any, any, mongoose.Document<unknown, any, Rent> & Omit<Rent & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Rent, mongoose.Document<unknown, {}, mongoose.FlatRecord<Rent>> & Omit<mongoose.FlatRecord<Rent> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
