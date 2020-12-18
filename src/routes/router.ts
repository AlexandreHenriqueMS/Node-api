import {Router} from "express";
import { userInfo } from "os";
import UserController from "@controller/UserController";

const routes = Router();

routes.post("/user", UserController.store);
routes.get("/user", UserController.findAll);
routes.get("/user/:id", UserController.findById);
routes.delete("/user/:id", UserController.deleteUser);

export default routes;