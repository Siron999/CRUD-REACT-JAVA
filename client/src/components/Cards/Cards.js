import React, { useState,useEffect } from 'react'
import { CardDeck } from 'react-bootstrap';
import CardComp from './Card/Card';
import axios from 'axios'

const Cards = () => {
    const [games,setGames]= useState([
        // {id:1, name:"John" ,price:"CEO", selectedFile:"/images/2.jpg"},
        // {id:2, name:"Tim" ,price:"CEO", selectedFile:"/images/1.jpeg"},
        // {id:3, name:"Bill" ,price:"CEO", selectedFile:"/images/3.jpg"},
        // {id:4, name:"Bill" ,price:"CEO", selectedFile:"/images/3.jpg"},
        // {id:5, name:"Bill" ,price:"CEO", selectedFile:"/images/3.jpg"},
        // {id:6, name:"Bill" ,price:"CEO", selectedFile:"/images/3.jpg"}



    ]);
   
    const url='http://localhost:8080/api';
    
        const getData=async()=>{
            const {data} =await axios.get(`${url}/games`);
            console.log(data);
            setGames(data);
        
        };

        

       
    

    useEffect(() => {
        getData();
    }, [])

    return (
        <>

    <CardDeck className="justify-content-start">
        {/* <CardComp name="Tim" position="Web Developer" image="/images/1.jpeg"/>
        <CardComp name="John" position="CEO" image="/images/2.jpg"/>
        <CardComp name="Bill" position="HR Manager" image="/images/3.jpg"/>
        <CardComp name="Tim" position="Web Developer" image="/images/1.jpeg"/>
        <CardComp name="John" position="CEO" image="/images/2.jpg"/>
        <CardComp name="Bill" position="HR Manager" image="/images/3.jpg"/> */}

        {games.map((game)=>(
            <CardComp key={game.id} id={game.id} name={game.title} position={game.price} selectedFile={game.selectedFile} setGames={setGames} games={games}/>

        ))}

     </CardDeck>
        </>
    )
}

export default Cards
