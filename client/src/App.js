import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";

import Header from "./components/Header";
import Entry from "./pages/Entry"
import Stats from "./pages/Stats"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import Register from "./pages/Register"
// import Rater from "./components/Rater";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)    
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
        <Router>
          <Header updateUser={this.updateUser} loggedIn={this.state.loggedIn} currentUser={this.state.username}/>
          {!this.state.loggedIn ?
            // if user isn't logged in, force login
            <Switch>
              <Route
              path="/signup"
              render={() =>
                <Register/>}
              />
              <Route
              render={() => 
                <Login
                  updateUser={this.updateUser}
                  />
                }
              />
            </Switch>
          :
            // if the user is logged in
            <Switch>
              <Route exact path="/" render={ () => {return <Entry  loggedIn={this.state.loggedIn} currentUser={this.state.username} />} } />
              <Route exact path="/entry" render={ () => {return <Entry  loggedIn={this.state.loggedIn} currentUser={this.state.username} />} } />
              <Route exact path="/stats" render={ () => {return <Stats  loggedIn={this.state.loggedIn} currentUser={this.state.username} />} } />
              <Route exact path="/settings" render={ () => {return <Settings  loggedIn={this.state.loggedIn} currentUser={this.state.username} />} } />
            </Switch>
          }
        </Router>
    );
  }
}

export default App;
