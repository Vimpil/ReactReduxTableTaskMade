import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
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
      // settingState(nextProps);
      console.log("-0-0-0-0-0-0-0-0-getDerivedStateFromProps-0-0-0-0-0-0-0-0-");
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
    // if (nextProps.upTrValue !== prevState.upTrValue) {
    //   let propCom = nextProps.upTrValue;
    //   return { upTrValue: propCom };
    // } else {
    //   return { upTrValue: undefined };
    // }
  }

  shouldComponentUpdate(prevState, nextProps) {
    console.log("1-1-1-1-1shouldComponentUpdate!1-1-1-1-1");
    // }
    // this.dispatchEvent(new KeyboardEvent('keypress', {
    //   key: 'Enter',
    // }));
    if (this.state.upTrValue) {
      console.log("this.state.upTrValue");
      console.log("this.state.comVal !== undefined");
      console.log(this.state.comVal !== undefined);
      console.log("this.state.TSvalue !== undefined");
      console.log(this.state.TSvalue !== undefined);
      console.log("this.state.TSvalue");
      console.log(this.state.TSvalue);

      console.log("this.state.upTrValue !== undefined");
      console.log(this.state.upTrValue !== undefined);

      if (
        this.state.comVal !== undefined &&
        this.state.TSvalue !== undefined &&
        this.state.upTrValue !== undefined
      ) {
        console.log(
          "this.props.suggVal(getSuggestions(this.props.TSvalue, this.state.comVal))"
        );

        // this.props.suggVal(
        //   getSuggestions(this.props.TSvalue, this.state.comVal)
        // );
        Autosuggest.dispatchEvent(
          new KeyboardEvent("keypress", {
            key: "Enter"
          })
        );
        this.props.changeUpdateTrValue();
      }
    }

    //   return true;
    // }
    return true;
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue.toString()
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.state.comVal)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleKeyDown = (event) => {
    // onKeyUp(event) {
    if (event.key === "Enter") {
      // if (event.charCode === 13) {
      this.props.STSVal(event.target.value);
      this.props.suggVal(this.state.suggestions);
    }
    // }
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange,
      onKeyDown: this.handleKeyDown
    };

    return (
      <Autosuggest
        id="optionalInput"
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
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
