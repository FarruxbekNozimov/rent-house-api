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
exports.AdminGuards = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AdminGuards = class AdminGuards {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        if (!authHeader)
            throw new common_1.UnauthorizedException({
                msg: 'User not autorized',
                status: 401,
            });
        const bearer = authHeader.split(' ')[0];
        const token = authHeader.split(' ')[1];
        if (bearer !== 'Bearer' || !token) {
            throw new common_1.UnauthorizedException({
                msg: 'User not autorized',
                status: 401,
            });
        }
        let user;
        try {
            user = this.jwtService.verify(token, {
                secret: process.env.REFRESH_TOKEN_KEY,
            });
        }
        catch (error) {
            throw new common_1.UnauthorizedException({
                msg: 'User not autorized',
                status: 401,
            });
        }
        if (user.role != 'ADMIN') {
            throw new common_1.UnauthorizedException({
                msg: 'User is not admin',
                status: 401,
            });
        }
        req.user = user;
        return true;
    }
};
AdminGuards = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AdminGuards);
exports.AdminGuards = AdminGuards;
//# sourceMappingURL=admin.guards.js.map