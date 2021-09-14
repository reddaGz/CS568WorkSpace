import axios from "axios";
import React from "react";
import SignUp from "../components/SignUp";
class NewUserApp extends React.Component {
    state={
        newUser:{
           firstName:"",
           lastName:"",
           role:"Member",
           userName:"",
           password:"" 
        }
    }
    changeUserInput=(event)=>{
      let copy={...this.state} 
       copy.newUser[event.target.name]=event.target.value
    }
    signUpButtonHandler=()=>{
        console.log(this.state.newUser)
         axios.post('/users',this.state.newUser)
         this.props.history.push('/')
    }
    render() { 
        return <div>
         <SignUp
         changeUserInput={(event)=>this.changeUserInput(event)}
         signUpButtonHandler={this.signUpButtonHandler}
         ></SignUp>

        </div>;
    }
}
 
export default NewUserApp;