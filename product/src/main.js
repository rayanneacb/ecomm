import express from 'express';
import { router } from './routes.js';
import swaggerUi from "swagger-ui-express";
import apiDocs from  "./api-docs.json" assert {type: "json"}; ;

const app = express();
app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs));
app.listen(3000, function () {
    console.log('products server is running');
});