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
exports.DistrictService = void 0;
const common_1 = require("@nestjs/common");
const district_schema_1 = require("./schemas/district.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DistrictService = class DistrictService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async create(createDistrictDto) {
        const res = await new this.orderModel(createDistrictDto).save();
        return res;
    }
    async findAll(query) {
        const res = await this.orderModel.find().exec();
        return res;
    }
    async findOne(id) {
        return this.orderModel.findById(id).exec();
    }
    async update(id, updateDistrictDto) {
        return this.orderModel
            .findByIdAndUpdate(id, updateDistrictDto, { new: true })
            .exec();
    }
    async remove(id) {
        return this.orderModel.findByIdAndDelete(id).exec();
    }
};
DistrictService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(district_schema_1.District.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DistrictService);
exports.DistrictService = DistrictService;
//# sourceMappingURL=district.service.js.map