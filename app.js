import express from "express";
import cors from "cors";
import { calculatorRouter } from "./routes/calculatorRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/calculate", calculatorRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}   `);
});
