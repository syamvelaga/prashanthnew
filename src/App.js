import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/UserLoginPage";
import HomePage from "./components/HomePage";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/home/page" component={HomePage} />
  </Switch>
);

export default App;
