import React, { Component } from 'react';
class LastName extends Component {
    render() { 
        return ( 
          <div>
            <p>Last name: {this.props.lName}</p>  
            <p>{this.props.children}</p>
          </div>
         );
    }
}
 
export default LastName;