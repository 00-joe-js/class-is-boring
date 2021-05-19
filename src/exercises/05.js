import { Component } from "react";
import TheBoredSimulator from "../simulator";

import { connect } from "react-redux";
import { setSimulationStatus, resetBoringLevel } from "../simulator/reducks/actions";

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
    return null;
};

const Exercise05 = () => {
    return <TheBoredSimulator abortButton={<ConnectedClassComp05 />} />
};
export default Exercise05;