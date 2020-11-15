import "./App.css";
import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Register from "./views/user/Register.jsx";
import Login from "./views/user/Login.jsx";
import { Home } from './views/Home.jsx';
import { isAuthenticated } from './constant';

class App extends Component {
  render() {
    return (
      <div className="app-routes">
        <BrowserRouter>
          <Switch>
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Register} />
            <Route path="/" render={props => {
              return isAuthenticated() ? <Home {...props} /> : <Redirect to="/signin" />;
            }} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;