"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDOMFromAxios = void 0;
const jsdom_1 = require("jsdom");
const { JSDOM } = jsdom_1.default;
const axios_1 = require("axios");
async function getDOMFromAxios(searchURL) {
    let document = null;
    try {
        let response = await axios_1.default.get(searchURL);
        let searchPageContent = response.data;
        const searchPageDOM = new JSDOM(searchPageContent);
        document = searchPageDOM.window.document;
    }
    catch (error) {
        console.log('Axios: страница не была загружена');
    }
    return document;
}
exports.getDOMFromAxios = getDOMFromAxios;
//# sourceMappingURL=getDOMFromAxios.js.map