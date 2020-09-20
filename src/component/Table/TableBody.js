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
  selectFaValue
} from "./../../store/tbodyCommand/tbodyCommand.selector";

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // comVal: null,
      // isFilled: true,
      ascdescVal: this.props.ascdescVal,
      comVal: this.props.comVal,
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
      //     let promise = new Promise(function (resolve, reject, nextProps) {
      //      setTimeout(() => {
      //         resolve(propCom);
      //         console.log('propCom');
      //         console.log(propCom);
      //         function sortJSON(arr, key, way) {
      //           return arr.sort(function (a, b) {
      //             var x = a[key];
      //             var y = b[key];
      //             if (way) {
      //               return x < y ? -1 : x > y ? 1 : 0;
      //             } else {
      //               return x > y ? -1 : x < y ? 1 : 0;
      //             }
      //           });
      //         }
      //         let data = sortJSON(propCom);
      //         console.log('data');
      //         console.log(data);
      //         // let joinData = "";
      //         // for (let key in data) {
      //         //   joinData +=
      //         //     "<tr><td>" +
      //         //     data[key]["id"].toString() +
      //         //     "</td>" +
      //         //     "<td>" +
      //         //     data[key]["address"].toString() +
      //         //     "</td>" +
      //         //     "<td>" +
      //         //     data[key]["price"].toString() +
      //         //     "</td>" +
      //         //     "<td>" +
      //         //     data[key]["lastUpdate"].toString() +
      //         //     "</td>" +
      //         //     "<td>" +
      //         //     data[key]["type"].toString() +
      //         //     "</td>" +
      //         //     "<td>" +
      //         //     data[key]["love"].toString() +
      //         //     "</td>/<tr>";
      //         // }
      //         console.log('MAIN RETURN');
      //         // return propCom;
      //       }, 2000);
      //     });
      return { comVal: propCom };
    }
    //   // else return null;
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
      console.log(this.props.comVal);
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
    let promise = new Promise(function (resolve, reject, nextProps) {
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
    });
  }

  render() {
    console.log("/*/*/*/*/*/*/*//**//*/*/*/");
    console.log("REDNER CALL");
    console.log(this.state.comVal);
    console.log("/*/*/*/*/*/*/*//**//*/*/*/");
    const isFilled = this.state.tbody_store;
    const tempProps = this.props;

    let Tbody = [];
    function Loading(comVal_insert) {
      Tbody = [];
      for (let key in comVal_insert) {
        Tbody.push(
          <tr key={key}>
            <td>{comVal_insert[key].id}</td>
            <td>{comVal_insert[key].address}</td>
            <td>{comVal_insert[key].price}</td>
            <td>{comVal_insert[key].lastUpdate}</td>
            <td>{comVal_insert[key].type}</td>
            <td>
              {/* <button onClick={tempProps.makeFav(key)}> */}
              {comVal_insert[key].love}
              {/* </button> */}
            </td>
          </tr>
        );
      }
      return Tbody;
    }
    function template() {
      return <p>...Loading</p>;
    }
    Tbody = Loading(this.state.tbody);

    return (
      <tbody>
        {this.state.tbody.length > 1 ? Loading(this.state.tbody) : template()}
        {/* {JSON.stringify(this.props.comVal)} */}
      </tbody>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  comVal: selectCommandValue,
  ordValue: selectOrdValue,
  ascdescVal: selectAscValue,
  faValue: selectFaValue
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mapDispatchToProps = () => (dispatch) => ({
  makeTbody: () => dispatch(MAKE_TBODY()),
  makeFav: () => dispatch(ISINFAV_VALUE())
});
export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
