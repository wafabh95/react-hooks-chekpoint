import './App.css';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/ModalInput';
import ListMovies from './components/MovieList'
import Filter from './components/Filter'
import Description from "./components/Description";
import { useState } from "react"
import {BrowserRouter,Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const App = ()=>{
  const [movies , setMovies] = useState([
    {
    id : uuidv4(),
    title: "Christimas",
    description: "After a barnfire leaves a little boy mute, Santa gives him a calf for Christmas,who has a secret desire to fly like Santa’s reindeer, and their friendship shows what it really means to love.",
    posterUrl :  process.env.PUBLIC_URL + '/assets/images/christimas.jpg',
    rate : "5"
  },
  {
    id : uuidv4(),
    title: "Harry Pooter",
    description: "  Harry Potter is a film series based on the eponymous novels by J. K. Rowling. The series is distributed by Warner Bros. and consists of eight fantasy films, beginning with Harry Potter and the Philosopher's Stone (2001) and culminating with Harry Potter and the Deathly Hallows – Part 2 (2011)",
    posterUrl :  process.env.PUBLIC_URL + '/assets/images/harrypooter.jpg',
    rate : "3"
  },
  {
    id : uuidv4(),
    title: "Jumanji",
    description: "After discovering an old console containing a video game they had never heard of, four young people find themselves mysteriously propelled into the heart of the Jumanji jungle, in the body of their avatars. They quickly discover that you don't play Jumanji, but the game plays with you. To return to the real world, they will have to face the worst dangers and triumph over the ultimate adventure. Otherwise, they'll be locked into the game forever.",
    posterUrl :   process.env.PUBLIC_URL + '/assets/images/Jumanji.jpg',
    rate : "2"
  }
]);
const addMovie = (newMovie)=>{
      setMovies(movies.concat(newMovie))
  }
  
  return (
    <BrowserRouter>
  <div className="App-header">
   <ListMovies movies= {movies }/>
   <Add addMovie = {(newMovie)=>addMovie(newMovie)}/>
  </div>
     <Route path="/movie/:id" render={(props) => <Description {...props} movies={movies} />}/> 
  </BrowserRouter>
  );

}

export default App;
