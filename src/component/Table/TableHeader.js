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
    this.TableHeader = this.TableHeader.bind(this);
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
            this.props.changeAscTbody();
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
  ascdescVal: selectAscValue,
  comVal: selectCommandValue
});

const mapDispatchToProps = (dispatch) => ({
  changeAscTbody: () => dispatch(TBODY_ASCDESC()),
  setOrderVal: (ordvalue, arrayvalue) =>
    dispatch(ORDER_VALUE(ordvalue, arrayvalue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableRowHeaderMap);
