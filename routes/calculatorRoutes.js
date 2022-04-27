import express from "express";
import { calculateMaximumProfit } from "../controllers/calculatorController.js";

export const calculatorRouter = express.Router();
calculatorRouter.get("/maxProfit", calculateMaximumProfit);
