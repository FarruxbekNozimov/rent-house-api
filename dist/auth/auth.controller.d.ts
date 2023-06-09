import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    registerUser(createUserDto: CreateUserDto, res: Response): Promise<{
        message: string;
        user: any;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
}
