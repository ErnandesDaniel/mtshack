"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSteamDiscount = void 0;
const parse_html_functions_1 = require("../../utils/parse-html-functions");
const jsdom_1 = require("jsdom");
const playwright_1 = require("playwright");
const { Sequelize } = require('sequelize');
const { DataTypes } = require('sequelize');
const parse_steam_html_object_1 = require("./parse-steam-html-object");
async function searchSteamDiscount() {
    let sequelizeInstance = new Sequelize('mtshuck', 'admin', 'JAFXR8\\p)(pa^C', {
        dialect: 'mysql',
        host: '81.31.246.38',
        port: 3306,
        logging: false,
        define: {
            timestamps: false,
        },
    });
    const discountModel = sequelizeInstance.define('discount-objects', {
        oldPrice: { type: DataTypes.DOUBLE },
        newPrice: { type: DataTypes.DOUBLE },
        imgURL: { type: DataTypes.TEXT },
        detailedURL: { type: DataTypes.TEXT },
    });
    console.log(await discountModel.findAll());
    let newDiscountsArray = [];
    const browser = await playwright_1.chromium.launch({ headless: true, });
    const context = await browser.newContext(playwright_1.devices['iPhone 11']);
    const searchPage = await context.newPage();
    await searchPage.goto('https://store.steampowered.com/specials/');
    await searchPage.waitForSelector('#SaleSection_40558 > div > div:nth-child(5) > div > div > div > div._2Va3O50Z5ksJJcpvj-JFDI > a > div > div.Cqh49Swp0GfLaJ35snZqi.CapsuleImageCtn > img');
    let searchPageContent = await searchPage.content();
    const searchPageDOM = new jsdom_1.JSDOM(searchPageContent);
    let document = searchPageDOM.window.document;
    await browser.close();
    if (document != null) {
        let discount_HTML_ElementsNodeList = (0, parse_html_functions_1.getAllHTMLElements)(document, `#SaleSection_40558 > div > div`);
        let discount_HTML_ElementsArray = Array.from(discount_HTML_ElementsNodeList);
        let newDiscountsArray = discount_HTML_ElementsArray.map((discount_HTML_Element, index) => {
            let discountObject = (0, parse_steam_html_object_1.parseDiscountHtmlObject)(document, index);
            return discountObject;
        });
        console.log(newDiscountsArray);
        await discountModel.destroy({ where: {}, truncate: true });
        await discountModel.bulkCreate(newDiscountsArray);
    }
}
exports.searchSteamDiscount = searchSteamDiscount;
//# sourceMappingURL=search-steam-discount.js.map