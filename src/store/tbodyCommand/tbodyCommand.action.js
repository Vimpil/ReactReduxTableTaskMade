import { tbodyCommandTypes } from "./tbodyCommand.types";

export const MAKE_TBODY = () => ({
  type: tbodyCommandTypes.MAKE_TBODY
  // payload: tbodycommand
});

export const TBODY_ASCDESC = () => ({
  type: tbodyCommandTypes.TBODY_ASCDESC
});

export const ORDER_VALUE = (order, array) => ({
  type: tbodyCommandTypes.ORDER_VALUE,
  payload: order,
  array
});

export const ISINFAV_VALUE = (array) => ({
  type: tbodyCommandTypes.ISINFAV_VALUE,
  payload: array
});

export const SUGG_VALUE = (array) => ({
  type: tbodyCommandTypes.SUGG_VALUE,
  payload: array
});
