import mongoose, { HydratedDocument } from 'mongoose';
export type DistrictDocument = HydratedDocument<District>;
export declare class District {
    name: string;
}
export declare const DistrictSchema: mongoose.Schema<District, mongoose.Model<District, any, any, any, mongoose.Document<unknown, any, District> & Omit<District & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, District, mongoose.Document<unknown, {}, mongoose.FlatRecord<District>> & Omit<mongoose.FlatRecord<District> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
