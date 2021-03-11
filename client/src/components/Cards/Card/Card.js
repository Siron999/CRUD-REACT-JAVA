import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Card.css";
import axios from 'axios';




const CardComp = (props) => {
 
  const url='http://localhost:8080/api';

  const deleteData=async(e)=>{
    e.preventDefault();
    await axios.delete(`${url}/games/${props.id}`);
    props.setGames(props.games.filter((game)=>(game.id !== props.id )));
   
};
    return (
       <div style={{ width: '290px',marginRight:'40px' ,marginLeft:'40px' ,marginBottom:"50px" }}>
 <Card  style={{ width: '290px' }}>
  <Card.Img className="imgSize" variant="top" src={props.selectedFile} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
     Price : {props.position}
    </Card.Text>
    <Card.Text>
     <Button className="mr-4" variant="dark"><Link className="card-button" to={`edit/${props.id}`}>Update</Link></Button>
     <Button className="ml-4" onClick={deleteData} variant="dark">Delete</Button>
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
        
    )
}

export default CardComp
