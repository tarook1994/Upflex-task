import { isBefore } from "date-fns";
/* 
    This algorithm is built on the nature of gold during the 5 years period.
    The nature is that the local minimum (lowest price) is always before the local maximum (maximum price).
    The algorithm was design taking into consideration this nature for the 5 years period. 
    In case we have a different pattern for a different duration, we may need to build a better algorithm to handle the case of having local min after the local max
  */
export const findBestDipPeakPair = (arrayOfPricesWithDates) => {
  arrayOfPricesWithDates.sort((a, b) => a.cena - b.cena);
  for (
    let leftPointer = 0;
    leftPointer < arrayOfPricesWithDates.length;
    leftPointer++
  ) {
    const rightPointer = arrayOfPricesWithDates.length - 1;

    if (
      isBefore(
        new Date(arrayOfPricesWithDates[leftPointer].data),
        new Date(arrayOfPricesWithDates[rightPointer].data)
      )
    ) {
      return [
        arrayOfPricesWithDates[leftPointer],
        arrayOfPricesWithDates[rightPointer],
      ];
    }
  }
};
