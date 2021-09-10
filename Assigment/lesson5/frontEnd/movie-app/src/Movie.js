import React from "react";
import  { Component } from 'react';

 class  Movie extends Component  {
  componentWillUnmount(){
    console.log("Movie componentWillUnmount ")
  }
  render(){
    return (
      <div>
        <div>
          <div>Title: {this.props.movieName}</div>
          <div>Rating: {this.props.movieRating}</div>
          <div>Genre: {this.props.movieGenre}</div>
          <button onClick={this.props.showMovieDetail}>Movie details</button>
          <button onClick={this.props.deleteMovie}>Delete</button>
          <button onClick={this.props.updateMovie}>update</button>
          <button onClick={this.props.addToFavorite}>Add To favorite</button>
        </div>
      </div>
    );
  }
  
}
export default Movie
// React.createElement('div',{},'Hello')
