import React, { Component } from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Counter from "./counter";
import Student from "./Student";
class App extends Component {
  state = {
    fName: "Redda",
    lName: "Gebre",
    students: [
      { name: "Jhon", age: 12 },
      { name: "Bob", age: 67 },
      { name: "Ezra", age: 2 },
    ],
  };
  incrementAge = (index) => {
    const students = this.state.students;
    students[index].age+=1;
    this.setState({ students });
  };
  makeOlder = () => {
    this.setState({
      students: [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 23 },
      ],
    });
  };
  render() {
    return (
      <div>
        <div>
          <FirstName fName={this.state.fName}>This is my first name</FirstName>
          <LastName lName={this.state.lName}>This is my last name</LastName>
        </div>
        <div>
          <h3>Counter</h3>
          <Counter></Counter>
        </div>
        <div>
          <h3>Student List</h3>
          <Student
            name={this.state.students[0].name}
            age={this.state.students[0].age}
            index={0}
            increment={this.incrementAge}
          ></Student>
          <Student
            name={this.state.students[1].name}
            age={this.state.students[1].age}
            index={1}
            incrementAge={this.incrementAge}
          ></Student>
          <Student
            name={this.state.students[2].name}
            age={this.state.students[2].age}
            index={2}
            incrementAge={this.incrementAge}
          ></Student>
        </div>
      </div>
    );
  }
}

export default App;
