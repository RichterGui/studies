import express from "express";
import "./database";

import { Request, Response, NextFunction } from "express";

import "./shared/container";
import "reflect-metadata";
import swaggerUI from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { AppError } from "./errors/AppError";
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
