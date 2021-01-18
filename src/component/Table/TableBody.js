/* ADD suValue */

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MAKE_TBODY,
  ISINFAV_VALUE,
  UPDATETRIGGER_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import {
  selectCommandValue,
  selectAscValue,
  selectFaValue,
  selectSuValue,
  selectUpTrValue
} from "./../../store/tbodyCommand/tbodyCommand.selector";

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ascdescVal: this.props.ascdescVal,
      comVal: this.props.comVal,
      faValue: this.props.faValue,
      suValue: this.props.suValue,
      tbody: []
    };
  }

  settingState = (set) => {
    this.setState({
      comVal: set
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.suValue !== []) {
      let propCom = nextProps.suValue;
      let propCom2 = nextProps.comVal;
      if (propCom !== 0) {
        return { tbody: propCom, suValue: propCom, comVal: propCom2 };
      } else {
        let propCom2 = nextProps.comVal;
        return { tbody: propCom2, comVal: propCom2 };
      }
    }

    if (nextProps.faValue !== prevState.faValue) {
      let propCom = nextProps.faValue;
      // return { faValue: propCom, comValue: propCom };
      return { faValue: propCom };
    }

    if (nextProps.comVal !== prevState.comVal) {
      let propCom = nextProps.comVal;

      return { comVal: propCom, tbody: propCom };
    }
  }

  componentDidMount() {
    // console.log("Tbody FIRST");
    // this.props.makeTbody(false, this.state.comVal);

    // var thisObj = this;
    // const setStateAsync = (obj, state) => {
    //   return new Promise((resolve) => obj.setState(state, resolve));
    // };

    let Tbody = [];

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

    // setTimeout(() => {
    //   let result = sortJSON(thisObj.props.comVal, "id", true);
    //   setStateAsync(thisObj, { tbody: result });
    // }, 1000);
  }

  Loading = (comVal_insert) => {
    let Tbody = [];
    var clicks = 0;
    for (let key in comVal_insert) {
      Tbody.push(
          <tr key={key}>
            <td>{comVal_insert[key].id}</td>
            <td>{comVal_insert[key].address}</td>
            <td>{comVal_insert[key].price}</td>
            <td>{comVal_insert[key].lastUpdate}</td>
            <td>{comVal_insert[key].type}</td>
            <td>
              <button
                  onClick={(event) => {
                    function findIDinArr(newArray, array, id) {
                      for (var i = 0; i < array.length; i++) {
                        // console.log("array[i] === id");
                        // console.log(array[i] === id);
                        // console.log("typeof array[i] typeof id");
                        // console.log(typeof array[i]);
                        // console.log(typeof id);
                        // console.log("END array[i] == id");

                        if (array[i] === id) {
                          // console.log("WE ARE HERE");
                          const index = array.indexOf(array[i]);
                          array.splice(index, 1);
                          newArray = array;
                          // newArray.push("DELETE");
                          return newArray;
                        }
                      }

                      // console.log("WE ARE NOT HERE");
                      newArray = array;
                      newArray.push(id);
                      return newArray;
                    }

                    function setLoveValue(id, jsonObj) {
                      for (var i = 0; i < jsonObj.length; i++) {
                        if (jsonObj[i].id === id) {
                          jsonObj[i].love = !jsonObj[i].love;
                          // console.log("jsonObj");
                          // console.log(jsonObj);

                          return jsonObj;
                        }
                      }
                    }

                    clicks++;

                    if (clicks > 0) {
                      // console.log("CLICK");
                      // console.log('makeFav');
                      // console.log(comVal_insert[key].id);
                      // console.log(this.state);
                      // console.log("this.state.comVal CHECK");
                      // console.log(this.state.comVal);
                      // console.log("comVal_insert[key].love");
                      // console.log(comVal_insert[key].love);
                      var loveBool = false;
                      if (comVal_insert[key].love == "true") {
                        loveBool = true;
                      }

                      var newFaArr = [];
                      // console.log("findIDinArr----");
                      // console.log(
                      //   JSON.stringify(
                      //     findIDinArr(
                      //       newFaArr,
                      //       this.state.faValue,
                      //       comVal_insert[key].id
                      //     )
                      //   )
                      // );
                      this.props.makeFav(
                          comVal_insert[key].id,
                          setLoveValue(comVal_insert[key].id, this.state.comVal),
                          findIDinArr(
                              newFaArr,
                              this.state.faValue,
                              comVal_insert[key].id
                          )
                      );
                    } else {
                    }
                  }}
              >
                {comVal_insert[key].love ? "true" : "false"}
              </button>
            </td>
          </tr>
      );
    }
    return Tbody;
  };

  render() {
    const isFilled = this.state.tbody_store;
    const tempProps = this.props;

    let Tbody = [];
    function template() {
      return <p>...Loading</p>;
    }
    Tbody = this.Loading(this.state.tbody);

    return (
        <tbody>
        {this.state.tbody
            ? this.state.tbody.length > 0
                ? this.Loading(this.state.tbody)
                : template()
            : "false"}
        {/* {JSON.stringify(this.props.comVal)} */}
        </tbody>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  comVal: selectCommandValue,
  ascdescVal: selectAscValue,
  faValue: selectFaValue,
  suValue: selectSuValue,
  upTrValue: selectUpTrValue
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mapDispatchToProps = () => (dispatch) => ({
  makeTbody: (boolvalue, mapvalue) => dispatch(MAKE_TBODY(boolvalue, mapvalue)),
  makeFav: (id, arrayvalue, boolvalue) =>
      dispatch(ISINFAV_VALUE(id, arrayvalue, boolvalue)),
  changeUpTr: () => dispatch(UPDATETRIGGER_VALUE())
});

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
