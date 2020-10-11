import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCommandValue } from "./../../store/tbodyCommand/tbodyCommand.selector";

const languages = [];
//   {
//     id: 10000,
//     address: "Tatehaven 130 O'Keefe Skyway",
//     price: 112109,
//     lastUpdate: 1601985151939,
//     type: "Home",
//     love: 0
//   },
//   {
//     id: 10001,
//     address: "East Bruce 474 Rice Lock",
//     price: 165476,
//     lastUpdate: 1601985151941,
//     type: "Home",
//     love: 0
//   }
// ];

// [
//   {
//     title: 1970,
//     languages: [
//       {
//         name: "C",
//         year: 1972
//       }
//     ]
//   },
//   {
//     title: 1980,
//     languages: [
//       {
//         name: "C++",
//         year: 1983
//       },
//       {
//         name: "Perl",
//         year: 1987
//       }
//     ]
//   },
//   {
//     title: 1990,
//     languages: [
//       {
//         name: "Haskell",
//         year: 1990
//       },
//       {
//         name: "Python",
//         year: 1991
//       },
//       {
//         name: "Java",
//         year: 1995
//       },
//       {
//         name: "Javascript",
//         year: 1995
//       },
//       {
//         name: "PHP",
//         year: 1995
//       },
//       {
//         name: "Ruby",
//         year: 1995
//       }
//     ]
//   },
//   {
//     title: 2000,
//     languages: [
//       {
//         name: "C#",
//         year: 2000
//       },
//       {
//         name: "Scala",
//         year: 2003
//       },
//       {
//         name: "Clojure",
//         year: 2007
//       },
//       {
//         name: "Go",
//         year: 2009
//       }
//     ]
//   },
//   {
//     title: 2010,
//     languages: [
//       {
//         name: "Elm",
//         year: 2012
//       }
//     ]
//   }
// ];

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
      comval: this.props.comval
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
      return { comVal: propCom };
    }
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

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
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
  comVal: selectCommandValue
});

export default connect(mapStateToProps)(TSearch);
