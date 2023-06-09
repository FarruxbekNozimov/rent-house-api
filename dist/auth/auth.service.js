"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const admin_service_1 = require("../admin/admin.service");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(adminService, userService, jwtService) {
        this.adminService = adminService;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(loginDto, res) {
        const { phone, password } = loginDto;
        const admins = await this.adminService.findByPhone(phone);
        if (!admins) {
            throw new common_1.HttpException({ msg: `User not found` }, common_1.HttpStatus.BAD_REQUEST);
        }
        const isMatchPass = await bcrypt.compare(password, admins.password);
        if (!isMatchPass) {
            throw new common_1.UnauthorizedException({
                msg: `Parol yoki Login xato kiritilgan !!!`,
            });
        }
        const tokens = await this.getToken(admins.id, 'ADMIN');
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updatedUser = await this.adminService.update(admins.id, {
            token: hashed_refresh_token,
        });
        res.cookie('token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            status: 200,
            msg: 'Muvaffaqiyatli kirdingiz',
            admins: updatedUser,
            tokens,
        };
        return response;
    }
    async registerUser(userDto, res) {
        const userIsExist = await this.userService.findByPhone(userDto.phone);
        if (userIsExist) {
            throw new common_1.HttpException(`Bunday user mavjud`, common_1.HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await bcrypt.hash(userDto.password, 7);
        const user = await this.userService.create(Object.assign(Object.assign({}, userDto), { password: hashedPassword }));
        const tokens = await this.getToken(user.id, 'USER');
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updatedUser = await this.userService.update(user.id, Object.assign(Object.assign({}, userDto), { token: hashed_refresh_token }));
        res.cookie('token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'USER REGISTERED',
            user: updatedUser[1][0],
            tokens,
        };
        return response;
    }
    async loginUser(loginDto, res) {
        const { phone, password } = loginDto;
        const users = await this.userService.findByPhone(phone);
        if (!users) {
            throw new common_1.HttpException({ msg: `User not found` }, common_1.HttpStatus.BAD_REQUEST);
        }
        const isMatchPass = await bcrypt.compare(password, users.password);
        if (!isMatchPass) {
            throw new common_1.UnauthorizedException({
                msg: `Parol yoki Login xato kiritilgan !!!`,
            });
        }
        const tokens = await this.getToken(users.id, 'USER');
        const hashed_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updatedUser = await this.userService.update(users.id, {
            token: hashed_token,
        });
        res.cookie('token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            status: 200,
            msg: 'Muvaffaqiyatli kirdingiz',
            admins: updatedUser,
            tokens,
        };
        return response;
    }
    async getToken(id, role) {
        const payload = { id, role };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return { access_token: accessToken, refresh_token: refreshToken };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map