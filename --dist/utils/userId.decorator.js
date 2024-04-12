"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const common_1 = require("@nestjs/common");
const token_1 = require("./token");
let tokens = new token_1.Tokens();
exports.UserId = (0, common_1.createParamDecorator)((data, ctx) => {
    let userId = 0;
    const request = ctx.switchToHttp().getRequest();
    let authHeader = request.headers.authorization;
    let authToken;
    if (authHeader) {
        authToken = authHeader.split(' ')[1];
    }
    if (tokens.check(authToken) == 'TokenIsValid') {
        let decodedToken = tokens.getDecodedToken(authToken);
        userId = decodedToken.id;
    }
    return userId;
});
//# sourceMappingURL=userId.decorator.js.map