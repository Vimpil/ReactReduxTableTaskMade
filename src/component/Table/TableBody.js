/* ADD suValue */

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MAKE_TBODY,
  ISINFAV_VALUE,
  UPDATETRIGGER_VALUE,
  ORDER_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import {
  selectCommandValue,
  selectOrdValue,
  selectAscValue,
  selectFaValue,
  selectSuValue,
  selectUpTrValue
} from "./../../store/tbodyCommand/tbodyCommand.selector";

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // comVal: null,
      // isFilled: true,
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
      // settingState(nextProps);
      console.log(
        "-0-0-0-0-0-0-0-0-nextProps.suValue !== prevState.suValue-0-0-0-0-0-0-0-0-"
      );
      let propCom = nextProps.suValue;
      let propCom2 = nextProps.comVal;
      if (propCom !== 0) {
        // console.log("-0-0-0-0-0-0-0-1-suValue-1-0-0-0-0-0-0-0-");
        // console.log('JSON.parse(propCom)');
        // console.log(JSON.stringify(propCom));
        return { tbody: propCom, suValue: propCom };
      } else {
        console.log("-0-0-0-0-0-0-0-2-suValue-2-0-0-0-0-0-0-0-");
        let propCom2 = nextProps.comVal;
        return { tbody: propCom2 };
      }
    }

    if (nextProps.faValue !== prevState.faValue) {
      let propCom = nextProps.faValue;
      return { faValue: propCom, comValue: propCom };
    }

    if (nextProps.comVal !== prevState.comVal) {
      // settingState(nextProps);
      console.log("-0-0-0-0-0-0-0-0-comVal-0-0-0-0-0-0-0-");
      let propCom = nextProps.comVal;
      console.log("-0-0-0-0-0-0-0-1-comVal-1-0-0-0-0-0-0-0-");
      console.log("JSON.parse(propCom)");
      console.log(JSON.stringify(propCom));

      return { comVal: propCom, tbody: propCom };
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.comVal !== prevProps.comVal) {
      console.log("(***************componentDidUpdate**************");
      // console.log(this.props.comVal);
      console.log("(***************componentDidUpdate**************");
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.comVal !== this.props.comVal) {
      console.log("shouldComponentUpdate nextProps, nextState");
      console.log(nextProps, nextState);
      console.log(this.props, this.state);
      return true;
    }
    if (nextProps.comVal !== this.props.comVal) {
      console.log("shouldComponentUpdate nextProps, nextState");
      console.log(nextProps, nextState);
      console.log(this.props, this.state);
      return true;
    }
    if (nextProps) {
      console.log("shouldComponentUpdate");
      console.log(nextProps);
      console.log("shouldComponentUpdate");
    }

    if (nextState) {
      console.log("shouldComponentUpdate");
      console.log(nextState);
      console.log("shouldComponentUpdate");
    }
    setTimeout(() => {
      console.log(
        "@#TIMER#@@#TIMER#@@#TIMER#@@#TIMER#@@#TIMER#@@#TIMER#@@#TIMER#@@#TIMER#@@#TIMER#@@#TIMER#@"
      );
    }, 1000);

    return true;
  }

  componentDidMount() {
    console.log("componentDidMountcomponentDidMount");
    this.props.makeTbody();
    // this.setState({
    //   comVal:'Loading'
    // })
    var thisObj = this;
    const setStateAsync = (obj, state) => {
      // setTimeout(() => {
      return new Promise(
        (resolve) => obj.setState(state, resolve),
        console.log("SettingSettingSettingSettingSettingSettingSettingSetting"),
        console.log(state),
        console.log("SettingSettingSettingSettingSettingSettingSettingSetting")
      );
      // }, 1000);
    };

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

    console.log("let promise");
    setTimeout(() => {
      console.log("Tbody");
      console.log(Tbody);
      console.log("tempVal");
      console.log(thisObj.props.comVal);
      // console.log("sortJSON(thisObj.props.comVal,id,true)");
      // console.log(sortJSON(thisObj.props.comVal, "id", true));
      let result = sortJSON(thisObj.props.comVal, "id", true);
      setStateAsync(thisObj, { tbody: result });

      // resolve(Loading(thisObj.state.tbody));
    }, 1000);
  }
  makesmth = () => {
    console.log("12");
  };

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
                function setLoveValue(id, jsonObj) {
                  for (var i = 0; i < jsonObj.length; i++) {
                    if (jsonObj[i].id === id) {
                      console.log("weare here");
                      console.log("id" + id);

                      console.log("love!" + jsonObj[i].love);

                      jsonObj[i].love = !jsonObj[i].love;
                      console.log("JSON.stringify(jsonObj[i])CHANGED");

                      console.log("love!" + jsonObj[i].love);
                      return jsonObj;
                    }
                  }
                }

                clicks++;
                console.log("key" + key);
                console.log("comVal_insert[key].id" + comVal_insert[key].id);
                // event_handler(e,comVal_insert[key]);
                if (clicks > 0) {
                  console.log("&&&&&&&&&");
                  this.props.makeFav(
                    setLoveValue(comVal_insert[key].id, this.state.comVal)
                  );
                } else {
                  console.log("NONONE");
                }
              }}
            >
              {comVal_insert[key].love ? "true" : "false"}
            </button>
            {/* <TRow/> */}
          </td>
        </tr>
      );
    }
    return Tbody;
  };

  render() {
    console.log("/*/*/*/*/*/*/*//**//*/*/*/");
    console.log("REDNER CALL");
    // console.log(this.state.comVal);
    console.log("/*/*/*/*/*/*/*//**//*/*/*/");
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
  ordValue: selectOrdValue,
  ascdescVal: selectAscValue,
  faValue: selectFaValue,
  suValue: selectSuValue,
  upTrValue: selectUpTrValue
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mapDispatchToProps = () => (dispatch) => ({
  makeTbody: () => dispatch(MAKE_TBODY()),
  makeFav: (arrayvalue) => dispatch(ISINFAV_VALUE(arrayvalue)),
  changeUpTr: () => dispatch(UPDATETRIGGER_VALUE()),
  setOrderVal: (ordvalue, arrayvalue) =>
    dispatch(ORDER_VALUE(ordvalue, arrayvalue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
