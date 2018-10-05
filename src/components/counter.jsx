import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = () => {
    if (this.state.count <= 9) this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count >= 1) this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleDecrement}
          className="btn btn-small btn-dark"
        >
          -
        </button>
        <span className={this.getbadgeClass()}>{this.getCounterCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-small btn-dark"
        >
          +
        </button>
      </div>
    );
  }

  //method
  getbadgeClass() {
    let badgeClassName = "badge m-2 badge-";
    badgeClassName += this.state.count === 0 ? "warning" : "primary";
    return badgeClassName;
  }

  //method
  getCounterCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
