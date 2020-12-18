import express, { request, response } from 'express';
import routes from "@routes/router";
import "./connection";

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333, () => console.log("Inicializando o servidor!"));
