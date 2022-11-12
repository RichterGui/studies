import express from "express";
import { categoriesRoutes } from "./routes/catefories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
