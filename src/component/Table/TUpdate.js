import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MAKE_TBODY,
  TSEARCH_VALUE,
  UPDATETRIGGER_VALUE,
  SUGG_VALUE,
  ORDER_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import {
  selectCommandValue,
  selectOrdValue,
  selectAscValue,
  selectSuValue,
  selectTsValue,
  selectUpTrValue
} from "./../../store/tbodyCommand/tbodyCommand.selector";

class TUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comVal: this.props.comVal,
      ascdescVal: this.props.ascdescVal,
      suValue: this.props.suValue,
      tbody: this.props.tbody,
      TSvalue: this.props.TSvalue,
      upTrValue: this.props.upTrValue,
      suggVal: this.props.suggVal,
      ordValue: this.props.ordValue
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps) {
      let obj = {};

      if (nextProps.TSvalue !== prevState.TSvalue) {
        let propCom = nextProps.TSvalue;
        obj.TSvalue = propCom;
      }

      if (nextProps.suValue !== prevState.suValue) {
        let propCom = nextProps.suValue;
        let propCom2 = nextProps.comVal;
        if (propCom !== null) {
          obj.tbody = propCom;
          obj.suValue = propCom;
        } else {
          obj.tbody = propCom2;
        }
      }

      if (nextProps.comVal !== prevState.comVal) {
        let propCom = nextProps.comVal;

        obj.comVal = propCom;
        obj.tbody = propCom;
      }

      if (nextProps.upTrValue !== prevState.upTrValue) {
        let propCom = nextProps.upTrValue;
        obj.upTrValue = propCom;
      }

      return obj;
    }
  }

  componentDidMount() {
    const timer = setTimeout((props) => {
      console.log("timer");
      this.props.makeTbody();
      console.log("this.state.suValue");
      console.log(this.state.suValue);
      if (this.state.suValue !== 0) {
        this.props.suggVal(this.state.comVal, this.state.ordValue);
      }
      // if (!this.state.upTrValue) {
      //   this.props.changeUpdateTrValue();
      // }
    }, 1100);
    const timer2 = setTimeout((props) => {
      console.log("timer");
      this.props.makeTbody();
      if (this.state.suValue !== 0) {
        this.props.suggVal(this.state.comVal, this.state.ordValue);
      }
    }, 10000);
    // const timer3 = setTimeout((props) => {
    //   console.log("timer");
    //   this.props.makeTbody();
    //   if (this.state.suValue !== 0) {
    //     this.props.suggVal(this.state.comVal);
    //   }
    // }, 15000);
  }

  render() {
    return <>{}</>;
  }
}

const mapStateToProps = createStructuredSelector({
  comVal: selectCommandValue,
  ordValue: selectOrdValue,
  ascdescVal: selectAscValue,
  suValue: selectSuValue,
  TSvalue: selectTsValue,
  upTrValue: selectUpTrValue
});

const mapDispatchToProps = () => (dispatch) => ({
  suggVal: (arrayvalue) => dispatch(SUGG_VALUE(arrayvalue)),
  makeTbody: () => dispatch(MAKE_TBODY()),
  changeUpdateTrValue: () => dispatch(UPDATETRIGGER_VALUE()),
  setOrderVal: (ordvalue, arrayvalue) =>
    dispatch(ORDER_VALUE(ordvalue, arrayvalue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TUpdate);
