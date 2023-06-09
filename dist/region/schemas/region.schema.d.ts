import mongoose, { HydratedDocument } from 'mongoose';
export type RegionDocument = HydratedDocument<Region>;
export declare class Region {
    name: string;
}
export declare const RegionSchema: mongoose.Schema<Region, mongoose.Model<Region, any, any, any, mongoose.Document<unknown, any, Region> & Omit<Region & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Region, mongoose.Document<unknown, {}, mongoose.FlatRecord<Region>> & Omit<mongoose.FlatRecord<Region> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
