/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    findAll(query: any): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>;
    findOne(id: string): Promise<{
        ads: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../ad/schemas/ad.schema").Ad> & Omit<import("../ad/schemas/ad.schema").Ad & {
            _id: import("mongoose").Types.ObjectId;
        }, never>> & Omit<import("mongoose").Document<unknown, {}, import("../ad/schemas/ad.schema").Ad> & Omit<import("../ad/schemas/ad.schema").Ad & {
            _id: import("mongoose").Types.ObjectId;
        }, never> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>)[];
        orders: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../order/schemas/order.schema").Order> & Omit<import("../order/schemas/order.schema").Order & {
            _id: import("mongoose").Types.ObjectId;
        }, never>> & Omit<import("mongoose").Document<unknown, {}, import("../order/schemas/order.schema").Order> & Omit<import("../order/schemas/order.schema").Order & {
            _id: import("mongoose").Types.ObjectId;
        }, never> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>)[];
        notification: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../notification/schemas/notification.schema").Notification> & Omit<import("../notification/schemas/notification.schema").Notification & {
            _id: import("mongoose").Types.ObjectId;
        }, never>> & Omit<import("mongoose").Document<unknown, {}, import("../notification/schemas/notification.schema").Notification> & Omit<import("../notification/schemas/notification.schema").Notification & {
            _id: import("mongoose").Types.ObjectId;
        }, never> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>)[];
        _id: import("mongoose").Types.ObjectId;
        __v?: any;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove";
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection<import("bson").Document>;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: any;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: any;
        }>> & Omit<import("mongoose").FlatRecord<{
            [x: string]: any;
        }> & Required<{
            _id: unknown;
        }>, never>>;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        password: string;
        token: string;
    }>;
    findByPhone(phone: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & Omit<import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
}
