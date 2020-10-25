import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MAKE_TBODY,
  TSEARCH_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import {
  selectCommandValue,
  selectOrdValue,
  selectAscValue,
  selectSuValue,
  selectTsValue
} from "./../../store/tbodyCommand/tbodyCommand.selector";

class TUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comVal: this.props.comVal,
      ascdescVal: this.props.ascdescVal,
      suValue: this.props.suValue,
      tbody: this.props.tbody,
      TSvalue: this.props.TSvalue
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.TSvalue !== prevState.TSvalue) {
      let propCom = nextProps.TSvalue;

      return { TSvalue: propCom };
    }

    if (nextProps.suValue !== prevState.suValue) {
      let propCom = nextProps.suValue;
      let propCom2 = nextProps.comVal;
      if (propCom !== null) {
        return { tbody: propCom, suValue: propCom };
      } else {
        return { tbody: propCom2 };
      }
    }

    if (nextProps.comVal !== prevState.comVal) {
      // settingState(nextProps);
      console.log("-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-");
      let propCom = nextProps.comVal;

      return { comVal: propCom, tbody: propCom };
    }
  }

  componentDidMount() {
    const timer = setTimeout((props) => {
      console.log("timer");
      // if (this.props.TSvalue === undefined) {
      //   this.props.makeTbody();
      // } else {
      this.props.makeTbody();
      // }
    }, 2000);
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
  TSvalue: selectTsValue
});

const mapDispatchToProps = () => (dispatch) => ({
  makeTbody: () => dispatch(MAKE_TBODY())
  // STSVal: (TSvalue) => dispatch(TSEARCH_VALUE(TSvalue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TUpdate);
