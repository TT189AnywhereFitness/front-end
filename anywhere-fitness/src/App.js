// import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import PrivateRoute from "./components/PrivateRoute"; // uncommented so I could work on the search functions
import { Route } from "react-router-dom";
import Header from "./components/HeaderNav";

// import PrivateRoute from "./components/PrivateRoute";
import { StyledApp } from "./components/styled";

// import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />

      <Route path="/signup" component={Signup} />
      {/* <PrivateRoute path="/search" component={Search} /> */}

      <Route path="/signup" component={Signup} />
      {/* Keeps authorized users in home component for easier state management and access to views only allowed to authed users */}
      <Route path="/search">
        <Home view="search" />
      </Route>
      <Route path="/add" >
        <Home view="addClass"/>
      </Route>
      <Route path="/edit">
        <Home view="edit" />
      </Route>
    </StyledApp>
  );
}

export default App;

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// import HeaderNav from "./components/HeaderNav";

// function App() {
//   const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
//   return (
//     // Unless authenticated, user will be redirected to login page
//     <Router>
//       <HeaderNav />
//       <Switch>
//         <Route path="/home">
//           <Home />
//         </Route>
//         <Route
//           path="/signup"
//           render={() =>
//             isUserAuthenticated ? <Signup /> : <Redirect to="/login" />
//           }
//         />
//         <Route
//           path="/search"
//           render={() =>
//             isUserAuthenticated ? <Search /> : <Redirect to="/login" />
//           }
//         />
//         <Route path="/login">
//           <Login />
//         </Route>
//         <Route
//         // route placed at end of switch to act as a catch-all for urls
//           path="/"
//           render={() =>
//             isUserAuthenticated ? (
//               <Redirect to="/home" />
//             ) : (
//               <Redirect to="/login" />
//             )
//           }
//         />
//       </Switch>
//     </Router>
//   );
// }
