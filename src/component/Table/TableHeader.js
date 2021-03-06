import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TBODY_ASCDESC,
  ORDER_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import {
  selectAscValue,
  selectSuValue
} from "./../../store/tbodyCommand/tbodyCommand.selector";
import { selectCommandValue } from "./../../store/tbodyCommand/tbodyCommand.selector";
class TableRowHeaderMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ascdescVal: this.props.ascdescVal,
      suValue: this.props.suValue
    };
    this.TableHeader = this.TableHeader.bind(this);
  }

  settingState = (set) => {
    this.setState({
      comVal: set
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.ascdescVal !== prevState.ascdescVal) {
      let propCom = nextProps.ascdescVal;
      return { ascdescVal: nextProps.ascdescVal };
    } else {
      return null;
    }
  }

  Button() {
    return;
  }

  TableHeader() {
    var head_names = [
      { name: "ID", id: "ID" },
      { name: "Address", id: "Address" },
      { name: "Price", id: "Price" },
      { name: "Last Update", id: "lastUpdate" },
      { name: "Type", id: "Type" },
      { name: "Is in favorite", id: "love" }
    ];
    const HEAD_NAMES = head_names.map((number, index) => (
        <th key={index}>
          <button
              onClick={() => {
                if (this.props.suValue === 0) {
                  this.props.setOrderVal(
                      number.id,
                      this.props.comVal,
                      !this.state.ascdescVal
                  );
                } else {
                  this.props.setOrderVal(
                      number.id,
                      this.props.suValue,
                      !this.state.ascdescVal
                  );
                }
              }}
              type="button"
          >
            {" "}
            {number.name}
          </button>
        </th>
    ));

    return HEAD_NAMES;
  }

  render() {
    return (
        <thead>
        <tr>
          <this.TableHeader />
        </tr>
        </thead>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  comVal: selectCommandValue,
  ascdescVal: selectAscValue,
  suValue: selectSuValue
});

const mapDispatchToProps = (dispatch) => ({
  setOrderVal: (ordvalue, arrayvalue, ascdesc) =>
      dispatch(ORDER_VALUE(ordvalue, arrayvalue, ascdesc))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableRowHeaderMap);
