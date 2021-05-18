import { Component } from "react";

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
    return null;
};

export default ClassComp02;