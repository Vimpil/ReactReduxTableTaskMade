import React, { Component, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  SUGG_VALUE,
  TSEARCH_VALUE,
  UPDATETRIGGER_VALUE,
  HINT_SUGG_VALUE,
  UPDATEHINT_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import onClickOutside from "react-onclickoutside";
import {
  selectCommandValue,
  selectSuValue,
  selectTsValue,
  selectUpTrValue,
  selectHintSuValue,
  selectHintValue
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
      TSvalue: this.props.TSvalue,
      hintSuValue: this.props.hintSuValue,
      hide: true
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
    if (nextProps) {
      // let obj = {};
      // if (nextProps.upTrValue !== prevState.upTrValue) {
      //   obj.upTrValue = nextProps.upTrValue;
      // }
      // if (nextProps.comVal !== prevState.comVal) {
      //   obj.comval = nextProps.comVal;
      //   obj.suValue = nextProps.suValue;
      // }
      // if (nextProps.suValue !== prevState.suValue) {
      //   obj.suValue = nextProps.suValue;
      // }
      // if (nextProps.TSvalue !== prevState.TSvalue) {
      //   obj.TSvalue = nextProps.TSvalue;
      // }
      // if (nextProps.hintSuValue !== prevState.hintSuValue) {
      //   obj.hintSuValue = nextProps.hintSuValue;
      // }
      //
      // // console.log("OBJOBJOBJOBJOBJOBJOBJOBJOBJOBJOBJOBJOBJOBJ");
      // // console.log(JSON.stringify(obj));
      // // console.log("OBJOBJOBJOBJOBJOBJOBJOBJOBJOBJOBJOBJOBJOBJ");
      // return obj;

      // if (nextProps.hintSuValue !== prevState.hintSuValue) {
      //   let propCom = nextProps.hintSuValue;
      //   return { hintSuValue: propCom };
      // }
      // if (nextProps.comVal !== prevState.comVal) {
      //   let propCom = nextProps.comVal;
      //   let propCom2 = nextProps.suValue;
      //   return { comVal: propCom, suValue: propCom2 };
      // }
      // if (nextProps.suValue !== prevState.suValue) {
      //   let propCom = nextProps.suValue;
      //   return { suValue: propCom };
      // }
      // if (nextProps.TSvalue !== prevState.TSvalue) {
      //   let propCom = nextProps.TSvalue;
      //   return { TSvalue: propCom };
      // }
      // if (nextProps.upTrValue !== prevState.upTrValue) {
      //   let propCom = nextProps.upTrValue;
      //   return { upTrValue: propCom };
      // }

      if (nextProps.comVal !== prevState.comVal) {
        let propCom = nextProps.comVal;
        let propCom2 = nextProps.suValue;
        // if (!this.state.hide){}
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
      if (nextProps.hintSuValue !== prevState.hintSuValue) {
        let propCom = nextProps.hintSuValue;
        return { hintSuValue: propCom };
      }
      if (nextProps.upTrValue !== prevState.upTrValue) {
        let propCom = nextProps.upTrValue;
        return { upTrValue: propCom };
      }
    }
  }

  onChange = (event) => {
    this.props.changeHintValue(true);
    this.setState({ hide: false });
    // console.log("***event.target.value***");
    // console.log(event.target.value);
    // console.log("***event.target.value***");
    if (event.target.value !== "") {
      this.props.STSVal(event.target.value);
      // this.props.suggVal(this.state.comVal);
      this.props.changeHintSuValue(this.state.comVal);
    } else {
      this.props.STSVal(0);
    }
  };

  onKeyDown = (event) => {
    if (event.target !== undefined) {
      if (event.keyCode === 13) {
        // console.log("ENTER");
        if (event.target.value !== "") {
          this.props.STSVal(event.target.value);
          this.props.suggVal(this.state.comVal);
        }
      }
    }
  };

  handleClickOutside = (event) => {
    // if (this && !this.contains(event.target)) {
    this.props.changeHintValue(false);
    console.log("outside");
    this.setState({ hide: true });

    // setIsComponentVisible(false);
    // }
  };

  getStyle = () => {
    if (this.state.hide) {
      return { display: "none" };
    } else {
      return { display: "block" };
    }
  };

  render() {
    var hintsStyle = "display:none";

    return (
        <>
          <div className="wrap">
            <div className="search">
              <input onChange={this.onChange}
                     onKeyDown={this.onKeyDown}
                     handleClickOutside={this.handleClickOutside}
                     type="text" className="searchTerm" placeholder="Find the property by Address, ID or Type" />
                {/*<button type="submit" className="searchButton">*/}
                {/*  <i className="fa fa-search"></i>*/}
                {/*</button>*/}
            </div>
          </div>

          {/*<input*/}
          {/*    onChange={this.onChange}*/}
          {/*    onKeyDown={this.onKeyDown}*/}
          {/*    handleClickOutside={this.handleClickOutside}*/}
          {/*/>*/}

          <div id="hints" style={this.getStyle()}>
            {this.state.hintSuValue !== undefined
                ? JSON.stringify(this.state.hintSuValue)
                : null}
          </div>
        </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  comVal: selectCommandValue,
  suValue: selectSuValue,
  TSvalue: selectTsValue,
  upTrValue: selectUpTrValue,
  hintSuValue: selectHintSuValue,
  hintValue: selectHintValue
});

const mapDispatchToProps = () => (dispatch) => ({
  suggVal: (arrayvalue) => dispatch(SUGG_VALUE(arrayvalue)),
  STSVal: (TSvalue) => dispatch(TSEARCH_VALUE(TSvalue)),
  changeUpdateTrValue: () => dispatch(UPDATETRIGGER_VALUE()),
  changeHintSuValue: (arrayvalue) => dispatch(HINT_SUGG_VALUE(arrayvalue)),
  changeHintValue: (boolvalue) => dispatch(UPDATEHINT_VALUE(boolvalue))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(onClickOutside(TSearch));
// updating uptrvalue no cahnges why
