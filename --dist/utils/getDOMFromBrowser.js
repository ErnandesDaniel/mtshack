"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDOMFromBrowser = void 0;
const jsdom_1 = require("jsdom");
const { JSDOM } = jsdom_1.default;
async function getDOMFromBrowser(searchURL, browser) {
    let document = null;
    let port = 9060 + getRandomInt(40);
    try {
        let context = await browser.newContext({
            proxy: { server: `127.0.0.1:${port}`, }
        });
        let searchPage = await context.newPage();
        await searchPage.goto(searchURL, { waitUntil: 'domcontentloaded' });
        let searchPageContent = await searchPage.content();
        const searchPageDOM = new JSDOM(searchPageContent);
        document = searchPageDOM.window.document;
        await context.close();
    }
    catch (error) {
        console.log('Playwright: страница не была загружена');
    }
    return document;
}
exports.getDOMFromBrowser = getDOMFromBrowser;
//# sourceMappingURL=getDOMFromBrowser.js.map