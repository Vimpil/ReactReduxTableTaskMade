import { tbodyCommandTypes } from "./tbodyCommand.types";
import properties$ from "./../../mock";

const INITIAL_STATE = {
  comVal: [],
  ordValue: "id",
  ascdescVal: true,
  faValue: 0,
  suValue: 0,
  upTrValue: false,
  TSValue: undefined
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

// function setLoveValue(id, jsonObj) {
//   for (var i = 0; i < jsonObj.length; i++) {
//     if (jsonObj[i].id === id) {
//       console.log("weare here");
//       console.log("id" + id);

//       console.log("love!" + jsonObj[i].love);

//       jsonObj[i].love = !jsonObj[i].love;
//       console.log("JSON.stringify(jsonObj[i])CHANGED");

//       console.log("love!" + jsonObj[i].love);
//       return jsonObj;
//     }
//   }
// }
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
            console.log("row_temp.length()" + row_temp.length);
            console.log("rETURN" + row_temp[0].id);
            console.log("LAST ONE");
            subscription.unsubscribe();
          }
        });
        return row_temp;
      }
      console.log("makeTbodyArray()" + row_temp);
      console.log("makeTbodyArray()after" + row_temp);
      console.log("makeTbodyArray()if");
      let sortedArrFirst = sortJSON(
        makeTbodyArray(),
        state.ordValue,
        state.ascdescVal
      );
      row_temp = [];
      return {
        ...state,
        comVal: sortedArrFirst
      };

    case tbodyCommandTypes.ORDER_VALUE:
      console.log("tbodyCommandTypes.ORDER_VALUE");
      console.log(action.payload);

      console.log("...action");
      console.log(action);
      // console.log(sortJSON(action.array, action.payload, true));

      let sortedArr = sortJSON(
        action.array,
        action.payload.toLowerCase(),
        action.ascdesc
      );
      console.log("state.ascdescVal");
      console.log(action.ascdesc);
      console.log("tempconsole.log(temp);console.log(temp);console.log(temp);");

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
      console.log("FAVORITE");
      console.log(JSON.stringify(action));
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

      console.log("SUGG_VALUE");
      let input = state.TSValue;

      console.log("input");
      console.log(input);

      console.log("isNumeric(needToFind)");
      console.log(isNumeric(input));

      function compare(needToFind) {
        console.log("needToFind");
        console.log(needToFind);

        console.log("typeof needToFind");
        console.log(typeof needToFind);

        if (isNumeric(needToFind) && needToFind.split(" ").length == 1) {
          console.log("comVal");
          console.log(action.payload);
          action.payload.forEach(function (entry) {
            // if(entry.id.includes())
            console.log("entry");
            console.log(entry);
            console.log("entry.id.includes(needToFind);");
            console.log(typeof entry.id);
            console.log(typeof needToFind);
            let parses = entry.id;
            let inside = "1001".includes(needToFind);
            console.log("parses");
            console.log(parses);
            console.log("inside");
            console.log(inside);

            if (entry.id.toString().includes(needToFind)) {
              console.log("MATCH");
              console.log(entry.id);
              sugArr.push(entry);
            }
          });
          // action.payload.forEach(element=>{if(element.id.includes(needToFind))}){
          // }
          console.log("sugArr");
          console.log(JSON.stringify(sugArr));
        } else if (
          needToFind.toLowerCase() === "home" ||
          needToFind.toLowerCase() === "condo"
        ) {
          console.log("SOME STRINGS");
          console.log(needToFind);
          console.log(needToFind.toLowerCase());
          console.log(needToFind.toLowerCase() === "home");
          console.log(needToFind.toLowerCase());
          action.payload.forEach(function (entry) {
            // if(entry.id.includes())
            let parses = entry.type;
            let inside = "home".includes(needToFind);
            console.log('"home".includes(needToFind)');
            console.log(inside);
            console.log(needToFind);

            if (entry.type.toString().toLowerCase().includes(needToFind)) {
              sugArr.push(entry);
            }
          });
        } else if (needToFind !== "") {
          action.payload.forEach(function (entry) {
            // if(entry.id.includes())
            let parses = entry.address;
            console.log("Durwardton 74276 Windler Trafficway");
            let inside = "Durwardton 74276 Windler Trafficway"
              .toLowerCase()
              .includes(needToFind.toLowerCase());

            console.log("inside");
            console.log(inside);
            console.log("***");
            console.log("entry.address" + entry.address.toLowerCase());

            console.log(
              "entry.address" +
                entry.address.toString().toLowerCase().toLowerCase()
            );

            console.log(
              "entry.address INCLUDES" +
                entry.address
                  .toString()
                  .toLowerCase()
                  .includes(needToFind.toLowerCase())
            );

            console.log("***");

            if (
              entry.address
                .toString()
                .toLowerCase()
                .includes(needToFind.toLowerCase())
            ) {
              console.log("THATS TRUE");
              console.log("entry" + entry);
              sugArr.push(entry);
            }
          });
        }
        if (sugArr.length > 0) {
          return sugArr;
        } else {
          return 0;
        }
      }

      console.log("SSSSSSSone");
      // else if(){}

      return {
        ...state,
        suValue: compare(input)
      };

    case tbodyCommandTypes.TSEARCH_VALUE:
      console.log("SUGG_VALUE");
      let TSValue = action.payload;
      console.log("THATS SEARCH VALUE");
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

    default:
      return state;
  }
};

export default commandReducer;
