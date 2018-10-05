import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";

/**
 * COMPONENTS BEGAIN
 */
import Counters from "./components/counters";
import About from "./components/about";
import Userlist from "./components/userlist";
import User from "./components/user";
/**
 * COMPONENTS ENDS
 */

class App extends Component {
  state = { userLoggedIn: false };

  loginUser = () => {
    this.setState({ userLoggedIn: true });
  };

  render() {
    return (
      <BrowserRouter>
        <switch>
          <ul>
            <li className="btn btn-warning" style={{ margin: "20px 10px" }}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="btn btn-warning" style={{ margin: "20px 10px" }}>
              <NavLink to="/userlist">Userlist</NavLink>
            </li>
            <li className="btn btn-warning" style={{ margin: "20px 10px" }}>
              <NavLink to="/user/safinali/india">User</NavLink>
            </li>
            <li className="btn btn-warning" style={{ margin: "20px 10px" }}>
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
          <input
            type="button"
            value="Log In"
            onClick={this.loginUser.bind(this)}
          />

          <Route
            path="/"
            exact
            srtict
            render={() => {
              return <h1>Main Page</h1>;
            }}
          />
          <Route path="/about" exact srtict component={About} />
          <Route path="/userlist" exact srtict component={Userlist} />
          <Route path="/cart" exact srtict component={Counters} />
          <Route
            path="/user/:username/:country"
            render={({ match }) => {
              return this.state.userLoggedIn ? (
                <User
                  username={match.params.username}
                  country={match.params.country}
                />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
