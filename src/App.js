import { Switch, Route } from "react-router-dom";

import Nav from "./ExerciseNav";

import NumbaOne from "./exercises/01";
import ImTwo from "./exercises/02";
import ThreeAhAhAh from "./exercises/03";
import Fourrrrrrrr from "./exercises/04";
import GimmeFive from "./exercises/05";

function App() {
  return (
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
            <Fourrrrrrrr />
          </Route>
          {/* <Route path="/05">
            <GimmeFive />
          </Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
