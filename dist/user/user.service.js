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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const ad_service_1 = require("../ad/ad.service");
const order_service_1 = require("../order/order.service");
const notification_service_1 = require("../notification/notification.service");
let UserService = class UserService {
    constructor(userModel, adService, orderService, notificationService) {
        this.userModel = userModel;
        this.adService = adService;
        this.orderService = orderService;
        this.notificationService = notificationService;
    }
    async create(createUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
        const res = await new this.userModel(Object.assign(Object.assign({}, createUserDto), { password: hashedPassword })).save();
        return res;
    }
    async findAll(query) {
        let res = await this.userModel.find();
        return res;
    }
    async findOne(id) {
        let res = await this.userModel.findById(id);
        let ads = await this.adService.findByUserId(id);
        let orders = await this.orderService.findBySellerId(id);
        let notification = await this.notificationService.fineByUserId(id);
        let result = Object.assign(Object.assign({}, res.toObject()), { ads, orders, notification });
        return result;
    }
    async findByPhone(phone) {
        const res = await this.userModel.findOne({ phone }).exec();
        if (!res)
            throw new common_1.HttpException({ msg: `User not found` }, common_1.HttpStatus.BAD_REQUEST);
        return res;
    }
    async findByEmail(email) {
        const res = await this.userModel.findOne({ email }).exec();
        if (!res)
            throw new common_1.HttpException({ msg: `User not found` }, common_1.HttpStatus.BAD_REQUEST);
        return res;
    }
    async update(id, updateUserDto) {
        return this.userModel
            .findByIdAndUpdate(id, updateUserDto, { new: true })
            .exec();
    }
    async remove(id) {
        return this.userModel.findByIdAndDelete(id).exec();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        ad_service_1.AdService,
        order_service_1.OrderService,
        notification_service_1.NotificationService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map