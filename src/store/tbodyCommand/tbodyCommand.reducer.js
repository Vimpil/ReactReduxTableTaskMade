import { tbodyCommandTypes } from "./tbodyCommand.types";
import properties$ from "./../../mock";

const INITIAL_STATE = {
  comVal: [],
  ordValue: "id",
  ascdescVal: true,
  faValue: [],
  suValue: 0,
  upTrValue: false,
  TSValue: undefined,
  hintSuValue: [],
  hintValue: false
};

var row_temp = [];

function sortJSON(arr, key, way) {
  return arr.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    var xl = a["love"];
    var yl = b["love"];
    if (way) {
      return x < y ? (xl ? -1 : yl ? 1 : -1) : yl ? 1 : xl ? -1 : 1;
    } else {
      return x < y ? (xl ? (yl ? 1 : -1) : 1) : yl ? (xl ? -1 : 1) : -1;
    }
  });
}

const commandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tbodyCommandTypes.MAKE_TBODY:
    function makeTbodyArray() {
      let subscription = properties$.subscribe((data) => {
        // console.log(
        //   "***************************makeTbodyArray()***************************"
        // );
        // console.log("action.payload");
        // console.log(action.payload);
        // console.log("action.array");
        // console.log(action.array);
        // console.log(action.array !== undefined);
        // console.log(JSON.stringify(action.array));
        if (row_temp !== undefined) {
          if (row_temp.length < 10) {
            if (row_temp.length === 9) {
              if (action.array !== undefined) {
                // console.log("action.array[entry.payload]");
                // console.log(action.array[action.payload]);

                // if (action.array[action.payload]) {
                //   row_temp["love"] = true;
                // }

                // action.array.forEach(function (entry) {
                //   let parses = entry.love;
                //   // console.log("parses");
                //   // console.log(parses);
                //   // console.log("entry.id");
                //   // console.log(entry.id);
                //   // console.log('data["id"]');
                //   // console.log(data["id"]);
                //   // console.log(entry.id === data["id"]);
                //   // if (entry.id === data["id"] && data["love"] !== entry.love) {
                //   // data["love"] = 0;

                //   if (entry.id === row_temp["id"]) {
                //     // console.log(entry.id);
                //     // console.log(entry.love);
                //     row_temp["love"] = entry.love;
                //     // entry.love
                //     //   console.log("JSON.stringify(action.array)");
                //     // console.log(JSON.stringify(action.array));
                //     // else {
                //     //   data["love"] = 0;
                //   }
                // });

                for (var i = 0; i < action.array.length; i++) {
                  row_temp.forEach(function (entry) {
                    let parses = entry.id;
                    if (parses === action.array[i]) {
                      entry.love = true;
                    }
                    // let inside = "1001".includes(needToFind2);
                    // if (entry.id.toString().includes(needToFind2)) {
                    //   sugArr2.push(entry);
                    // }
                  });
                  // row_temp[action.array[i]].love = true;

                  // console.log('row_temp');
                  // console.log(row_temp);
                  // console.log(row_temp[10000]);
                  // console.log("row_temp[action.array[i]]");
                  // console.log(row_temp[action.array[i]]);
                }
              }
            }

            // console.log("row_temp" + row_temp);
            // console.log("action.payload");
            // console.log(action.payload);
            //
            // console.log("action.array");
            // console.log(action.array);
            // console.log(action.array["id"]);

            // if (action.array !== "undefined") {
            //   // console.log("action.array(item => item.id === '10000')");
            //   // console.log(action.array(item => item.id === '10000'));
            // }
            // console.log("(action.payload)");
            // console.log(action.payload);
            // console.log("action.array");
            // console.log(JSON.stringify(action.array));

            // if (action.payload) {
            // if (action.array !== undefined) {

            //   console.log("comval 1.1");
            // console.log(JSON.stringify(action.array));

            // if (action.array.length < 1) {
            //   data["love"] = 0;
            // }
            // console.log("FUNCT");

            // let inside = "1001".includes(needToFind2);
            // if (entry.id.toString().includes(needToFind2)) {
            //   sugArr2.push(entry);
            // }
            // }
            // } else {
            // console.log("GOING TO ZERO");

            // }

            //   console.log("comval 1.2");
            // console.log(JSON.stringify(action.array));
            // console.log("action.array !== undefined");
            // console.log(action.array !== undefined);
            // console.log("action.array");
            // console.log(action.array);

            // console.log("ACTION" + JSON.stringify(action));

            row_temp.push(data);
          } else {
            subscription.unsubscribe();
          }
        }
      });

      // console.log("---------------------row_temp---------------------");
      // console.log(JSON.stringify(row_temp));
      // console.log("---------------------row_temp---------------------");

      return row_temp;
    }
      let sortedArrFirst = sortJSON(
          makeTbodyArray(),
          state.ordValue,
          state.ascdescVal
      );

      // console.log("***AFTER sortedArrFirst***");
      // console.log(sortedArrFirst);
      // console.log("state.ordValue");
      // console.log(state.ordValue);
      // console.log("state.ascdescVal");
      // console.log(state.ascdescVal);
      // console.log("***END AFTER sortedArrFirst***");
      row_temp = [];
      // console.log("sortedArrFirst");
      // console.log(JSON.stringify(sortedArrFirst));

      return {
        ...state,
        comVal: sortedArrFirst
      };

    case tbodyCommandTypes.ORDER_VALUE:
      // console.log("tbodyCommandTypes.ORDER_VALUE");
      // console.log(action.ascdesc);
      let sortedArr = sortJSON(
          state.comVal,
          action.payload.toLowerCase(),
          action.ascdesc
      );
      // console.log("tbodyCommandTypes.ORDER_VALUE");
      // console.log(action.ascdesc);
      if (state.suValue === 0) {
        return {
          ...state,
          comVal: sortedArr,
          ordValue: action.payload,
          ascdescVal: action.ascdesc
        };
      } else {
        return {
          ...state,
          suValue: sortedArr,
          ordValue: action.payload,
          ascdescVal: action.ascdesc
        };
      }

    case tbodyCommandTypes.ISINFAV_VALUE:
      let fa = action.array;
      // var newFaArr = [];
      // console.log("fa");
      // console.log(fa);

      // let newfaValue = new Map(state.faValue);

      // console.log("state.faValue[1]");
      // console.log(state.faValue[1]);

      // var counter = state.faValue[0];
      // newfaValue = state.faValue;

      // console.log("action.boolean");
      // console.log(action.boolean);

      // console.log("action.payload");
      // console.log(action.payload);

      // function findIDinArr(newArray, array, id) {
      //   for (var i = 0; i < action.array.length - 1; i++) {
      //     if (action.array[i] === action.id) {
      //       const index = action.array.indexOf(action.array[i]);
      //       newArray = action.array.splice(index, 1);
      //       return newArray;
      //     }
      //   }

      //   newArray = action.array;
      //   newArray["id"] = id;
      //   return newArray;
      // }

      // if (!newfaValue.get(action.payload)) {
      //   // console.log("TRUE");
      //   newfaValue.set(action.payload, true);
      //   // newfaValue[action.payload] = true;

      //   // console.log("if(newfaValue[10000]){");
      //   // if(newfaValue[10000]){
      //   // console.log('newfaValue[10000]');
      //   //     console.log(newfaValue[10000]);
      //   // }
      // } else {
      //   // console.log("FALCE");
      //   // const index = arr.indexOf(newfaValue[action.payload]);
      //   newfaValue.delete(action.payload);

      //   // if (newfaValue[action.payload]) {
      //   //   console.log("we have it");
      //   //   console.log("index is " + index);
      //   //   arr.splice(index, 1);
      //   // }
      // }

      return {
        ...state,
        // ,
        comVal: fa,
        faValue: action.faarray
      };

    case tbodyCommandTypes.SUGG_VALUE:
    function isNumeric(str) {
      if (typeof str != "string") return false; // we only process strings!
      return (
          !isNaN(str) && !isNaN(parseFloat(str)) // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      ); // ...and ensure strings of whitespace fail
    }
      let sugArr = [];

      let input = state.TSValue;

    function compare(needToFind) {
      // console.log(
      //   "needToFind.split().length !!" +
      //     needToFind.toString().split("").length
      // );
      if (needToFind !== 0) {
        // console.log("needToFind" + needToFind);
        // console.log(
        //   "needToFind.split().length" +
        //     needToFind.toString().split(" ").length
        // );
        if (isNumeric(needToFind)) {
          action.payload.forEach(function (entry) {
            let parses = entry.id;
            let inside = "1001".includes(needToFind);
            if (entry.id.toString().includes(needToFind)) {
              sugArr.push(entry);
            }
          });
        } else if (
            needToFind.toString().toLowerCase() === "home" ||
            needToFind.toString().toLowerCase() === "condo"
        ) {
          action.payload.forEach(function (entry) {
            let parses = entry.type;
            let inside = "home".includes(needToFind);

            if (entry.type.toString().toLowerCase().includes(needToFind)) {
              sugArr.push(entry);
            }
          });
        } else {
          action.payload.forEach(function (entry) {
            let parses = entry.address;
            // let inside = "Durwardton 74276 Windler Trafficway"
            //     .toLowerCase()
            //     .includes(needToFind.toLowerCase());

            if (
                entry.address
                    .toString()
                    .toLowerCase()
                    .includes(needToFind.toLowerCase())
            ) {
              sugArr.push(entry);
            }
          });
        }
      }
      if (sugArr.length > 0) {
        return sugArr;
      } else {
        return 0;
      }
    }

      return {
        ...state,
        suValue: compare(input)
      };

    case tbodyCommandTypes.TSEARCH_VALUE:
      let TSValue = action.payload;
      return {
        ...state,
        TSValue: TSValue
      };

    case tbodyCommandTypes.UPDATETRIGGER_VALUE:
      let notBool = !state.upTrValue;
      return {
        ...state,
        upTrValue: notBool
      };

    case tbodyCommandTypes.HINT_SUGG_VALUE:
    function isNumeric2(str) {
      if (typeof str != "string") return false; // we only process strings!
      return (
          !isNaN(str) && !isNaN(parseFloat(str)) // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      ); // ...and ensure strings of whitespace fail
    }
      let sugArr2 = [];

      let input2 = state.TSValue;

    function compare2(needToFind2) {
      // console.log(
      //   "needToFind2.split().length !!" +
      //     needToFind2.toString().split("").length
      // );
      if (needToFind2 !== 0) {
        // console.log("needToFind2" + needToFind2);
        // console.log(
        //   "needToFind2.split().length" +
        //     needToFind2.toString().split(" ").length
        // );
        if (isNumeric2(needToFind2)) {
          action.payload.forEach(function (entry) {
            let parses = entry.id;
            let inside = "1001".includes(needToFind2);
            if (entry.id.toString().includes(needToFind2)) {
              sugArr2.push(entry);
            }
          });
        } else if (
            needToFind2.toString().toLowerCase() === "home" ||
            needToFind2.toString().toLowerCase() === "condo"
        ) {
          action.payload.forEach(function (entry) {
            let parses = entry.type;
            let inside = "home".includes(needToFind2);

            if (entry.type.toString().toLowerCase().includes(needToFind2)) {
              sugArr2.push(entry);
            }
          });
        } else {
          action.payload.forEach(function (entry) {
            let parses = entry.address;
            // let inside = "Durwardton 74276 Windler Trafficway"
            //     .toLowerCase()
            //     .includes(needToFind.toLowerCase());

            if (
                entry.address
                    .toString()
                    .toLowerCase()
                    .includes(needToFind2.toLowerCase())
            ) {
              sugArr2.push(entry);
            }
          });
        }
      }
      if (sugArr2.length > 0) {
        return sugArr2;
      } else {
        return 0;
      }
    }

      return {
        ...state,
        hintSuValue: compare2(input2)
      };

    case tbodyCommandTypes.UPDATEHINT_VALUE:
      var hintBool = action.payload;

      return {
        ...state,
        hintValue: hintBool
      };

    default:
      return state;
  }
};

export default commandReducer;
