import { Browser } from "playwright";
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

export async function getDOMFromBrowser(searchURL:string, browser:Browser){

  //Создаем переменную для хранения объекта с данными HTML-страницы
  let document:Document|null=null;

  //Получаем номер случайного порта proxy
  //От 9060 до 9100
  let port=9060+getRandomInt(40);

  //Пытаемся получить HTML-код страницы
  try{

    //Создаем новый контекст браузера со случайным значением порта подключения
    let context = await browser.newContext({

      //args: [`--proxy-server=socks5://127.0.0.1:${port}`],

      proxy: {server: `127.0.0.1:${port}`,}

    });

    //Создаем новую страницу в контексте
    let searchPage = await context.newPage();

    //Переходим на страницу поиска и ждем до конца ее загрузки
    await searchPage.goto(searchURL,{waitUntil:'domcontentloaded'});

    //Получаем весь HTML-контент на странице в виде HTML-строки
    let searchPageContent=await searchPage.content();

    //Переносим HTML-строку в JSDOM
    const searchPageDOM=new JSDOM(searchPageContent);

    //Получаем объект документа со всеми DOM моделями и записываем его
    //в соответствующую переменную
    document=searchPageDOM.window.document;

    //Закрываем контекст
    await context.close();

  }catch(error) {

    console.log('Playwright: страница не была загружена');

  }

  return document;

}


