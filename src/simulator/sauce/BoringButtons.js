import { useDispatch } from "react-redux";
import { incrementBoringLevel } from "../reducks/actions";

const BoringButtons = ({ boringThings }) => {
    const dispatch = useDispatch();
    return (
        <div id="boring-buttons">
            {boringThings.map(thing => {
                return (
                    <div key={thing}>
                        <button onClick={() => dispatch(incrementBoringLevel(Math.random() * 15))}>
                            {thing}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default BoringButtons;