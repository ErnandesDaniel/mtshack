"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokens = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
const signOptions = {
    algorithm: "HS256",
};
let Tokens = class Tokens {
    create(payload) {
        return (0, jsonwebtoken_1.sign)(payload, process.env.secretAuthorizationTokenKey, signOptions);
    }
    check(token) {
        let result = '';
        if (token != null) {
            try {
                result = (0, jsonwebtoken_1.verify)(token, process.env.secretAuthorizationTokenKey, signOptions);
                result = 'TokenIsValid';
            }
            catch (err) {
                result = 'TokenIsInvalid';
            }
        }
        else if (token == '') {
            result = 'TokenIsEmpty';
        }
        return result;
    }
    getDecodedToken(token) {
        let decodedToken = (0, jsonwebtoken_1.decode)(token);
        if (typeof decodedToken == 'string') {
            return JSON.parse(decodedToken);
        }
        else {
            return decodedToken;
        }
    }
};
exports.Tokens = Tokens;
exports.Tokens = Tokens = __decorate([
    (0, common_1.Injectable)()
], Tokens);
//# sourceMappingURL=token.js.map