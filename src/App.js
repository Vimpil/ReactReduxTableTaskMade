import React, { Component } from "react";
import { connect } from "react-redux";
import TableManager from "./component/TableManager";
import { MAKE_TBODY } from "./store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import { selectCommandValue } from "./store/tbodyCommand/tbodyCommand.selector";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.name = "table_fill";
    this.state = {
      tabledata: this.props.comVal
    };
  }

  componentDidUpdate(prevProps) {}

  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <TableManager />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  comVal: selectCommandValue
});

const mapDispatchToProps = (dispatch) => ({
  loadTableFirstly: () => dispatch(MAKE_TBODY())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
