import { Component } from "react";

import ShoppingContextManager from "../IKEAVibes";

class ClassComp06 extends Component {
    render() {
        return (
            <div>
                <ShoppingContextManager.Consumer>
                    {currentContextValue => {
                        return (
                            <div>
                                <h1>{currentContextValue.message}</h1>
                                <img src={currentContextValue.imageUrl} />
                            </div>
                        );
                    }}
                </ShoppingContextManager.Consumer>
            </div>
        );
    }
}

const FunctionalComponent06 = () => {
    return null;
};

export default ClassComp06;