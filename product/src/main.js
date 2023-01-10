import express from 'express';
import { router } from './routes.js';
import swaggerUi from "swagger-ui-express";
import apiDocs from  "./api-docs.json" assert {type: "json"}; ;
import client from './repositories/databaseClient.js';
const app = express();
app.use(express.json());
app.use(router);
//db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs));
app.listen(3000, function () {
    console.log('Servidor iniciado na porta 3000');
client.authenticate()
    .then(() => {
        console.log('Db connection OK!')
    }).catch(e => {
        console.log('Db connection Error: ', e)
    })
});