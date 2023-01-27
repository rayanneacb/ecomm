import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./api-docs.json" assert {type: "json"};
import { app } from './app.js';

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT_LISTEN, function () {
    console.log('accounts server is running');
});