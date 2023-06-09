import mongoose, { HydratedDocument } from 'mongoose';
export type OrderDocument = HydratedDocument<Order>;
export declare class Order {
    seller_id: mongoose.Schema.Types.ObjectId;
    reciever_id: mongoose.Schema.Types.ObjectId;
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, mongoose.Document<unknown, any, Order> & Omit<Order & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order, mongoose.Document<unknown, {}, mongoose.FlatRecord<Order>> & Omit<mongoose.FlatRecord<Order> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
