import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    selectableBoredoms: [],
    processingBoredom: false,
    currentBoredLevel: 0,
    simulation: {
        started: false,
        aborted: false,
    },
    emergencyActivities: [],
    communications: []
};

const naiveCopyState = (s) => JSON.parse(JSON.stringify(s));

const reducer = (state = initialState, action = { type: "NOP" }) => {

    if (action.type === "NOP") {
        return state;
    }

    if (action.type === "ADD_ACTIVITIES") {
        const newState = naiveCopyState(state);
        newState.emergencyActivities = [...newState.emergencyActivities, ...action.activities];
        return newState;
    }

    if (action.type === "EXPIRE_ACTIVITY") {
        const newState = naiveCopyState(state);
        newState.emergencyActivities = newState.emergencyActivities.filter(a => a.id !== action.id);
        return newState;
    }

    if (action.type === "ADD_TO_BORING_LEVEL") {
        const newState = naiveCopyState(state);
        newState.currentBoredLevel = newState.currentBoredLevel + action.amount;
        return newState;
    }
    if (action.type === "RESET_BORING_LEVEL") {
        const newState = naiveCopyState(state);
        newState.currentBoredLevel = 0;
        return newState;
    }

    if (action.type === "SET_SIMULATION_STATUS") {
        const newState = naiveCopyState(state);
        newState.simulation = { started: action.started, aborted: action.aborted };
        return newState;
    }

    return state;

};

export default createStore(reducer, applyMiddleware(thunk));