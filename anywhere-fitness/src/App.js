import AddClassForm from "./components/AddClassForm";
import ClassDetail from "./components/ClassDetail";
import EditClassForm from "./components/EditClassForm";
import Home from "./components/Home";
import Login from "./components/Login";
import Search from "./components/Search";
import Signup from "./components/Signup";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
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
          <Route path="/editclassform">
            <EditClassForm />
          </Route>
          <Route>
            <ClassDetail />
          </Route>
          <Route>
            <AddClassForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
