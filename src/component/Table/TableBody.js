/* ADD suValue */

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MAKE_TBODY,
  ISINFAV_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import {
  selectCommandValue,
  selectOrdValue,
  selectAscValue,
  selectFaValue,
  selectSuValue
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
    if (nextProps.comVal !== prevState.comVal) {
      // settingState(nextProps);
      console.log("-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-");
      let propCom = nextProps.comVal;

      return { comVal: propCom, tbody: propCom };
    }

    if (nextProps.suValue !== prevState.suValue) {
      // settingState(nextProps);
      console.log("-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-");
      let propCom = nextProps.suValue;
      let propCom2 = nextProps.comVal;
      if (propCom !== 0) {
        return { tbody: propCom, suValue: propCom };
      } else {
        return { tbody: propCom2 };
      }
    }
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   var nextP = nextProps;

  //   if (nextProps.comVal !== this.state.comVal) {
  //     this.setState({
  //       comVal: nextProps.comVal
  //     });
  // console.log(
  //   "(***************UNSAFE_componentWillReceiveProps**************"
  // );
  // console.log(nextProps.comVal.length),
  //   console.log(
  //     "(***************UNSAFE_componentWillReceiveProps**************"
  //   );

  // function getPropsVal() {
  //   return nextProps.comVal;
  // }

  // const setStateAsync = ( obj, state ) => {
  //   setTimeout(() => {
  //   return new Promise( ( resolve ) =>
  //       obj.setState( state , resolve )
  //   )}, 1000);
  // }

  // console.log("let promise");
  // let promise = new Promise(function (resolve, reject, nextProps) {
  //   setTimeout(() => {
  //     resolve(Loading(getPropsVal()));
  //     console.log("tempVal");
  //     console.log(nextP);

  //   }, 1000);
  //   setStateAsync(thisObj,{comVal:nextP.comVal})
  // });

  // let Tbody = [];
  // function Loading(comVal_insert) {
  //   for (let key in comVal_insert) {
  //     Tbody.push(
  //       <tr key={key}>
  //         <td>{comVal_insert[key].id}</td>
  //         <td>{comVal_insert[key].address}</td>
  //         <td>{comVal_insert[key].price}</td>
  //         <td>{comVal_insert[key].lastUpdate}</td>
  //         <td>{comVal_insert[key].type}</td>
  //         <td>{comVal_insert[key].love}</td>
  //       </tr>
  //     );
  //   }
  // }

  //   }
  // }

  componentDidUpdate(prevProps) {
    if (this.props.comVal !== prevProps.comVal) {
      console.log("(***************componentDidUpdate**************");
      // console.log(this.props.comVal);
      console.log("(***************componentDidUpdate**************");

      // let promise = new Promise(function (resolve, reject, nextProps) {
      //   setTimeout(() => {
      //     resolve(console.log("PROMISE"));
      //     this.setState({
      //       comVal:this.state.comVal
      //     })
      //   }, 1000);
      // });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.comVal !== this.props.comVal) {
  //     console.log(
  //       "shouldComponentUpdate!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  //     );
  //     // this.setState({
  //     //   tbody: nextProps.comVal
  //     // });
  //     console.log(
  //       "CHANGED%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
  //     );
  //     return { tbody: nextProps.comVal };
  //   }

  //   if (nextState.tbody !== this.state.tbody) {
  //     console.log("nextState.tbody !== this.state.tbody");
  //   }

  //   console.log(nextProps, nextState);
  //   console.log(this.props, this.state);

  //   return true;
  // }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.comVal !== this.props.comVal) {
      console.log("UNSAFE_componentWillReceiveProps nextProps, nextState");
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    //   if (nextState.comVal !== this.props.comVal) {
    // console.log(nextProps, nextState);
    // console.log(this.props, this.state);
    // return true;
    //   }
    // if (nextState.comVal !== this.state.comVal) {
    //   console.log(nextProps, nextState);
    //   console.log(this.props, this.state);
    //   return true;
    //     }
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
    // function Loading(comVal_insert) {
    //   for (let key in comVal_insert) {
    //     Tbody.push(
    //       <tr key={key}>
    //         <td>{comVal_insert[key].id}</td>
    //         <td>{comVal_insert[key].address}</td>
    //         <td>{comVal_insert[key].price}</td>
    //         <td>{comVal_insert[key].lastUpdate}</td>
    //         <td>{comVal_insert[key].type}</td>
    //         <td>{comVal_insert[key].love}</td>
    //       </tr>
    //     );
    //   }
    // }

    // let data = sortJSON(propCom);
    // console.log('data');
    // console.log(data);
    // let joinData = "";
    // for (let key in data) {
    //   joinData +=
    //     "<tr><td>" +
    //     data[key]["id"].toString() +
    //     "</td>" +
    //     "<td>" +
    //     data[key]["address"].toString() +
    //     "</td>" +
    //     "<td>" +
    //     data[key]["price"].toString() +
    //     "</td>" +
    //     "<td>" +
    //     data[key]["lastUpdate"].toString() +
    //     "</td>" +
    //     "<td>" +
    //     data[key]["type"].toString() +
    //     "</td>" +
    //     "<td>" +
    //     data[key]["love"].toString() +
    //     "</td>/<tr>";
    // }

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
      console.log("sortJSON(thisObj.props.comVal,id,true)");
      console.log(sortJSON(thisObj.props.comVal, "id", true));
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
            {/* <button
            // onClick={
            //   (console.log("comVal_insert[key].id" + comVal_insert[key].id),
            //   this.props.makeFav(comVal_insert[key].id))
            // }
            >
              {comVal_insert[key].love}
            </button> */}
            {/* key={comVal_insert[key]} */}:
            {/* {function event_handler (e,arg) { */}
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
        {this.state.tbody.length > 0
          ? this.Loading(this.state.tbody)
          : template()}
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
  suValue: selectSuValue
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mapDispatchToProps = () => (dispatch) => ({
  makeTbody: () => dispatch(MAKE_TBODY()),
  makeFav: (arrayvalue) => dispatch(ISINFAV_VALUE(arrayvalue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);

// const mapDispatchToProps = (dispatch) => ({
//   // changeAscTbody: (ascDescValue) => dispatch(TBODY_ASCDESC(ascDescValue)),

//   setOrderVal: (ordvalue, arrayvalue) =>
//     dispatch(ORDER_VALUE(ordvalue, arrayvalue))
// });
