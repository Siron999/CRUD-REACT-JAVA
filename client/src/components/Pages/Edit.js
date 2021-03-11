import React,{useState,useEffect} from 'react'
import { Container} from 'react-bootstrap';
import Form from "../Form/Form"
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {useHistory} from 'react-router'
 

const Edit = () => {
    let history= useHistory();
    const [editData,setEditData]= useState({id:'' , title:'',price:'',selectedFile:''});
    const url='http://localhost:8080';

    const { id } = useParams();

    const loadData=async()=>{
        const {data} =await axios.get(`${url}/api/games/${id}`);
        setEditData(data);
    };

    useEffect(() => {
        loadData();
    }, [])

    const editGame=async (e)=>{
        e.preventDefault();
        await axios.put(`${url}/api/games/`,editData) ;
        history.push("/");
    }

    return (
        <>
          
          <Container className="d-flex flex-column justify-content-center mt-4">
              <div className="d-flex justify-content-center mb-4"><h1>Edit Game</h1></div>
              
              <Form onSubmit={editGame} addData={editData} setAddData={setEditData}/>

              </Container>
         
        </>
    )
}

export default Edit
