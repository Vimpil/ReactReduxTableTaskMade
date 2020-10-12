import { tbodyCommandTypes } from "./tbodyCommand.types";
import properties$ from "./../../mock";

const INITIAL_STATE = {
  comVal: [],
  order: "id",
  ascdescVal: false,
  faValue: 0,
  suValue: 0
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

      let sortedArrFirst = sortJSON(makeTbodyArray(), "id", state.ascdescVal);

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

      return {
        ...state,
        comVal: sortedArr,
        ordValue: action.payload,
        ascdescVal: !state.ascdescVal
      };

    case tbodyCommandTypes.ISINFAV_VALUE:
      console.log("FAVORITE");
      // console.log("state.comVal[action.payload]");
      // console.log("action.payload" + action.payload);
      // console.log("state.comVal" + JSON.stringify(state.comVal));
      // console.log("state.comVal[action.payload]");
      // console.log(state.comVal[action.payload]);
      // // filterById(state.comVal['love'],action.payload) = !state.comVal[action.payload].love;

      // console.log("newLovaVal" + JSON.stringify(newLovaVal));
      // const result=newLovaVal;

      // console.log("action" + JSON.stringify(action));
      // console.log("state.comVal");
      // console.log("action" + JSON.stringify(state.comVal));

      // console.log("setLoveValue" + JSON.stringify(result));
      // const payl = action.payload;
      // var jsonObj = action.array;

      // const id = action.payload;
      // var tempval = false;
      // for (var i = 0; i < jsonObj.length; i++) {
      //   if (jsonObj[i].id === id) {
      //     console.log("weare here");
      //     console.log("id" + id);
      //     console.log("love!" + jsonObj[i].love);
      //     tempval = (jsonObj[i].love);
      //     jsonObj[i].love = !jsonObj[i].love;

      //     console.log("JSON.stringify(jsonObj[i])CHANGED");
      //     console.log("love!" + jsonObj[i].love);
      //   }
      // }
      console.log(JSON.stringify(action));

      return {
        ...state,
        // ,
        faValue: action.payload
      };

    case tbodyCommandTypes.SUGG_VALUE:
      console.log("SUGG_VALUE");
      let suArr = action.payload;
      return {
        ...state,
        suValue: suArr
      };

    default:
      return state;
  }
};

export default commandReducer;
