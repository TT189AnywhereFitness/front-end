import Home from "./components/Home";
import Login from "./components/Login";
import Search from "./components/Search";
import Signup from "./components/Signup";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header id="header">
        <h1>Anywhere Fitness</h1>
        <nav className="navbar">
          <ul className="navlist">
            <li className="navItem">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/search">Search Classes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
