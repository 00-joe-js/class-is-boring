import { oneRandomDetailedActivity } from "../../bored-api";

export const setSelectableBoredoms = (choices) => {
    return { type: "SET_SELECTABLE_BOREDOMS", choices };
};

export const setProcessingBoredom = (isProcessing) => {
    return { type: "SET_PROCESSING", isProcessing };
};

export const incrementBoringLevel = (amount) => {
    return { type: "ADD_TO_BORING_LEVEL", amount };
};

export const resetBoringLevel = () => {
    return { type: "RESET_BORING_LEVEL" };
};

export const setSimulationStatus = ({ started, aborted }) => {
    return { type: "SET_SIMULATION_STATUS", started, aborted };
};

export const addActivities = (activities) => {
    return { type: "ADD_ACTIVITIES", activities };
};

export const expireActivity = (id) => {
    return { type: "EXPIRE_ACTIVITY", id };
};

export const sendComm = ({ severity, message }) => {
    return { type: "SEND_COMM", severity, message };
};


const shapeActivity = (rawActivity) => {
    return {
        id: rawActivity.key + Date.now(),
        participants: rawActivity.participants,
        type: rawActivity.type,
        activity: rawActivity.activity,
        isFree: rawActivity.price === 0,
    };
};
export const fetchActivity = () => {
    return async (dispatch) => {
        const activity = await oneRandomDetailedActivity();
        const massagedActivity = shapeActivity(activity);
        dispatch(addActivities([massagedActivity]));
    };
};

