
import { decode, JwtPayload, sign, SignOptions, verify } from "jsonwebtoken";
import { Injectable } from "@nestjs/common";

//Параметры шифрования
const signOptions:SignOptions = {

  algorithm:  "HS256",//Указываем алгоритм шифрования

};

interface payloadData {

  confirmationCode?: string,//Код подтверждения

  loginConfirmationCode?:string,//Код подтверждения логина для входа по ссылке

  changePasswordConfirmationCode?:string,//Код подтверждения смены пароля

  //Является ли данный токен токеном авторизации в телеграмме
  TelegramAuthorizationToken?:boolean,


  iat: number, //Нынешнее время (время создания токена)

  id: number,//Id пользователя

}

@Injectable()
export class Tokens{

  create(payload:payloadData):string {

    return sign(payload, process.env.secretAuthorizationTokenKey, signOptions);

  }


//Создаем функцию для проверки токена аутентификации
    check(token:string):string{

      //Результат проверки токена
      let result:JwtPayload | string='';

      if(token!=null){

        try {

          result=verify(token, process.env.secretAuthorizationTokenKey, signOptions);

          //если декодирование токена удастся, то токен действителен
          result='TokenIsValid';

        }catch(err){
          //Если произошла ошибка при декодировании токена:

          //Если декодирование токена не удастся, то токен недействителен
          result='TokenIsInvalid';

        }

      }else if(token==''){

        result='TokenIsEmpty';

      }

      return result;

    }

    getDecodedToken(token:string):payloadData{

      //Декодируем токен
      let decodedToken:string|JwtPayload=decode(token);
      
      if (typeof decodedToken =='string'){
        
        return JSON.parse(decodedToken); 
      }else{

        return <payloadData>decodedToken;

      }

    }

  }
