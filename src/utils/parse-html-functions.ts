

function getHTMLElement(DOM_Object:Element|Document, selector:string):Element{

  return DOM_Object.querySelector(selector);

}

function getTextFromHTMLElement(DOM_Object:Element|Document):string{

  let text=DOM_Object.textContent;

  //Удаляем символы переноса строки
  text = text.replace(/(\r\n|\n|\r)/gm, "");

  //Удаляем лишние пробелы в строке (более одного пробела подряд)
  text = text.replace(/ +/g, ' ');

  return text;

}

function getAttributeFromHTMLElement(DOM_Object:Element, attributeName:string):string{

  return  DOM_Object.getAttribute(attributeName);

}

function getAllHTMLElements(DOM_Object:Element|Document, selector:string){

  return DOM_Object.querySelectorAll(selector);

}

export {

  getTextFromHTMLElement,

  getAttributeFromHTMLElement,

  getHTMLElement,

  getAllHTMLElements

}