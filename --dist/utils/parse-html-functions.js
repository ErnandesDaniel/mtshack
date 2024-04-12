"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllHTMLElements = exports.getHTMLElement = exports.getAttributeFromHTMLElement = exports.getTextFromHTMLElement = void 0;
function getHTMLElement(DOM_Object, selector) {
    return DOM_Object.querySelector(selector);
}
exports.getHTMLElement = getHTMLElement;
function getTextFromHTMLElement(DOM_Object) {
    let text = DOM_Object.textContent;
    text = text.replace(/(\r\n|\n|\r)/gm, "");
    text = text.replace(/ +/g, ' ');
    return text;
}
exports.getTextFromHTMLElement = getTextFromHTMLElement;
function getAttributeFromHTMLElement(DOM_Object, attributeName) {
    return DOM_Object.getAttribute(attributeName);
}
exports.getAttributeFromHTMLElement = getAttributeFromHTMLElement;
function getAllHTMLElements(DOM_Object, selector) {
    return DOM_Object.querySelectorAll(selector);
}
exports.getAllHTMLElements = getAllHTMLElements;
//# sourceMappingURL=parse-html-functions.js.map