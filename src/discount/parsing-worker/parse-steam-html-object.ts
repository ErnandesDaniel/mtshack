import {
  getAttributeFromHTMLElement,
  getHTMLElement,
  getTextFromHTMLElement } from "../../utils/parse-html-functions";

import * as chrono from 'chrono-node';


export function parseDiscountHtmlObject(document:Document, index:number){

    let link_HTMLElement_IMG_URL=document.querySelector(`#SaleSection_40558 > div > div:nth-child(${ index+1 }) > div > div > div > div._2Va3O50Z5ksJJcpvj-JFDI > a > div > div.Cqh49Swp0GfLaJ35snZqi.CapsuleImageCtn > img`);

    let imgURL;

    if(link_HTMLElement_IMG_URL!=null){

        imgURL=getAttributeFromHTMLElement(link_HTMLElement_IMG_URL, 'src');

    }

    let link_HTMLElement_detailed_URL=document.querySelector(`#SaleSection_40558 > div > div:nth-child(${ index+1 }) > div > div > div > div._2Va3O50Z5ksJJcpvj-JFDI > a`);

    let detailedURL;

    if(link_HTMLElement_detailed_URL!=null){

        detailedURL=getAttributeFromHTMLElement(link_HTMLElement_detailed_URL, 'href');

    }

    let newPrice_HTML=document.querySelector(`#SaleSection_40558 > div > div:nth-child(${ index+1 }) > div > div > div > div._1lRFu670LVk6Gmeb12h7Hr > div._1gO7r6Xr5gQHoBBkERY0gd > div > div.tqNH01O5etkpJLgUyBPcP.StoreSalePriceWidgetContainer._35-UbCInUAiUv7UIRWnV5a.Discounted > div._3GLeQSpjtTPdHW4J8KwCSa > div.Wh0L8EnwsPV_8VAu8TOYr`);

    let newPrice=0;

    if(newPrice_HTML!=null){

        //Убираем из строки все символы кроме цифр
        newPrice=Number(newPrice_HTML.textContent.replace(/\D/g,''));

    }

    let oldPrice_HTML=document.querySelector(`#SaleSection_40558 > div > div:nth-child(${ index+1 }) > div > div._38DqRPm1idN0e6J5IRYowx.Panel.Focusable > div > div._1lRFu670LVk6Gmeb12h7Hr > div._1gO7r6Xr5gQHoBBkERY0gd > div > div.tqNH01O5etkpJLgUyBPcP.StoreSalePriceWidgetContainer._35-UbCInUAiUv7UIRWnV5a.Discounted > div._3GLeQSpjtTPdHW4J8KwCSa > div._1EKGZBnKFWOr3RqVdnLMRN`);

    let oldPrice=0;

    if(oldPrice_HTML!=null){

        //Убираем из строки все символы кроме цифр
        oldPrice=Number(oldPrice_HTML.textContent.replace(/\D/g,''));

    }


  return {

    oldPrice,

    newPrice,

    imgURL,

    detailedURL,

  };

}