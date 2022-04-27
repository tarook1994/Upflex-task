import { isBefore } from "date-fns";

export const findBestDipPeakPair = (arrayOfPricesWithDates) => {
  arrayOfPricesWithDates.sort((a, b) => a.cena - b.cena);
  for (
    let leftCounter = 0;
    leftCounter < arrayOfPricesWithDates.length;
    leftCounter++
  ) {
    const rightCounter = arrayOfPricesWithDates.length - 1 - leftCounter;

    if (
      isBefore(
        new Date(arrayOfPricesWithDates[leftCounter].data),
        new Date(arrayOfPricesWithDates[rightCounter].data)
      )
    ) {
      return [
        arrayOfPricesWithDates[leftCounter],
        arrayOfPricesWithDates[rightCounter],
      ];
    }
  }
};
