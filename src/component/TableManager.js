import React, { Component } from "react";
import TableHeader from "./Table/TableHeader";
import TableBody from "./Table/TableBody";
import TSearch from "./Table/TSearch";
import TUpdate from "./Table/TUpdate";

class TableManager extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("TableManagercomponentWillReceiveProps getting props");
    console.log("TableManagernextContext" + JSON.stringify(nextContext));
    console.log("TableManagernextProps" + nextProps);
  }

  render() {
    return (
      <>
        <TSearch />
        <TUpdate />
        <table id="data_table">
          <TableHeader />
          <TableBody />
        </table>
      </>
    );
  }
}

export default TableManager;
