import React, { Component } from "react";
import { connect } from "react-redux";
import { ISINFAV_VALUE } from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import { selectFaValue } from "./../../store/tbodyCommand/tbodyCommand.selector";

class TRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // faValue: this.props.faValue
    };
    return (
      <>
        <button
        // onClick=
        // {
        // (console.log("comVal_insert[key].id" + this.props.id),
        //  this.props.makeFav(this.props.id
        //   )
        // )
        //  }
        >
          fav
          {/* {{this.props.key}} */}
        </button>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  faValue: selectFaValue
});

const mapDispatchToProps = () => (dispatch) => ({
  makeFav: (idvalue) => dispatch(ISINFAV_VALUE(idvalue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TRow);
