import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MAKE_TBODY,
  TSEARCH_VALUE,
  UPDATETRIGGER_VALUE
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
      upTrValue: this.props.upTrValue
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
      if (!this.state.upTrValue) {
        this.props.changeUpdateTrValue();
      }
    }, 5000);

    const timer2 = setTimeout((props) => {
      console.log("timer");
      this.props.makeTbody();
      if (!this.state.upTrValue) {
        this.props.changeUpdateTrValue();
      }
    }, 10000);

    const timer3 = setTimeout((props) => {
      console.log("timer");
      this.props.makeTbody();
      if (!this.state.upTrValue) {
        this.props.changeUpdateTrValue();
      }
    }, 15000);
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
  makeTbody: () => dispatch(MAKE_TBODY()),
  changeUpdateTrValue: () => dispatch(UPDATETRIGGER_VALUE())
});

export default connect(mapStateToProps, mapDispatchToProps)(TUpdate);
