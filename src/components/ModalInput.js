// add a ModalInput movie card description contains : 1 : title , 2 : description , 3 : posteUrl , 4 : rate, 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";
import { useState , useRef } from "react"
import Form from 'react-bootstrap/Form'


function Add (props){
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posteUrl, setPosteUrl] = useState("");
  const [rate, setRate] = useState("");
  const [show, setShow] = useState(false);
  const array =[];
  const arr = [...array,title,description,posteUrl,rate];
      const handleClose = () => setShow(false);
      const handleShow = () =>  setShow(true);


      const handleAdd = () => {
       
        props.addMovie({title,description,posteUrl,rate})
      };
        
  
      
 return (
   <>
      <Button variant="primary" className="add" onClick={handleShow}>
       Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Movie {arr}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
              <Form.Group>
               
                  
                <Form.Label>Title :{title}   </Form.Label>
                <Form.Control type="text" name ="title"placeholder="Enter Title"  onChange={event => setTitle(event.target.value)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description{description}</Form.Label>
                <Form.Control type="text" name="description"placeholder="Description"  onChange={event => setDescription(event.target.value)} />
              </Form.Group>
             
              <Form.Group>
                <Form.Label>posteUrl{posteUrl}</Form.Label>
                <Form.Control type="text" placeholder="posteUrl"  onChange={event => setPosteUrl(event.target.value)} />
              </Form.Group>
             

              <Form.Group>
                <Form.Label>Rate{rate}</Form.Label>
                <Form.Control type="text" placeholder="rate"  onChange={event => setRate(event.target.value)} />
              </Form.Group>
            </Form>
            
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close 
          </Button>
          <Button variant="success" onClick={handleAdd}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
   </>
 );
}

export default Add;
