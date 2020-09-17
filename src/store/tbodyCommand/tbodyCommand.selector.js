import { createSelector } from "reselect";

const selectVal = (state) => state.comVal;
export const selectCommandValue = createSelector(
  [selectVal],
  (comVal) => comVal.comVal
);

const selectAsc = (state) => state.ascdescVal;
export const selectAscValue = createSelector(
  [selectAsc],
  (ascdescVal) => ascdescVal.ascdescVal
);

const selectOrd = (state) => state.ordValue;
export const selectOrdValue = createSelector(
  [selectOrd],
  (ordValue) => ordValue.ordValue
);

// ORDER_VALUE
