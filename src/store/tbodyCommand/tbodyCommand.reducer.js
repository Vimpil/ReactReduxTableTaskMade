import { tbodyCommandTypes } from "./tbodyCommand.types";
import properties$ from "./../../mock";

const INITIAL_STATE = {
  comVal: [],
  order: "id"
};

var row_temp = [];

var isPaused = false;

const commandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tbodyCommandTypes.MAKE_TBODY:
      function makeTbodyArray() {
        let subscription = properties$.subscribe((data) => {
          if (row_temp.length < 10) {
            isPaused = false;
            // console.log("row_temp" + row_temp);
            data["love"] = 0;
            row_temp.push(data);
          } else {
            console.log("row_temp.length()" + row_temp.length);
            console.log("rETURN" + row_temp[0].id);
            console.log("LAST ONE");
            isPaused = true;
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

      return {
        ...state,
        comVal: makeTbodyArray()
      };

      console.log("makeTbodyArray()ifAFTER");
    case tbodyCommandTypes.ORDER_VALUE:
      console.log("tbodyCommandTypes.ORDER_VALUE");
      console.log(action.payload);
      function sortJSON(arr, key, way) {
        return arr.sort(function (a, b) {
          var x = a[key];
          var y = b[key];
          if (way) {
            return x < y ? -1 : x > y ? 1 : 0;
          } else {
            return x > y ? -1 : x < y ? 1 : 0;
          }
        });
      }
      console.log("...action");
      console.log(action);
      console.log(sortJSON(action.array, action.payload, true));
      let sortedArr = sortJSON(
        action.array,
        action.payload.toLowerCase(),
        true
      );
      console.log("tempconsole.log(temp);console.log(temp);console.log(temp);");

      return {
        ...state,
        ordValue: action.payload
      };
    default:
      return state;
  }
};

export default commandReducer;
