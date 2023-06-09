import mongoose, { HydratedDocument } from 'mongoose';
export type AdDocument = HydratedDocument<Ad>;
export declare class Ad {
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
    people: number;
    client_status: string;
    square_meter: number;
    is_floor: boolean;
    home_floor: number;
    total_floor: number;
    img: string;
    user_id: mongoose.Schema.Types.ObjectId;
}
export declare const AdSchema: mongoose.Schema<Ad, mongoose.Model<Ad, any, any, any, mongoose.Document<unknown, any, Ad> & Omit<Ad & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Ad, mongoose.Document<unknown, {}, mongoose.FlatRecord<Ad>> & Omit<mongoose.FlatRecord<Ad> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
