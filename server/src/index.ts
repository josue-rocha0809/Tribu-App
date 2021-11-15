import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import loginRoutes from "./routes/loginRoutes";


class Server {
  public app: Application;
  constructor() {
    this.app = express();
 
    this.config();
    this.routes();
  }
  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  routes(): void {
   this.app.use("/login", loginRoutes);
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

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}
const server = new Server();
server.start();
