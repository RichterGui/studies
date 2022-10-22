import express from "express";

const app = express();
app.use(express.json());

const PORT = 3333;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
