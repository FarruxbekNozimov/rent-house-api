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
exports.CreateAdDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateAdDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '507f1f77bcf86cd799439011' }),
    __metadata("design:type", Number)
], CreateAdDto.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '507f1f77bcf86cd799439011' }),
    __metadata("design:type", Number)
], CreateAdDto.prototype, "district_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Str. 7 Shuhrat chorraha' }),
    __metadata("design:type", String)
], CreateAdDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '41.40338-2.17403' }),
    __metadata("design:type", String)
], CreateAdDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true' }),
    __metadata("design:type", Boolean)
], CreateAdDto.prototype, "gas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'false' }),
    __metadata("design:type", Boolean)
], CreateAdDto.prototype, "light", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true' }),
    __metadata("design:type", Boolean)
], CreateAdDto.prototype, "water_cold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true' }),
    __metadata("design:type", Boolean)
], CreateAdDto.prototype, "water_hot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'false' }),
    __metadata("design:type", Boolean)
], CreateAdDto.prototype, "conditioner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true' }),
    __metadata("design:type", Boolean)
], CreateAdDto.prototype, "freezer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'euroremont' }),
    __metadata("design:type", String)
], CreateAdDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '65000' }),
    __metadata("design:type", String)
], CreateAdDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5' }),
    __metadata("design:type", Number)
], CreateAdDto.prototype, "people", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'oilali' }),
    __metadata("design:type", String)
], CreateAdDto.prototype, "client_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5' }),
    __metadata("design:type", Number)
], CreateAdDto.prototype, "square_meter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'false' }),
    __metadata("design:type", Boolean)
], CreateAdDto.prototype, "is_floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", Number)
], CreateAdDto.prototype, "home_floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", Number)
], CreateAdDto.prototype, "total_floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_464,h_324,dpr_2/f_auto,q_auto/v1641000863/wordpress_assets/22826-ModContemporary-Accents_w-GauntletGray-a-ok.jpg?_i=AA',
    }),
    __metadata("design:type", String)
], CreateAdDto.prototype, "img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '507f1f77bcf86cd799439011' }),
    __metadata("design:type", Number)
], CreateAdDto.prototype, "user_id", void 0);
exports.CreateAdDto = CreateAdDto;
//# sourceMappingURL=create-ad.dto.js.map