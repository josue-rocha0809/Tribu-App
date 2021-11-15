import {Router} from 'express';
import loginController from '../controllers/loginControllers'


class LoginRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
        this.getToken();
        this.secretInfo();
        this.secret();
      
    }

    config():void{
       this.router.get('/users',loginController.list); 
    }
   

  getToken():void{
        this.router.post('/singin',loginController.gettoken);
  }
  secretInfo():void{
    this.router.post('/test',loginController.secretinfo);
 } 
 secret():void{
    this.router.post('/test',loginController.secret);
 } 
 
  
}
export const loginRoutes= new LoginRoutes();
export default loginRoutes.router;


