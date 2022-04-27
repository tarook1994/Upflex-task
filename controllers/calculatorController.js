import axios from "axios";
import { format, sub } from "date-fns";
import dotenv from "dotenv";
import { findBestDipPeakPair } from "../utils/helpers.js";
dotenv.config();

export const calculateMaximumProfit = async (req, res) => {
  const BASE_URL = process.env.GOLD_PRICE_BASE_URL;
  /* Could be used for calculating the exact profit but this is not required for the task */
  const INVESTMENT_AMOUNT = 135000;
  try {
    const today = new Date();
    const arrayOfFiveYearsDates = [0, 1, 2, 3, 4, 5, 6].map(
      (numberOfYearsToSubtract) =>
        format(sub(today, { years: numberOfYearsToSubtract }), "yyyy-MM-dd")
    );
    const arrayOfApiPromises = [];
    for (let i = 0; i < arrayOfFiveYearsDates.length - 2; i++) {
      arrayOfApiPromises.push(
        axios.get(
          `${BASE_URL}/${arrayOfFiveYearsDates[i + 1]}/${
            arrayOfFiveYearsDates[i]
          }`
        )
      );
    }
    const [yearOne, yearTwo, yearThree, yearFour, yearFive] = await Promise.all(
      arrayOfApiPromises
    );
    const arrayOfApiData = [
      ...yearOne.data,
      ...yearTwo.data,
      ...yearThree.data,
      ...yearFour.data,
      ...yearFive.data,
    ];
    const dipPeakPair = findBestDipPeakPair(arrayOfApiData);
    const [buyData, sellData] = dipPeakPair;

    return res.status(200).json({
      best_buy_date: buyData.data,
      best_buy_price: buyData.cena,
      best_sell_date: sellData.data,
      best_sell_price: sellData.cena,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
