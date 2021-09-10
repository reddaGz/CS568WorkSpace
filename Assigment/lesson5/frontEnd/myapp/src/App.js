import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import User from './User';
class App extends Component{
   constructor(props){
     super(props)
     console.log("App Component Constructor")
   }
   state={
     users:[{name:"Ezra",password:"1234"}],
     user:{name:""},
     show:false
   }
  
   componentDidMount(){
     console.log("App componentDidMount")
     //this.setState({user:this.state.user.name})
   }
   componentDidUpdate(){
    console.log("App componentDidUpdate")
   }
   componentWillUnmount(){
    console.log("App componentWillUnmount") 
   }
   changeName(event){
     const copy={...this.state.user}
     copy.name=event.target.value
     this.setState({user:copy})
   }
   showHide=()=>{
     this.setState({show:!this.state.show})
   }
    render(){
      console.log("App render component")
      let userDisplay=null;
      if(this.state.show){
        userDisplay=<User name={this.state.users[0].name}></User>
      }
     return (
       <div>
       <button onClick={this.showHide}>show/hide</button> 
       {
        userDisplay
       }
        
         <br/>
         <input type="text" value={this.state.user.name} onChange={(event)=>this.changeName(event)}/>
       </div>
     )
    }
  
  
}

export default App;
