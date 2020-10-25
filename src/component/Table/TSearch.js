import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import {
  SUGG_VALUE,
  TSEARCH_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import {
  selectCommandValue,
  selectSuValue,
  selectTsValue
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

// function renderSectionTitle(section) {
//   return <strong>
//   {section.title}
//   </strong>;
// }

// function getSectionSuggestions(section) {
//   return section.languages;
// }

class TSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: [],
      suValue: 0
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
      console.log("-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-");
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
  }

  shouldComponentUpdate(prevState) {
    if (this.state.comVal !== prevState.comVal) {
      console.log("1-1-1-1-1thats comp update!1-1-1-1-1");
      this.props.suggVal(this.state.suggestions);
      return true;
    }
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

  handleKeyDown = (e) => {
    // const sugg =getSuggestions(value, this.state.comVa);
    if (e.key === "Enter") {
      // this.setState({
      //   suggestions: getSuggestions(value, this.state.comVal),
      // });

      // console.log(this.state.suggestions)
      this.props.STSVal(e.target.value);
      // console.log("this.target");
      // console.log(e.target.value);
      // console.log("this.target");

      this.props.suggVal(this.state.suggestions);
    }
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
  TSvalue: selectTsValue
});

const mapDispatchToProps = () => (dispatch) => ({
  suggVal: (arrayvalue) => dispatch(SUGG_VALUE(arrayvalue)),
  STSVal: (TSvalue) => dispatch(TSEARCH_VALUE(TSvalue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TSearch);
