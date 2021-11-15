"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/login", loginRoutes_1.default);
        /*this.app.use("/productos", productsRoutes);
    
        this.app.use("/users", usersRoutes);
        this.app.use("/proveedores", providersRoutes);
        this.app.use("/signup", authenticationRoutes);
        this.app.use("/usuario", UsuarioRoutes);
        this.app.use("/entradas", resupplyRoutes);
        this.app.use("uploads", express.static(path.resolve("uploads")));
        this.app.use("/inventario", inventarioRoutes);
        this.app.use("/venta",ventasRoutes);
      this.app.use("/contacto",contactoRoutes);
      */
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
