//https://ps-rtt-sei.herokuapp.com/15-week/mod-2/week-8/day-3/slides/
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'

function App() {
  //variable with your apiKey
  const apiKey = "edb639f7";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try{
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  }catch(e){
    console.log(e);
  }
  };
  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
     <Form moviesearch={getMovie} />
     <MovieDisplay movie={movie} />
    </div>
  );
}

export default App
