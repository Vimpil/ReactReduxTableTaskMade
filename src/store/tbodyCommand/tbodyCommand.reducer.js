import { tbodyCommandTypes } from "./tbodyCommand.types";
import properties$ from "./../../mock";

const INITIAL_STATE = {
  comVal: [],
  ordValue: "id",
  ascdescVal: true,
  faValue: 0,
  suValue: 0,
  upTrValue: false,
  TSValue: undefined,
  hintSuValue:[]
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
        if (row_temp.length < 10) {
          // console.log("row_temp" + row_temp);
          data["love"] = 0;
          row_temp.push(data);
        } else {
          subscription.unsubscribe();
        }
      });
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
      return {
        ...state,
        comVal: sortedArrFirst
      };

    case tbodyCommandTypes.ORDER_VALUE:
      let sortedArr = sortJSON(
          state.comVal,
          action.payload.toLowerCase(),
          action.ascdesc
      );

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
      let fa = action.payload;
      return {
        ...state,
        // ,
        comVal: fa,
        faValue: state.faValue + 1
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
      console.log("needToFind.split().length !!"+needToFind.toString().split("").length);
      if (needToFind !== 0) {
        console.log("needToFind"+needToFind)
        console.log("needToFind.split().length"+needToFind.toString().split(" ").length);
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
       console.log("needToFind2.split().length !!"+needToFind2.toString().split("").length);
       if (needToFind2 !== 0) {
         console.log("needToFind2"+needToFind2)
         console.log("needToFind2.split().length"+needToFind2.toString().split(" ").length);
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

    default:
      return state;
  }
};

export default commandReducer;
