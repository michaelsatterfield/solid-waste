import "./App.css";
import Main from "./views/Main";
import Header from "./components/Header";
import MyProvider from "./state/MyProvider";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import NotFound from "./components/NotFound";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/material/undefined" component={NotFound} /> */}
        <MyProvider>
          <Header />
          <Main />
        </MyProvider>
      </Switch>
    </Router>
  );
}

export default App;
