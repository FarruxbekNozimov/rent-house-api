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
exports.UpdateAdDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateAdDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "507f1f77bcf86cd799439011" }),
    __metadata("design:type", Number)
], UpdateAdDto.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "507f1f77bcf86cd799439011" }),
    __metadata("design:type", Number)
], UpdateAdDto.prototype, "district_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Str. 7 Shuhrat chorraha" }),
    __metadata("design:type", String)
], UpdateAdDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "41.40338-2.17403" }),
    __metadata("design:type", String)
], UpdateAdDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true" }),
    __metadata("design:type", Boolean)
], UpdateAdDto.prototype, "gas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "false" }),
    __metadata("design:type", Boolean)
], UpdateAdDto.prototype, "light", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true" }),
    __metadata("design:type", Boolean)
], UpdateAdDto.prototype, "water_cold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true" }),
    __metadata("design:type", Boolean)
], UpdateAdDto.prototype, "water_hot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "false" }),
    __metadata("design:type", Boolean)
], UpdateAdDto.prototype, "conditioner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true" }),
    __metadata("design:type", Boolean)
], UpdateAdDto.prototype, "freezer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "euroremont" }),
    __metadata("design:type", String)
], UpdateAdDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "65000" }),
    __metadata("design:type", String)
], UpdateAdDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "5" }),
    __metadata("design:type", Number)
], UpdateAdDto.prototype, "people", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "oilali" }),
    __metadata("design:type", Number)
], UpdateAdDto.prototype, "client_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "5" }),
    __metadata("design:type", Number)
], UpdateAdDto.prototype, "square_meter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "false" }),
    __metadata("design:type", Boolean)
], UpdateAdDto.prototype, "is_floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1" }),
    __metadata("design:type", Number)
], UpdateAdDto.prototype, "home_floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1" }),
    __metadata("design:type", Number)
], UpdateAdDto.prototype, "total_floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_464,h_324,dpr_2/f_auto,q_auto/v1641000863/wordpress_assets/22826-ModContemporary-Accents_w-GauntletGray-a-ok.jpg?_i=AA" }),
    __metadata("design:type", String)
], UpdateAdDto.prototype, "img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "507f1f77bcf86cd799439011" }),
    __metadata("design:type", Number)
], UpdateAdDto.prototype, "user_id", void 0);
exports.UpdateAdDto = UpdateAdDto;
//# sourceMappingURL=update-ad.dto.js.map