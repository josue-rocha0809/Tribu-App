"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginControllers = void 0;
const database_1 = __importDefault(require("../database"));
const jwt = require('jsonwebtoken');
let info;
class LoginControllers {
    constructor() {
        this.secretinfo = (req, res, next) => {
            if (!req.headers.authorization)
                return res.status(401).json('no autorizado');
            const token = req.headers.authorization.substr(7);
            let id = "";
            if (token !== '') {
                const content = jwt.verify(token, 'stil');
                req.params = content;
                console.log(req.params);
                info = req.params;
                next();
            }
            else {
                res.json('token vacio');
            }
        };
        this.secret = (req, res) => {
            res.json('informacion secreta');
        };
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('Select * from users');
            res.json(users);
            console.log(users);
        });
    }
    gettoken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, password } = req.body;
            const users = yield database_1.default.query('Select id,rol,nombre,apellido_pat,apellido_mat from users where id=? and password=?', [id, password]);
            console.log(users);
            if (users.length > 0) {
                let data = JSON.stringify(users[0]);
                const token = jwt.sign(data, 'stil');
                res.json({ token });
            }
            else {
                res.json('usuario incorrecto');
            }
        });
    }
}
exports.LoginControllers = LoginControllers;
const loginController = new LoginControllers();
exports.default = loginController;
