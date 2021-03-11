import axios from "axios";

const url="localhost:5000/games";

export const addGame=(newPost)=>axios.post(url,newPost);

export const getGames=()=>axios.get(url);


export const updateGame=(id,updatedPost)=> axios.patch(`${url}/${id}`,updatedPost);

export const deleteGame=(id)=> axios.delete(`${url}/${id}`);