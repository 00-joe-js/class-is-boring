import { Component, useState } from "react";

class ClassComp02 extends Component {
    constructor() {
        super();
        this.state = { isBored: false };
    }
    render() {
        const { isBored } = this.state;
        return (
            <div>
                <h1>{isBored ? "Yeah, I'm bored too." : "Really? Well good for you I suppose."}</h1>
                <div>
                    {!isBored && <button onClick={() => this.setState({ isBored: true })}>I'm Bored</button>}
                    {isBored && <button onClick={() => this.setState({ isBored: false })}>I'm Not Bored</button>}
                </div>
            </div>
        );
    }
}

const FunctionalComponent02 = () => {
    const [isBored, setBored] = useState(false);
    const [rando, setRandom] = useState(Math.random());
    // const myStateStuff = useState(false);
    // const isBored = myStateStuff[0];
    // const setBored = myStateStuff[1];

    return (
        <div>
            <h2>{rando}</h2>
            <h1>{isBored ? "Yeah, I'm bored too." : "Really? Well good for you I suppose."}</h1>
            <div>
                {!isBored && <button onClick={() => {
                    setBored(true);
                    setRandom(Math.random());
                }}>I'm Bored</button>}
                {isBored && <button onClick={() => setBored(false)}>I'm Not Bored</button>}
            </div>
        </div>
    );
};

export default FunctionalComponent02;