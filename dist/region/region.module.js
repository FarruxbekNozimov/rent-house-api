"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionModule = void 0;
const common_1 = require("@nestjs/common");
const region_service_1 = require("./region.service");
const region_controller_1 = require("./region.controller");
const mongoose_1 = require("@nestjs/mongoose");
const region_schema_1 = require("./schemas/region.schema");
const jwt_1 = require("@nestjs/jwt");
let RegionModule = class RegionModule {
};
RegionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: region_schema_1.Region.name, schema: region_schema_1.RegionSchema }]),
            jwt_1.JwtModule,
        ],
        controllers: [region_controller_1.RegionController],
        providers: [region_service_1.RegionService],
    })
], RegionModule);
exports.RegionModule = RegionModule;
//# sourceMappingURL=region.module.js.map