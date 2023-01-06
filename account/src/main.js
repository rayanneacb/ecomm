import express from 'express';
import swaggerUi from "swagger-ui-express";
import { router } from './routes.js';
import apiDocs from './api-docs.json' assert { type: 'json' };
const app = express();
const port = 3000;
app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs));
app.use("/accountsV1", router)
app.listen(3000, function () {
    console.log('accounts server is running');
});