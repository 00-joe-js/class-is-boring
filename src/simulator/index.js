import "./simulator.css";

import zzzzzzzzzzzzzzz from "./boring-things";

import BoringButtons from "./sauce/BoringButtons";
import ActivitiesHUD from "./sauce/ActivitiesHUD";
import BoredMeter from "./sauce/BoredMeter";
import One from "../exercises/01";

import { useSelector } from "react-redux";

const BoredSimulator = ({ abortButton }) => {
    const { boringLevel } = useSelector(s =>
        ({ boringLevel: s.currentBoredLevel })
    );
    if (boringLevel >= 100) {
        return <One imageSource="https://media.giphy.com/media/l378AEZceMwWboAQE/giphy.gif" />;
    }
    return (
        <section id="bored-simulator">
            <div id="abort-button">{abortButton}</div>
            <div id="left-panel">
                <BoringButtons
                    boringThings={zzzzzzzzzzzzzzz}
                />
            </div>
            <div id="central-unit">
                <ActivitiesHUD />
            </div>
            <div id="right-module">
                <BoredMeter />
            </div>
        </section>
    )
};

export default BoredSimulator;