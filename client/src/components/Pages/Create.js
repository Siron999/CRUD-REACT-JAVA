import React, { useState } from 'react'
import { Container} from 'react-bootstrap';
import { useHistory } from 'react-router';
import Form from "../Form/Form"
import axios from 'axios'


const Create = () => {
    const [addData,setAddData]= useState({title:'',price:'',selectedFile:''});
    const url='http://localhost:8080/api';
    let history=useHistory();

    const addGame= async (e)=>{
        e.preventDefault();
    
      await axios.post(`${url}/games`,addData);
        
      history.push("/");
    }

    return (
        <>
          
          <Container className="d-flex flex-column justify-content-center mt-4">
              <div className="d-flex justify-content-center mb-4"><h1>Add Game</h1></div>
              
              <Form onSubmit={addGame} addData={addData} setAddData={setAddData}/>

              </Container>
         
        </>
    )
}

export default Create
