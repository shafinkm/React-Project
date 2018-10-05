import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <h3>
        Hello, <b>{this.props.username}</b> from <b>{this.props.country}</b>
      </h3>
    );
  }
}

export default User;
