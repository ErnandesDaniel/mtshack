//Используемый инструмент для поиска информации в сети
import { Browser } from "playwright";

export class  searchConfiguration{

  //Указываем, используем браузер или axios для получения данных
  tool:{

    name:'axios'|'browser',

    //Если для получения данных используется браузер, то добавляем ссылку на его объект
    agent:Browser|null,

  }

  //Общий CSS-селектор всех объектов на странице
  objectsCommonSelector:string

  //Будет ли анализ множества страниц
  multiPages:{

    //Будет ли анализ множества страниц
    status:boolean,

    //Селектор на элемент с номером последней страницы на текущей странице
    numberLastPageSelector:string|null,

  }

  constructor(configuration:any){

    this.tool=configuration.tool;

    this.objectsCommonSelector=configuration.objectsCommonSelector;

    this.multiPages=configuration.multiPages;

  }

}

