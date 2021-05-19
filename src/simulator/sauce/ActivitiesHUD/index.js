import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchActivity } from "../../reducks/actions";

import ActivityReport from "./ActivityReport";

const HUD = () => {

    const { emergencyActivities, currentBoredLevel } = useSelector(s => s);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentBoredLevel > 0) {
            if (Math.random() > .5) { // Half the time.
                dispatch(fetchActivity());
            }
        }
    }, [currentBoredLevel, dispatch]);

    return (
        <div>
            {emergencyActivities.map(activity => {
                return <ActivityReport key={activity.id} activity={activity} />
            })}
        </div>
    );
};

export default HUD;