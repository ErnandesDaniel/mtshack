import {getAllHTMLElements, getHTMLElement, getTextFromHTMLElement} from "../../utils/parse-html-functions";
import { JSDOM } from 'jsdom'


import { chromium, devices } from 'playwright';

const {Sequelize} = require('sequelize');
const {DataTypes} = require('sequelize');

import { parseDiscountHtmlObject } from './parse-steam-html-object'
import * as fs from "fs";
import path from "path";

export async function searchSteamDiscount(){

    let sequelizeInstance= new Sequelize(
        'mtshuck', // Название БД
        'admin', // Пользователь
        'JAFXR8\\p)(pa^C', // ПАРОЛЬ
        {
            dialect: 'mysql',
            host: '81.31.246.38',
            port: 3306,

            logging:false,//Отключаем логирование Sequlize

            define:{

                timestamps:false,//Отключаем временные метки создания и удаления

            },

        });

        const discountModel = sequelizeInstance.define('discount-objects',{

            oldPrice:{type: DataTypes.DOUBLE},

            newPrice:{type: DataTypes.DOUBLE},

            imgURL:{type: DataTypes.TEXT},

            detailedURL:{type: DataTypes.TEXT},
        });

        console.log(await discountModel.findAll());

        let newDiscountsArray:Array<{oldPrice:string, newPrice:string, imgURL:string,detailedURL:string}>=[];

        //Запускаем браузер
        const browser = await chromium.launch({headless:true,});
        const context = await browser.newContext(devices['iPhone 11']);
        const searchPage = await context.newPage();

        //Переходим на страницу поиска
        await searchPage.goto('https://store.steampowered.com/specials/');

        await searchPage.waitForSelector('#SaleSection_40558 > div > div:nth-child(5) > div > div > div > div._2Va3O50Z5ksJJcpvj-JFDI > a > div > div.Cqh49Swp0GfLaJ35snZqi.CapsuleImageCtn > img')

        //Получаем весь HTML-контент на странице
        let searchPageContent=await searchPage.content();

       //let testFilePath= path.resolve(__dirname, 'test.txt');

       //fs.writeFileSync('./test.txt', searchPageContent)

        //let searchPageContent=(fs.readFileSync('./test.html')).toString();

        //console.log(searchPageContent);


        //Переносим HTML строку в JSDOM
        // @ts-ignore
        const searchPageDOM=new JSDOM(searchPageContent);

        //Получаем объект документа со всеми DOM моделями и записываем его
        //в соответствующую переменную
        let document=searchPageDOM.window.document;

        //Закрываем контекст
        await browser.close();

        if(document!=null) {

            //Получаем коллекцию узлов-объектов (продуктов, лотов) на странице на данный момент
            let discount_HTML_ElementsNodeList=getAllHTMLElements(document, `#SaleSection_40558 > div > div`);

            //Получаем из коллекции узлов массив (продуктов, лотов) на странице на данный момент
            let discount_HTML_ElementsArray = Array.from(discount_HTML_ElementsNodeList);

            //На основе массива HTML-объектов заполняем массив с данными для продуктов
            let newDiscountsArray = discount_HTML_ElementsArray.map((discount_HTML_Element, index) => {

                //Получаем данные из HTML-объекта
                let discountObject = parseDiscountHtmlObject(document, index);

                return discountObject;

            });

            console.log(newDiscountsArray);

            //Удаляем все записи
            await discountModel.destroy({where: {},truncate: true})


            //Добавляем в базу данных новые объекты скидок
            await discountModel.bulkCreate(newDiscountsArray);

        }

}

