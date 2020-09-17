import React from "react";
import { connect } from "react-redux";
import { MAKE_TBODY } from "./store/tbodyCommand/tbodyCommand.action";
class Counter extends React.Component {
  componentDidMount() {
    this.props.loadTableFirstly();
  }

  render() {
    return (
      <div>
        {/* <button onClick={()=>this.props.makeTbody('JDJD')}>Decrement</button> */}
        <hr />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadTableFirstly: () => dispatch(MAKE_TBODY())
});

// makeTbody: (username) => dispatch(MAKE_TBODY(username))

export default connect(mapDispatchToProps);
