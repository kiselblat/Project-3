import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Entry from "./pages/Entry"
// import Rater from "./components/Rater";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Entry} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
