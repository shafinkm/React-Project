import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 1 }
    ]
  };

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} selected={true} />
        ))}
      </div>
    );
  }
}

export default Counters;
