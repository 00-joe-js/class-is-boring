import { Component } from "react";
import TheBoredSimulator from "../simulator";

import { connect, useSelector, useDispatch } from "react-redux";
import { setSimulationStatus, resetBoringLevel } from "../simulator/reducks/actions";
import FunctionalComponent03 from "./03";

const mSTP = (state) => {
    return {
        level: state.currentBoredLevel
    };
};
const mDTP = (dispatch) => {
    return {
        abort: () => {
            dispatch(resetBoringLevel());
            dispatch(setSimulationStatus({ started: false, aborted: true }));
        }
    };
};
class ClassComp05 extends Component {
    render() {
        const { level, abort } = this.props;
        if (level === 0) {
            return null;
        }
        return <button onClick={abort}>ABORT SIMULATION</button>;
    }
}
const ConnectedClassComp05 = connect(mSTP, mDTP)(ClassComp05);

const FunctionalComponent05 = () => {
    const level = useSelector(state => {
        return state.currentBoredLevel;
    });

    const dispatch = useDispatch();

    if (level === 0) {
        return null;
    }
    return <button onClick={() => {
        dispatch(resetBoringLevel());
        dispatch(setSimulationStatus({ started: false, aborted: true }));
    }}>ABORT SIMULATION</button>;
};

const Exercise05 = () => {
    return <TheBoredSimulator abortButton={<FunctionalComponent05 />} />
};
export default Exercise05;