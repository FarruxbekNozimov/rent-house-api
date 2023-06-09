"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdModule = void 0;
const common_1 = require("@nestjs/common");
const ad_service_1 = require("./ad.service");
const ad_controller_1 = require("./ad.controller");
const mongoose_1 = require("@nestjs/mongoose");
const ad_schema_1 = require("./schemas/ad.schema");
const jwt_1 = require("@nestjs/jwt");
let AdModule = class AdModule {
};
AdModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: ad_schema_1.Ad.name, schema: ad_schema_1.AdSchema }]),
            jwt_1.JwtModule,
        ],
        controllers: [ad_controller_1.AdController],
        providers: [ad_service_1.AdService],
        exports: [ad_service_1.AdService],
    })
], AdModule);
exports.AdModule = AdModule;
//# sourceMappingURL=ad.module.js.map