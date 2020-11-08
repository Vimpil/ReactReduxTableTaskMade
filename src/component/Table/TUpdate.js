import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MAKE_TBODY,
  TSEARCH_VALUE,
  UPDATETRIGGER_VALUE,
  SUGG_VALUE,
  ORDER_VALUE,
  TBODY_ASCDESC
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

      if (nextProps.ascdescVal !== prevState.ascdescVal) {
        let propCom = nextProps.ascdescVal;
        obj.ascdescVal = propCom;
      }

      if (nextProps.ordValue !== prevState.ordValue) {
        let propCom = nextProps.ordValue;
        obj.ordValue = propCom;
      }

      return obj;
    }
  }

  componentDidMount() {
    const timer = setInterval((props) => {
     this.props.makeTbody();
      this.props.setOrderVal(
          this.state.ordValue,
          this.state.comVal,
          this.state.ascdescVal
      );
     if (this.state.suValue !== 0) {
       this.props.suggVal(this.state.comVal);
     }
      this.props.changeUpdateTrValue();
      // if (this.state.suValue !== 0) {
      //   this.props.suggVal(this.state.comVal);
      // }
    }, 2000);
    // const timer2 = setTimeout((props) => {
    //   this.props.makeTbody();
    //   if (this.state.suValue !== 0) {
    //     this.props.suggVal(this.state.comVal, this.state.ordValue);
    //   }
    // }, 10000);
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
  setOrderVal: (ordvalue, arrayvalue, ascdesc) =>
      dispatch(ORDER_VALUE(ordvalue, arrayvalue, ascdesc))
});

export default connect(mapStateToProps, mapDispatchToProps)(TUpdate);
