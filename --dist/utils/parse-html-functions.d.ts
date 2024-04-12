declare function getHTMLElement(DOM_Object: Element | Document, selector: string): Element;
declare function getTextFromHTMLElement(DOM_Object: Element | Document): string;
declare function getAttributeFromHTMLElement(DOM_Object: Element, attributeName: string): string;
declare function getAllHTMLElements(DOM_Object: Element | Document, selector: string): NodeListOf<Element>;
export { getTextFromHTMLElement, getAttributeFromHTMLElement, getHTMLElement, getAllHTMLElements };
