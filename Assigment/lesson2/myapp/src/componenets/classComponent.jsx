import React, { Component } from "react";
export default class ClassComponenet extends Component {
  state = {
    name: "Jhon",
    address: "127 Marthing luther king ",
  };
  render() {
    return (
      <div>
        <h1>Class component</h1>
        <p>
          Address of {this.state.name} is {this.state.address}
        </p>
      </div>
    );
  }
}
