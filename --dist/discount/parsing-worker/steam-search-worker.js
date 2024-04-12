"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteamSearchFunction = void 0;
const search_steam_discount_1 = require("./search-steam-discount");
async function SteamSearchFunction() {
    await (0, search_steam_discount_1.searchSteamDiscount)();
    setTimeout(SteamSearchFunction, 60000);
}
exports.SteamSearchFunction = SteamSearchFunction;
SteamSearchFunction().then(() => {
    console.log('Заработал!');
});
//# sourceMappingURL=steam-search-worker.js.map