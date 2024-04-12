
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import axios from 'axios';
export async function getDOMFromAxios(searchURL:string) {

  //Создаем переменную для хранения объекта с данными HTML-страницы
  let document:Document|null=null;

  //Пытаемся получить HTML-код страницы
  try{

    //Получаем ответ с сервера
    let response=await axios.get(searchURL);

    //Получаем весь HTML-контент на странице в виде строки
    let searchPageContent=response.data;

    //Переносим HTML-строку в JSDOM
    const searchPageDOM=new JSDOM(searchPageContent);

    //Получаем объект документа со всеми DOM моделями и записываем его
    //в соответствующую переменную
    document=searchPageDOM.window.document;

  }catch(error) {

    console.log('Axios: страница не была загружена');

  }

  return document;

}