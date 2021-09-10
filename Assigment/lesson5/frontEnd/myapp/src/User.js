import React, { PureComponent } from "react";
class User extends PureComponent {
  constructor(props) {
    super(props);
    console.log("User Component Constructor");
  }
  componentDidMount() {
    console.log("User componentDidMount");
  }
  componentWillUnmount(){
    console.log("User componentWillUnmount") 
   }
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps.users !== this.props.users) {
//       return true;
//     }
//     return false;
//   }
  render() {
    console.log("User render component");
    return (
      <div>
        <b>Name:</b> {this.props.name}
      </div>
    );
  }
}
export default User;
