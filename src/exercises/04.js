import { Component, useState, useEffect } from "react";

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
        console.count("04 class component now rendering!");
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
    
    const [selectedType, setSel] = useState(TYPES_OF_ACTIVITIES[0]);
    const [doWhenImBored, setActivity] = useState(null);

    useEffect(() => {
        const run = async () => {
            const anActivity = await oneRandomActivityOfType(selectedType);
            setActivity(anActivity);
        };
        run();
    }, [selectedType]);

    return (
        <div>
            {doWhenImBored && <h1>{doWhenImBored}</h1>}
            <select onChange={(e) => setSel(e.target.value)} value={selectedType}>
                {TYPES_OF_ACTIVITIES.map(activityType => {
                    return <option key={activityType} value={activityType}>{activityType}</option>
                })}
            </select>
        </div>
    );
};

export default FunctionalComponent04;