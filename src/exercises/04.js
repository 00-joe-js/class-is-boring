import { Component } from "react";

import { oneRandomActivityOfType, TYPES_OF_ACTIVITIES } from '../bored-api';

class ClassComp04 extends Component {
    constructor() {
        super();
        this.state = {
            doWhenImBored: null,
            selectedType: TYPES_OF_ACTIVITIES[0],
        };
    }
    async getActivity() {
        const anActivity = await oneRandomActivityOfType(this.state.selectedType);
        this.setState({ doWhenImBored: anActivity });
    }
    async componentDidMount() {
        this.getActivity();
    }
    async componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedType !== this.state.selectedType) {
            this.getActivity();
        }
    }
    render() {
        const { doWhenImBored, selectedType } = this.state;
        return (
            <div>
                {doWhenImBored && <h1>{doWhenImBored}</h1>}
                <select onChange={(e) => this.setState({ selectedType: e.target.value })} value={selectedType}>
                    {TYPES_OF_ACTIVITIES.map(activityType => {
                        return <option key={activityType} value={activityType}>{activityType}</option>
                    })}
                </select>
            </div>
        );
    }
}

const FunctionalComponent04 = () => {
    return null;
};

export default ClassComp04;