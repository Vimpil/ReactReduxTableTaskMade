import { tbodyCommandTypes } from "./tbodyCommand.types";
import properties$ from "./../../mock";

const INITIAL_STATE = {
  comVal: [],
  ordValue: "id",
  ascdescVal: true,
  faValue: 0,
  suValue: 0,
  UpTrValue: false
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
        // return ["another", "HEYY", 3];
      }
      console.log("makeTbodyArray()" + row_temp);
      // makeTbodyArray().then(function() {
      //   console.log('smth()')}
      // );

      console.log("makeTbodyArray()after" + row_temp);
      // var array = makeTbodyArray();
      console.log("makeTbodyArray()if");

      // while (!isPaused) {
      //   console.log("isPaused" + isPaused);
      //   makeTbodyArray();
      // }

      // let promise = new Promise(function (resolve, reject) {
      //   setTimeout(() => resolve(

      //     ), 2000);
      // });

      // var array = (async () => {
      //   console.log("await makeTbodyArray()");
      //   await makeTbodyArray();
      //   console.log("await makeTbodyArray()");
      // })(console.log("ENDD"));

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
        state.ascdescVal
      );
      console.log("state.ascdescVal");
      console.log(state.ascdescVal);
      console.log("tempconsole.log(temp);console.log(temp);console.log(temp);");

      if (state.suValue === 0) {
        return {
          ...state,
          comVal: sortedArr,
          ordValue: action.payload,
          ascdescVal: !state.ascdescVal
        };
      } else {
        return {
          ...state,
          suValue: sortedArr,
          ordValue: action.payload,
          ascdescVal: !state.ascdescVal
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
      console.log("SUGG_VALUE");
      let suArr = action.payload;
      return {
        ...state,
        suValue: suArr
      };

    case tbodyCommandTypes.TSEARCH_VALUE:
      console.log("SUGG_VALUE");
      let TSValue = action.payload;
      return {
        ...state,
        TSValue: TSValue
      };

    case tbodyCommandTypes.UPDATETRIGGER_VALUE:
      let UpTrValue = action.payload;
      return {
        ...state,
        UpTrValue: UpTrValue
      };

    default:
      return state;
  }
};

export default commandReducer;
