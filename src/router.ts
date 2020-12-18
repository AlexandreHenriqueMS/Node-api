import {Router} from "express";
import { userInfo } from "os";
import UserController from "./controller/UserController";

const routes = Router();

routes.post("/user", UserController.store);

export default routes;