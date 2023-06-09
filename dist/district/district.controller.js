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
exports.DistrictController = void 0;
const common_1 = require("@nestjs/common");
const district_service_1 = require("./district.service");
const create_district_dto_1 = require("./dto/create-district.dto");
const update_district_dto_1 = require("./dto/update-district.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const admin_guards_1 = require("../guards/admin.guards");
let DistrictController = class DistrictController {
    constructor(districtService) {
        this.districtService = districtService;
    }
    create(createDistrictDto) {
        return this.districtService.create(createDistrictDto);
    }
    findAll(query) {
        return this.districtService.findAll(query);
    }
    findOne(id) {
        return this.districtService.findOne(id);
    }
    update(id, updateDistrictDto) {
        return this.districtService.update(id, updateDistrictDto);
    }
    remove(id) {
        return this.districtService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(admin_guards_1.AdminGuards),
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Create district' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_district_dto_1.CreateDistrictDto]),
    __metadata("design:returntype", void 0)
], DistrictController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(admin_guards_1.AdminGuards),
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Find all district' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DistrictController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(admin_guards_1.AdminGuards),
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Get one district' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistrictController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(admin_guards_1.AdminGuards),
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Update district by id' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_district_dto_1.UpdateDistrictDto]),
    __metadata("design:returntype", void 0)
], DistrictController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(admin_guards_1.AdminGuards),
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Delete district by id' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistrictController.prototype, "remove", null);
DistrictController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('District'),
    (0, common_1.Controller)('district'),
    __metadata("design:paramtypes", [district_service_1.DistrictService])
], DistrictController);
exports.DistrictController = DistrictController;
//# sourceMappingURL=district.controller.js.map