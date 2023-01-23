import express from "express";
import "./database";
import "reflect-metadata";
import swaggerUI from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
