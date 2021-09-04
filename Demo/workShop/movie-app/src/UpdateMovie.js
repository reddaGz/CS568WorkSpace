export default function UpdateMovie(props){
return(
      <div>
      <div>Name :<input type="text" value={props.movieName} onChange={props.updateMovieName}></input> </div>
      <br/>
      <div>Rating :<input type="text" value={props.movieRating} onChange={props.updateMovieRating}></input> </div>
      <br/>
      <div>Genre :<input type="text" value={props.movieGenre} onChange={props.updateMovieGenre}></input> </div>
      <div>Director name :<input type="text" value={props.directorName} onChange={props.updateMovieDirectorName}></input> </div>
      <div>Year release :<input type="text" value={props.yearRelease} onChange={props.updateMovieYearRelease}></input> </div>
      <div>Description :<input type="text" value={props.description} onChange={props.updateMovieDescription}></input> </div>
      <br/>
      <button onClick={props.replaceOldValues}>apply</button>
      </div>
)
}