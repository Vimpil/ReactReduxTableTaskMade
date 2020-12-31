import React, { Component } from "react";
import { connect } from "react-redux";
import {
    MAKE_TBODY,
    TSEARCH_VALUE,
    UPDATETRIGGER_VALUE,
    SUGG_VALUE,
    ORDER_VALUE,
    TBODY_ASCDESC,
    HINT_SUGG_VALUE,
    UPDATEHINT_VALUE
} from "./../../store/tbodyCommand/tbodyCommand.action";
import { createStructuredSelector } from "reselect";
import {
    selectCommandValue,
    selectOrdValue,
    selectAscValue,
    selectSuValue,
    selectTsValue,
    selectUpTrValue,
    selectHintSuValue,
    selectHintValue
} from "./../../store/tbodyCommand/tbodyCommand.selector";

class TUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comVal: this.props.comVal,
            ascdescVal: this.props.ascdescVal,
            suValue: this.props.suValue,
            tbody: this.props.tbody,
            TSvalue: this.props.TSvalue,
            upTrValue: this.props.upTrValue,
            suggVal: this.props.suggVal,
            ordValue: this.props.ordValue,
            hintValue: this.props.hintValue
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps) {
            let obj = {};

            if (nextProps.TSvalue !== prevState.TSvalue) {
                let propCom = nextProps.TSvalue;
                obj.TSvalue = propCom;
            }

            if (nextProps.suValue !== prevState.suValue) {
                let propCom = nextProps.suValue;
                let propCom2 = nextProps.comVal;
                if (propCom !== null) {
                    obj.tbody = propCom;
                    obj.suValue = propCom;
                } else {
                    obj.tbody = propCom2;
                }
            }

            if (nextProps.comVal !== prevState.comVal) {
                obj.comVal = nextProps.comVal;
                obj.tbody = nextProps.comVal;
            }

            if (nextProps.upTrValue !== prevState.upTrValue) {
                obj.upTrValue = nextProps.upTrValue;
            }

            if (nextProps.ascdescVal !== prevState.ascdescVal) {
                obj.ascdescVal = obj.ascdescVal;
            }

            if (nextProps.ordValue !== prevState.ordValue) {
                obj.ordValue = nextProps.ordValue;
            }

            if (nextProps.hintValue !== prevState.hintValue) {
                obj.hintValue = nextProps.hintValue;
            }

            return obj;
        }
    }

    componentDidMount() {
        const timer = setInterval((props) => {
            console.log("TUpdate INTERVAL");
            // console.log(JSON.stringify(this.state.comVal));
            this.props.makeTbody(true, this.state.comVal);
            this.props.setOrderVal(
                this.state.ordValue,
                this.state.comVal,
                this.state.ascdescVal
            );
            if (this.state.suValue !== 0) {
                this.props.suggVal(this.state.comVal);
            }
            if (this.state.hintValue) {
                this.props.changeHintSuValue(this.state.comVal);
            }
            this.props.changeUpdateTrValue();
            // if (this.state.suValue !== 0) {
            //   this.props.suggVal(this.state.comVal);
            // }
        }, 5000);
        // const timer2 = setTimeout((props) => {
        //   this.props.makeTbody();
        //   if (this.state.suValue !== 0) {
        //     this.props.suggVal(this.state.comVal, this.state.ordValue);
        //   }
        // }, 10000);
    }

    render() {
        return <>{}</>;
    }
}

const mapStateToProps = createStructuredSelector({
    comVal: selectCommandValue,
    ordValue: selectOrdValue,
    ascdescVal: selectAscValue,
    suValue: selectSuValue,
    TSvalue: selectTsValue,
    upTrValue: selectUpTrValue,
    hintValue: selectHintValue,
    hintSuValue: selectHintSuValue
});

const mapDispatchToProps = () => (dispatch) => ({
    suggVal: (arrayvalue) => dispatch(SUGG_VALUE(arrayvalue)),
    makeTbody: (boolvalue, arrayvalue) =>
        dispatch(MAKE_TBODY(boolvalue, arrayvalue)),
    changeUpdateTrValue: () => dispatch(UPDATETRIGGER_VALUE()),
    setOrderVal: (ordvalue, arrayvalue, ascdesc) =>
        dispatch(ORDER_VALUE(ordvalue, arrayvalue, ascdesc)),
    changeHintValue: (boolvalue) => dispatch(UPDATEHINT_VALUE(boolvalue)),
    changeHintSuValue: (arrayvalue) => dispatch(HINT_SUGG_VALUE(arrayvalue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TUpdate);
