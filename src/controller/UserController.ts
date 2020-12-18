import User from "@model/User";
import { Request, Response } from "express";
import { getRepository } from "typeorm";



class UserController{
      async store(req: Request, res: Response){
        const repository = await getRepository(User);
        const{email, password, userName} = req.body;

        const userExists = await repository.findOne({where: {email}});
        if(userExists){
          return res.sendStatus(409);
        }
        const user = repository.create({email, password, userName});
        await repository.save(user);
        return res.json(user);
      }
}

export default new UserController();