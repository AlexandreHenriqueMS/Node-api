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
      async findAll(req:Request, res:Response){
        const repository = await getRepository(User);
        const users = await repository.find();
        return res.json(users);
      }

      async findById(req:Request, res:Response){
        const id = req.params.id;
        const repository = await getRepository(User);
        try {
            const user = await repository.findOneOrFail(id);
            return res.json(user);
        } catch (error) {
            return res.status(404).send('user not found');
        }
      }

      async deleteUser(req:Request, res:Response){
        const id = req.params.id;
        const repository = await getRepository(User);
        try {
            const user = await repository.findOneOrFail(id);
        } catch (error) { 
          res.status(404).send('user not found');
          return;
        }
        repository.delete(id);
        res.status(204).send('Good Bye!');
      }
}

export default new UserController();