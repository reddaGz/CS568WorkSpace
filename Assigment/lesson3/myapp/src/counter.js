import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        counter:1
     }
     increment=()=>{   
      this.setState({counter:this.state.counter+1})
    //   this.setState({counter:this.state.counter+1})
    //   this.setState({counter:this.state.counter+1})
    //console.log(this.state.counter)
    /*
    this.setState((current)=>{
        return {counter:current.counter+1}
    })
    this.setState((current)=>{
        return {counter:current.counter+1}
    })
    this.setState((current)=>{
        return {counter:current.counter+1}
    })
*/
      console.log(this.state.counter)  
     }
    render() { 
        return ( 
            <div>
            <span>{this.state.counter}</span>
            <button onClick={this.increment}> Increment</button>    
            </div>
         );
    }
}
 
export default Counter;