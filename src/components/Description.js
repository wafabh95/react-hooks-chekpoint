import React from 'react'
import { Link, Route } from 'react-router-dom';
import { useState,useEffect } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import StarRatingComponent from 'react-star-rating-component';
import CardDeck from 'react-bootstrap/CardDeck'

const Description = (props) =>{
  console.log(props)
    const [ movie , setMovie ] = useState(null);
    
    useEffect(() => {
      setMovie(props.movies.filter((el) => el.id === props.match.params.id)[0] ) ;
    });
   
      return(
        
    <div>
        <CardDeck>
       { movie && (
          <Card key={movie.id}>
          <Card.Body className="card-body">
            <Card.Text>
            {movie.title}
            {movie.description}
            </Card.Text>
            <StarRatingComponent value={movie.rate} starCount={5}  name="rate1" />
            <br/>
            <button className="btn btn-primary"
                onClick={() => {props.history.goBack();}}>Go back
            </button>
          </Card.Body>
        </Card>)}
        </CardDeck>
    </div>
    )
    
}
export default Description;