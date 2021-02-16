import './App.css';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/ModalInput';
import ListMovies from './components/MovieList'
import Filter from './components/Filter'


class App extends React.Component  {
 
  state={
    movies:[
      {
      key : "1",
      title: "Christimas",
      description: "After a barnfire leaves a little boy mute, Santa gives him a calf for Christmas,who has a secret desire to fly like Santa’s reindeer, and their friendship shows what it really means to love.",
      posterUrl :  process.env.PUBLIC_URL + '/assets/images/christimas.jpg',
      rate : "5"
    },

    {key : "2",
      title: "Harry Pooter",
      description: "  Harry Potter is a film series based on the eponymous novels by J. K. Rowling. The series is distributed by Warner Bros. and consists of eight fantasy films, beginning with Harry Potter and the Philosopher's Stone (2001) and culminating with Harry Potter and the Deathly Hallows – Part 2 (2011)",
      posterUrl :  process.env.PUBLIC_URL + '/assets/images/harrypooter.jpg',
      rate : "3"
    },
    {key : "3",
      title: "Jumanji",
      description: "After discovering an old console containing a video game they had never heard of, four young people find themselves mysteriously propelled into the heart of the Jumanji jungle, in the body of their avatars. They quickly discover that you don't play Jumanji, but the game plays with you. To return to the real world, they will have to face the worst dangers and triumph over the ultimate adventure. Otherwise, they'll be locked into the game forever.",
      posterUrl :   process.env.PUBLIC_URL + '/assets/images/Jumanji.jpg',
      rate : "2"
    }
  ],
  }

addMovie = (newMovie)=>{
      this.setState({
      movies : this.state.movies.concat(newMovie)
    })
  }

  
  render(){
  return (
  <div className="App-header">
   <ListMovies movies={this.state.movies} />
   <Add addMovie = {(newMovie)=>this.addMovie(newMovie)}/>
  </div>
  );
};
}

export default App;
