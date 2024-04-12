import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//Подключаем класс для работы с токенами доступа
import { Tokens } from './token';

//Создаем экземпляр класса для работы с токенами
let tokens= new Tokens();

export const UserId = createParamDecorator(

  (data: unknown, ctx: ExecutionContext)=>{
	
	//ID пользователя по умолчанию равно нулю
	let userId=0;
  
	//Получаем объект запроса
    const request = ctx.switchToHttp().getRequest();
	
	//Получаем заголовок авторизации
	let authHeader=request.headers.authorization;
	
	//Токен авторизации
	let authToken:string;
	
	//Если заголовок авторизации определен
	if(authHeader){
		
		//Получаем значение токена авторизации
		authToken = authHeader.split(' ')[1];
		
	}
	
	if(tokens.check(authToken)=='TokenIsValid'){
		
		//Получаем декодированный токен
		let decodedToken=tokens.getDecodedToken(authToken);
		
		userId=decodedToken.id;
		
	}
	
    return userId;
	
  },
  
);











