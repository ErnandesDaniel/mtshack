import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { discountObject } from "./models/discount-objects.model";
import {discountObjectsController} from "./controllers/discount-objects.controller";
import {discountObjectsService} from "./services/discount-objects.service";

//Подключаем класс для создания потоков
import { Worker } from 'worker_threads';

//Создаем отдельный поток для анализа данных с сайта из интернета

import * as path from "path";
//Создаем отдельный поток для анализа данных с сайта из интернета
let SteamWorker = new Worker(path.resolve(__dirname, 'parsing-worker','steam-search-worker.js'));

@Module({
  imports: [SequelizeModule.forFeature([discountObject,])],
  controllers: [discountObjectsController],
  providers: [discountObjectsService,]


})

export class discountModule {}
