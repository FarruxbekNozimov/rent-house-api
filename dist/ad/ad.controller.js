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
exports.AdController = void 0;
const common_1 = require("@nestjs/common");
const ad_service_1 = require("./ad.service");
const create_ad_dto_1 = require("./dto/create-ad.dto");
const update_ad_dto_1 = require("./dto/update-ad.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guards_1 = require("../guards/jwt-auth.guards");
const common_2 = require("@nestjs/common");
let AdController = class AdController {
    constructor(adService) {
        this.adService = adService;
    }
    create(createAdDto) {
        return this.adService.create(createAdDto);
    }
    findAll(query) {
        return this.adService.findAll(query);
    }
    findOne(id) {
        return this.adService.findOne(id);
    }
    update(id, updateAdDto) {
        return this.adService.update(id, updateAdDto);
    }
    remove(id) {
        return this.adService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Create ad' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ad_dto_1.CreateAdDto]),
    __metadata("design:returntype", void 0)
], AdController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Find all ad' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Get one ad' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Update ad by id' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ad_dto_1.UpdateAdDto]),
    __metadata("design:returntype", void 0)
], AdController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Delete ad by id' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdController.prototype, "remove", null);
AdController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Ad'),
    (0, common_1.Controller)('ad'),
    __metadata("design:paramtypes", [ad_service_1.AdService])
], AdController);
exports.AdController = AdController;
//# sourceMappingURL=ad.controller.js.map