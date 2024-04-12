import { Injectable } from '@nestjs/common';

//Подключаем модуль для отправки писем на email
import nodemailer from "nodemailer";

//Получаем тип для сообщения
import Mail from "nodemailer/lib/mailer";
@Injectable()
export class EmailService{
  async sendEmail(email:string, subject:string, html:string):Promise<void> {

    //Создаем транспортер для посылки сообщений на почту
    let transporter:Mail = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: {
        user: process.env.mailUser,
        pass: process.env.mailPassword,
      },
    });

    //Отправляем сообщение на почту
    await transporter.sendMail({

      from: process.env.mailUser,

      to: email,

      subject: subject,

      html: html,

    });

  }

}