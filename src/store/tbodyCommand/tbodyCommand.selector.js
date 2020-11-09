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

const selectFav = (state) => state.faValue;
export const selectFaValue = createSelector(
  [selectFav],
  (faValue) => faValue.faValue
);

const selectSug = (state) => state.suValue;
export const selectSuValue = createSelector(
  [selectSug],
  (suValue) => suValue.suValue
);

const selectHintSug = (state) => state.hintSuValue;
export const selectHintSuValue = createSelector(
    [selectHintSug],
    (hintSuValue) => hintSuValue.hintSuValue
);

const selectTs = (state) => state.TSValue;
export const selectTsValue = createSelector(
  [selectTs],
  (TSValue) => TSValue.TSValue
);

const selectUpTr = (state) => state.upTrValue;
export const selectUpTrValue = createSelector(
  [selectUpTr],
  (upTrValue) => upTrValue.upTrValue
);

// ORDER_VALUE
