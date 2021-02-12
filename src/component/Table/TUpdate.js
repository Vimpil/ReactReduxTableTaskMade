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
    UPDATEHINT_VALUE,
    ISINFAV_VALUE
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
    selectHintValue,
    selectFaValue
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
            hintValue: this.props.hintValue,
            faValue: this.props.faValue
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
                obj.ascdescVal = nextProps.ascdescVal;
            }

            if (nextProps.ordValue !== prevState.ordValue) {
                obj.ordValue = nextProps.ordValue;
            }

            if (nextProps.hintValue !== prevState.hintValue) {
                obj.hintValue = nextProps.hintValue;
            }
            if (nextProps.faValue !== prevState.faValue) {
                obj.faValue = nextProps.faValue;
            }

            return obj;
        }
    }

    componentDidMount() {
        const timer = setInterval((props) => {
            // console.log("TUpdate INTERVAL");
            // console.log(this.state.faValue);
            // console.log("**");
            // console.log(JSON.stringify(this.state.faValue));
            // console.log("tipe");
            // var type = typeof this.state.faValue;
            // console.log(type);

            // console.log("this.state.ascdescVal");
            // console.log(this.state.ascdescVal);
            console.log("this.state.faValue");
            console.log(this.state.faValue);
            this.props.makeTbody(true, this.state.faValue);
            // this.props.makeTbody(true, [{ 0: 10000 }, { 1: 10001 }]);
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
        }, 1000);
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
    faValue: selectFaValue,
    hintSuValue: selectHintSuValue
});

const mapDispatchToProps = () => (dispatch) => ({
    suggVal: (arrayvalue) => dispatch(SUGG_VALUE(arrayvalue)),
    makeTbody: (boolvalue, mapvalue) => dispatch(MAKE_TBODY(boolvalue, mapvalue)),
    changeUpdateTrValue: () => dispatch(UPDATETRIGGER_VALUE()),
    setOrderVal: (ordvalue, arrayvalue, ascdesc) =>
        dispatch(ORDER_VALUE(ordvalue, arrayvalue, ascdesc)),
    changeHintValue: (boolvalue) => dispatch(UPDATEHINT_VALUE(boolvalue)),
    changeHintSuValue: (arrayvalue) => dispatch(HINT_SUGG_VALUE(arrayvalue)),
    makeFav: (id, arrayvalue, boolvalue) =>
        dispatch(ISINFAV_VALUE(id, arrayvalue, boolvalue))
});

export default connect(mapStateToProps, mapDispatchToProps)(TUpdate);
