import { combineReducers } from "redux";
import tbodyReducer from "./tbodyCommand/tbodyCommand.reducer";

export default combineReducers({
  comVal: tbodyReducer,
  ascdescVal: tbodyReducer,
  ordValue: tbodyReducer,
  faValue: tbodyReducer,
  suValue: tbodyReducer,
  TSValue: tbodyReducer,
  UpTrValue: tbodyReducer
});
