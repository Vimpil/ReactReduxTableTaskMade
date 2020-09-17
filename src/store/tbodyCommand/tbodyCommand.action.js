import { tbodyCommandTypes } from "./tbodyCommand.types";

export const MAKE_TBODY = () => ({
  type: tbodyCommandTypes.MAKE_TBODY
  // payload: tbodycommand
});

export const TBODY_ASCDESC = () => ({
  type: tbodyCommandTypes.TBODY_ASCDESC
});

export const ORDER_VALUE = (tableHead, array) => ({
  type: tbodyCommandTypes.ORDER_VALUE,
  payload: tableHead,
  array
});
