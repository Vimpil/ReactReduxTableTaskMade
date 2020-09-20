import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TBODY_ASCDESC,
  ORDER_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import { selectAscValue } from "./../../store/tbodyCommand/tbodyCommand.selector";
import { selectCommandValue } from "./../../store/tbodyCommand/tbodyCommand.selector";
class TableRowHeaderMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ascdescVal: this.props.ascdescVal
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
    }
  }

  Button() {
    return;
  }

  TableHeader() {
    var head_names = [
      "ID",
      "Address",
      "Price",
      "Last Update",
      "Type",
      "Is in favorite"
    ];
    // console.log(this.props.ascTbody("as"));
    const HEAD_NAMES = head_names.map((number) => (
      <th key={number.toString()}>
        <button
          onClick={() => {
            // this.props.changeAscTbody();
            console.log("this.props.comval");
            console.log(this.props.comVal);
            this.props.setOrderVal(number, this.props.comVal);
          }}
          type="button"
        >
          {" "}
          {number}
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
  ascdescVal: selectAscValue
});

const mapDispatchToProps = (dispatch) => ({
  // changeAscTbody: (ascDescValue) => dispatch(TBODY_ASCDESC(ascDescValue)),

  setOrderVal: (ordvalue, arrayvalue) =>
    dispatch(ORDER_VALUE(ordvalue, arrayvalue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableRowHeaderMap);
