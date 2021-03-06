import { tbodyCommandTypes } from "./tbodyCommand.types";

export const MAKE_TBODY = (boolean, array) => ({
  // boolean
  type: tbodyCommandTypes.MAKE_TBODY,
  payload: boolean,
  array
});

export const TBODY_ASCDESC = () => ({
  type: tbodyCommandTypes.TBODY_ASCDESC
});

export const ORDER_VALUE = (order, array, ascdesc) => ({
  type: tbodyCommandTypes.ORDER_VALUE,
  payload: order,
  array,
  ascdesc
});

export const ISINFAV_VALUE = (id, array, faarray) => ({
  type: tbodyCommandTypes.ISINFAV_VALUE,
  payload: id,
  array,
  faarray
});

export const SUGG_VALUE = (array) => ({
  type: tbodyCommandTypes.SUGG_VALUE,
  payload: array
});

export const HINT_SUGG_VALUE = (array) => ({
  type: tbodyCommandTypes.HINT_SUGG_VALUE,
  payload: array
});

export const TSEARCH_VALUE = (searchTerm) => ({
  type: tbodyCommandTypes.TSEARCH_VALUE,
  payload: searchTerm
});

export const UPDATETRIGGER_VALUE = () => ({
  type: tbodyCommandTypes.UPDATETRIGGER_VALUE
});
export const UPDATEHINT_VALUE = (boolean) => ({
  type: tbodyCommandTypes.UPDATEHINT_VALUE,
  payload: boolean
});
