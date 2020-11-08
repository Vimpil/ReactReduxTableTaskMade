import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SUGG_VALUE,
  TSEARCH_VALUE,
  UPDATETRIGGER_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import {
  selectCommandValue,
  selectSuValue,
  selectTsValue,
  selectUpTrValue
} from "./../../store/tbodyCommand/tbodyCommand.selector";

const languages = [];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const getSuggestions = (value, source) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0
    ? []
    : source.filter(
        (lang) =>
          lang.id.toString().slice(0, inputLength) === inputValue ||
          lang.address.toString().toLowerCase().slice(0, inputLength) ===
            inputValue.toLowerCase() ||
          lang.type.toString().toLowerCase().slice(0, inputLength) ===
            inputValue.toLowerCase()
      );
};

const getSuggestionValue = (suggestion) => suggestion.id;

const renderSuggestion = (suggestion) => (
  <>
    <td>
      {suggestion.id} {suggestion.address}
    </td>
  </>
);

class TSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: [],
      suValue: 0,
      upTrValue: this.props.upTrValue,
      comVal: this.props.comVal,
      TSvalue: this.props.TSvalue
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  settingState = (set) => {
    this.setState({
      suValue: set
    });
  };

  settingState2 = (set) => {
    this.setState({
      suggestions: set
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.comVal !== prevState.comVal) {
      let propCom = nextProps.comVal;
      let propCom2 = nextProps.suValue;
      return { comVal: propCom, suValue: propCom2 };
    }
    if (nextProps.suValue !== prevState.suValue) {
      let propCom = nextProps.suValue;
      return { suValue: propCom };
    }
    if (nextProps.TSvalue !== prevState.TSvalue) {
      let propCom = nextProps.TSvalue;
      return { TSvalue: propCom };
    }
    if (nextProps.upTrValue !== prevState.upTrValue) {
      let propCom = nextProps.upTrValue;
      return { upTrValue: propCom };
    }
  }

  onChange = (event) => {
    if(event.target.value!=="") {
      this.props.STSVal(event.target.value);
      this.props.suggVal(this.state.comVal);
    }else{
      this.props.STSVal(0);
    }
  };

  onKeyDown = (event) => {
    if (event.target !== undefined) {
      if (event.keyCode === 13) {
        if (event.target.value !== "") {
          this.props.STSVal(event.target.value);
          this.props.suggVal(this.state.comVal);
        }
      }
    }
  };
  render() {
    return <input onChange={this.onChange} onKeyDown={this.onKeyDown} />;
  }
}

const mapStateToProps = createStructuredSelector({
  comVal: selectCommandValue,
  suValue: selectSuValue,
  TSvalue: selectTsValue,
  upTrValue: selectUpTrValue
});

const mapDispatchToProps = () => (dispatch) => ({
  suggVal: (arrayvalue) => dispatch(SUGG_VALUE(arrayvalue)),
  STSVal: (TSvalue) => dispatch(TSEARCH_VALUE(TSvalue)),
  changeUpdateTrValue: () => dispatch(UPDATETRIGGER_VALUE())
});

export default connect(mapStateToProps, mapDispatchToProps)(TSearch);
// updating uptrvalue no cahnges why
