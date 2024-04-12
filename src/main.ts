import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start():Promise<void>{
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule, {cors: true});


    //Устанавливаем глобальный префикс для API
    //И игнорируем его при раздаче файлов фронтенда
    app.setGlobalPrefix('api');

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start();








