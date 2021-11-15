"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const loginControllers_1 = __importDefault(require("../controllers/loginControllers"));
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
        this.getToken();
        this.secretInfo();
        this.secret();
    }
    config() {
        this.router.get('/users', loginControllers_1.default.list);
    }
    getToken() {
        this.router.post('/singin', loginControllers_1.default.gettoken);
    }
    secretInfo() {
        this.router.post('/test', loginControllers_1.default.secretinfo);
    }
    secret() {
        this.router.post('/test', loginControllers_1.default.secret);
    }
}
exports.loginRoutes = new LoginRoutes();
exports.default = exports.loginRoutes.router;
