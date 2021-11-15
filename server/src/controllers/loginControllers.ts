import { NextFunction, request, Request,Response} from 'express';
import pool from '../database'
const jwt=require('jsonwebtoken');
let info;

 export class LoginControllers{
   
    public async list(req:Request,res:Response){
        const users= await pool.query('Select * from users');
       res.json(users);
       console.log(users);
       }

    public async gettoken(req:Request,res:Response){
        const {id, password}= req.body;
      const users= await pool.query('Select id,rol,nombre,apellido_pat,apellido_mat from users where id=? and password=?',
        [id,password]);
       console.log(users);
       if(users.length>0){
        let data=JSON.stringify(users[0]);
        const token=jwt.sign(data,'stil');
        res.json({token});
       }else{
           res.json('usuario incorrecto');
       }
       }

       secretinfo=(req:Request,res:Response,next:NextFunction)=>{
        if(!req.headers.authorization)return res.status(401).json('no autorizado') 
        const token=req.headers.authorization.substr(7);let id="";
        if(token!==''){
          const content= jwt.verify(token,'stil');
          req.params=content;
          console.log(req.params);
          info=req.params;
          next();
       }else{
           res.json('token vacio')
       }
       }

       secret=(req:Request,res:Response)=>{
       res.json('informacion secreta')
       }
       
    }
    

const loginController = new LoginControllers();
export default loginController;