import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./ExerciseNav";

import NumbaOne from "./exercises/01";
import ImTwo from "./exercises/02";
import ThreeAhAhAh from "./exercises/03";
import Fourrrrrrrr from "./exercises/04";
import GimmeFive from "./exercises/05";
import BBBonus from "./exercises/06";

import IKEAVibesContextManager from "./IKEAVibes";

const Exercise04Wrapper = () => {
  const [_, reRender] = useState(Math.random());
  return (
    <div>
      <button onClick={() => reRender(Math.random())}>Trigger re-render</button>
      <Fourrrrrrrr />
    </div>
  );
};

const contextValue = {
  message: "Shopping with your parents is a terrible experience.",
  imageUrl: "https://boredbug.com/wp-content/uploads/2015/02/boredkidsshopping.jpg"
};

function App() {
  return (
    <IKEAVibesContextManager.Provider value={contextValue}>
      <div className="App">
        <Nav />
        <main id="exercise-container">
          <Switch>
            <Route path="/01">
              <NumbaOne imageSource="https://media.giphy.com/media/kKefeMw8rbMVq/giphy.gif" />
            </Route>
            <Route path="/02">
              <ImTwo />
            </Route>
            <Route path="/03">
              <ThreeAhAhAh />
            </Route>
            <Route path="/04">
              <Exercise04Wrapper />
            </Route>
            <Route path="/05">
              <GimmeFive />
            </Route>
            <Route path="/06">
              <BBBonus />
            </Route>
          </Switch>
        </main>
      </div>
    </IKEAVibesContextManager.Provider>
  );
}

export default App;
