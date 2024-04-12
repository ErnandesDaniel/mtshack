import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import {discountModule} from "./discount/discount";

@Module({
  imports: [

    //Получаем данные для конфигурации из нескольких .env файлов
    ConfigModule.forRoot({
      envFilePath: [`.env`, `.${process.env.NODE_ENV}.env`],
    }),
	

    //Подключаемся к базе данных
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.dataBase_host, //Адрес расположения БД
      port: Number(process.env.dataBase_port), //Порт подключения
      username: process.env.dataBase_user, //Пользователь
      password: process.env.dataBase_password, //Пароль
      database: process.env.dataBase_databaseName, //Название БД
      logging: false, //Отключаем логирование Sequelize

      define: {
        timestamps: false, //Отключаем временные метки создания и удаления
      },
      synchronize: true, //Если нет необходимых таблиц, то мы их создаем

      //Нет необходимости вручную добавлять модели, так как
      //каждая модель, зарегистрированная с помощью forFeature()метода,
      //будет автоматически добавлена в models массив объекта конфигурации
      autoLoadModels: true,
    }),

    //Загружаем оставшиеся модули
    
    discountModule,
  ],


})

export class AppModule {}
