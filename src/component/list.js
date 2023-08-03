import MovieCard from "./moviecards";
import data from "./moviedata";
import { useState } from "react";
import AddMovie from "./add";


 function MoviesList() {

  const [movies, setMovies] = useState(data);
  return (
    <>
    <h1 className="header" style={{textAlign:"center"}}> movies</h1>

  <div className=" filter">  
     <button 
        onClick={() => {
          const sortedMovies = [...movies];
          sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
          setMovies(sortedMovies);
        }}
      >
        filter by title
      </button>

      <button  
        onClick={() => {
          const sortedMovies = [...movies];
          sortedMovies.sort((a, b) => b.rating - a.rating);
          setMovies(sortedMovies);
        }}> 

  filter by rating 
      </button>
      <button onClick={() => setMovies(data)}>remove all filters</button>
      
       </div>
      <div className="movieList">
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))} 
        
      </div>

<div className="div">
<h1>Add Movie</h1>
      <AddMovie  movies={movies} setMovies={setMovies} />         
</div>
    </>
  );


}
export default MoviesList;