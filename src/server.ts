import express, { request, response } from 'express';
import routes from "./router";
import "./connection";

const app = express();

app.use(routes);
app.use(express.json());

app.listen(3333, () => console.log("Inicializando o servidor!"));
