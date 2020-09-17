import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCommandValue } from "./store/tbodyCommand/tbodyCommand.selector";
import { MAKE_TBODY } from "./store/tbodyCommand/tbodyCommand.action";
import { connect } from "react-redux";

const Header = (props) => {
  console.log(props.command);
  return (
    <>
      <div>Hello User : {props.command}</div>
      <button onClick={() => props.addUser([1, 2])}>ChangeUser</button>
      <hr />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  command: selectCommandValue
});

const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(MAKE_TBODY())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
