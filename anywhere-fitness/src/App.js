import AddClassForm from "./components/AddClassForm";
import Home from "./components/Home";
import Login from "./components/Login";
import Search from "./components/Search";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Anywhere Fitness</h1>
      <Home />
      <Search />
      <Login />
      <Signup />
      <AddClassForm />
    </div>
  );
}

export default App;
