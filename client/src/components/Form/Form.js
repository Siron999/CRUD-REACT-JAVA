import React from 'react'
import {  Form, Button} from 'react-bootstrap';
import FileBase from 'react-file-base64'
import "./Form.css"

const FormComp = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" placeholder="Title" value={props.addData.title} onChange={(e)=>(props.setAddData({...props.addData,title:e.target.value}))}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Price:</Form.Label>
          <Form.Control type="text" placeholder="Price" value={props.addData.price} onChange={(e)=>(props.setAddData({...props.addData,price:e.target.value}))}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Selected File:</Form.Label>
          <FileBase name="selectedFile" value={props.addData.selectedFile} onDone={({base64})=>(props.setAddData({...props.addData,selectedFile: base64}))}/>
        </Form.Group>
        <Button className="" variant="dark" type="submit" >Submit</Button>     
</Form>
    )
}

export default FormComp
