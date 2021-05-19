import { useMemo } from "react";
import { useSelector } from "react-redux";

const BoredMeter = () => {

    const boredPerc = useSelector(s => s.currentBoredLevel);

    const barHeight = useMemo(() => {
        return `${boredPerc}%`;
    }, [boredPerc]);

    return (
        <div id="bored-meter">
            <div id="bored-meter-bar" style={{ height: barHeight }}></div>
        </div>
    );

};

export default BoredMeter;