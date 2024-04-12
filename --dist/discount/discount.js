"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discountModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const discount_objects_model_1 = require("./models/discount-objects.model");
const discount_objects_controller_1 = require("./controllers/discount-objects.controller");
const discount_objects_service_1 = require("./services/discount-objects.service");
const worker_threads_1 = require("worker_threads");
const path = require("path");
let SteamWorker = new worker_threads_1.Worker(path.resolve(__dirname, 'parsing-worker', 'steam-search-worker.js'));
let discountModule = class discountModule {
};
exports.discountModule = discountModule;
exports.discountModule = discountModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([discount_objects_model_1.discountObject,])],
        controllers: [discount_objects_controller_1.discountObjectsController],
        providers: [discount_objects_service_1.discountObjectsService,]
    })
], discountModule);
//# sourceMappingURL=discount.js.map