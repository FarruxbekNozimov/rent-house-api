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
exports.CreateRentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateRentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "507f1f77bcf86cd799439011" }),
    __metadata("design:type", Number)
], CreateRentDto.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "507f1f77bcf86cd799439011" }),
    __metadata("design:type", Number)
], CreateRentDto.prototype, "district_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Str. 7 Shuhrat chorraha" }),
    __metadata("design:type", String)
], CreateRentDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "41.40338-2.17403" }),
    __metadata("design:type", String)
], CreateRentDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true" }),
    __metadata("design:type", Boolean)
], CreateRentDto.prototype, "gas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "false" }),
    __metadata("design:type", Boolean)
], CreateRentDto.prototype, "light", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true" }),
    __metadata("design:type", Boolean)
], CreateRentDto.prototype, "water_cold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true" }),
    __metadata("design:type", Boolean)
], CreateRentDto.prototype, "water_hot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "false" }),
    __metadata("design:type", Boolean)
], CreateRentDto.prototype, "conditioner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true" }),
    __metadata("design:type", Boolean)
], CreateRentDto.prototype, "freezer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "euroremont" }),
    __metadata("design:type", String)
], CreateRentDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "65000" }),
    __metadata("design:type", String)
], CreateRentDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "5" }),
    __metadata("design:type", Number)
], CreateRentDto.prototype, "square_meter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true" }),
    __metadata("design:type", Boolean)
], CreateRentDto.prototype, "is_floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "3" }),
    __metadata("design:type", Number)
], CreateRentDto.prototype, "home_floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "5" }),
    __metadata("design:type", Number)
], CreateRentDto.prototype, "total_floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg" }),
    __metadata("design:type", String)
], CreateRentDto.prototype, "img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "507f1f77bcf86cd799439011" }),
    __metadata("design:type", Number)
], CreateRentDto.prototype, "user_id", void 0);
exports.CreateRentDto = CreateRentDto;
//# sourceMappingURL=create-rent.dto.js.map