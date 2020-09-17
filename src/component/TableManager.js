import React, { Component } from "react";
import TableHeader from "./Table/TableHeader";
import TableBody from "./Table/TableBody";

class TableManager extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("TableManagercomponentWillReceiveProps getting props");
    console.log("TableManagernextContext" + JSON.stringify(nextContext));
    console.log("TableManagernextProps" + nextProps);
  }

  render() {
    return (
      <table id="data_table">
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default TableManager;
