import { useState } from "react";
import { Lists } from "./components/List";
import "./App.css";
import { Header } from "./components/Header";
import { MovieForm } from "./components/MovieForm";
import { Search } from "./components/Search";
import { Grid } from "@mui/material";
function App() {
  const [movieList, setMovieList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [searchValue,setSearchValue]=useState("")

  const movies = (movies) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newMovie = { id, movies };
    setMoviesList([newMovie, ...moviesList]);
    setMovieList([newMovie, ...movieList]);
  };
  
  const search = (search) => {
    setSearchValue(search)

    // if (search === "") {
    //   setMovieList(moviesList);
    // } else {
    //   const filteredResults = movieList.filter((movie) => {

    //     return movie.movies.movie.toLowerCase().includes(search.toLowerCase()) ;
    //   });
    //   setMovieList([...filteredResults]);
    // }
  };
  return (
    <div>
      <Header />
      <Grid container spacing={2} sx={{ mx: 1 }}>
        <MovieForm movies={movies} />
        <Grid item lg={6}>
          <Search searches={search} />

          {movieList.length > 0 ? (
            <Lists movieList={movieList} searched={searchValue} />
          ) : (
            <h3>Please Add a movie</h3>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
