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

  componentDidUpdate(prevProps) {
    // console.log("update");
    // console.log("type props.comVal" + prevProps.comVal);
    // console.log("type props.comVal" + JSON.stringify(this.props.comVal));
  }

  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log("APPcomponentWillReceiveProps getting props");
  //   console.log("APPnextContext" + JSON.stringify(nextContext));
  //   console.log("APPnextProps" + nextProps);
  // }

  componentDidMount() {
    // console.log("this.props.loadTableFirstly()");
    // console.log(this.props.loadTableFirstly());
    // console.log(this.props.comVal);
    // console.log("END /*  */this.props.loadTableFirstly()");
  }

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

// makeTbody: (username) => dispatch(MAKE_TBODY(username))

export default connect(mapStateToProps, mapDispatchToProps)(App);
