import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GameList from "./pages/games/GamesList";
import Game from "./pages/game/Game";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="appContainer">
        <nav>
          <Link to="/">Games</Link>
        </nav>
        <div className="pageContainer">
          <Switch>
            <Route exact path="/">
              <GameList />
            </Route>
            <Route exact path="/game/:id">
              <Game />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
