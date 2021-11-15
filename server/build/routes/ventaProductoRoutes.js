"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventaProductosRoutes = void 0;
const express_1 = require("express");
const ventaProductosControllers_1 = __importDefault(require("../controllers/ventaProductosControllers"));
class VentaProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.patch('/', ventaProductosControllers_1.default.createVentaProductos); //crear producto
    }
}
exports.ventaProductosRoutes = new VentaProductosRoutes();
exports.default = exports.ventaProductosRoutes.router;
