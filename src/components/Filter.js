//filter movies with (title/rate)
import React,{ Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Filter(props){
//hooks use state

    const [raiting, setRaiting] = useState(1);
    const [search, setSearch] = useState("");


//functions setstate

    const onStarClick = (nextValue, prevValue, name) =>{
        setRaiting(nextValue);
        props.raiting(nextValue); 
      };
const onStarHover = (nextValue, prevValue, name)=>{
  setRaiting(nextValue);
  props.raiting(nextValue); 
}
      
      
  return(
  <>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Search : </Form.Label>
    <Form.Control type="search" placeholder="Click To Search" onChange={event => {setSearch(event.target.value)
    props.search(event.target.value)
    }} />
 
  </Form.Group>
  
</Form>

  <StarRatingComponent value={raiting} starCount={5}  name="rate1" onStarClick={onStarClick} onStarHover={onStarHover}/>
  
  </>
    );
  }
  export default Filter;