import mongoose, { HydratedDocument } from 'mongoose';
export type NotificationDocument = HydratedDocument<Notification>;
export declare class Notification {
    user_id: mongoose.Schema.Types.ObjectId;
    appeal_id: mongoose.Schema.Types.ObjectId;
    description: string;
}
export declare const NotificationSchema: mongoose.Schema<Notification, mongoose.Model<Notification, any, any, any, mongoose.Document<unknown, any, Notification> & Omit<Notification & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Notification, mongoose.Document<unknown, {}, mongoose.FlatRecord<Notification>> & Omit<mongoose.FlatRecord<Notification> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
