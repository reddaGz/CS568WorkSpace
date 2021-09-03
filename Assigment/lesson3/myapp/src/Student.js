import React, { Component } from "react";
class Student extends Component {
    
  render() {
      console.log(this.props)
    return (
      <div>
        <p>
          name:{this.props.name} age:{this.props.age}
        </p>
        <button onClick={() => this.props.increment(this.props.index)}>Increment age</button>
      </div>
    );
  }
}

export default Student;
