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
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { AdminService } from '../admin/admin.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthService {
    private readonly adminService;
    private readonly userService;
    private readonly jwtService;
    constructor(adminService: AdminService, userService: UserService, jwtService: JwtService);
    login(loginDto: LoginDto, res: Response): Promise<{
        status: number;
        msg: string;
        admin: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../admin/schemas/admin.schema").Admin> & Omit<import("../admin/schemas/admin.schema").Admin & {
            _id: import("mongoose").Types.ObjectId;
        }, never>> & Omit<import("mongoose").Document<unknown, {}, import("../admin/schemas/admin.schema").Admin> & Omit<import("../admin/schemas/admin.schema").Admin & {
            _id: import("mongoose").Types.ObjectId;
        }, never> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    registerUser(userDto: CreateUserDto, res: Response): Promise<{
        message: string;
        user: any;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    loginUser(loginDto: LoginDto, res: Response): Promise<{
        status: number;
        msg: string;
        admin: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../user/schemas/user.schema").User> & Omit<import("../user/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        }, never>> & Omit<import("mongoose").Document<unknown, {}, import("../user/schemas/user.schema").User> & Omit<import("../user/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        }, never> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    private getToken;
}
