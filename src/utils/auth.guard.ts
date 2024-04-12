import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

//Подключаем класс для работы с токенами доступа
import { Tokens } from './token';

//Создаем экземпляр класса для работы с токенами
let tokens=new Tokens();

@Injectable()
export class AuthGuard implements CanActivate{

	canActivate(
	
		context: ExecutionContext,
		
	):boolean|Promise<boolean>|Observable<boolean>{
	
		//Получаем объект запроса
		const request = context.switchToHttp().getRequest();
		
		let tokenIsValid:boolean=false;
		
		//Получаем заголовок авторизации
		let authHeader=request.headers.authorization;
		
		//Токен авторизации
		let authToken='';
		
		//Если заголовок авторизации определен
		if(authHeader){
			
			//Получаем значение токена авторизации
			authToken = authHeader.split(' ')[1];
			
		}
		
		if(tokens.check(authToken)=='TokenIsValid'){
		
			tokenIsValid=true;
			
		}
		
		return tokenIsValid;
		
	}
}