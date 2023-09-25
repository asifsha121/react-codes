import axios from 'axios';
import './App.css';
import React,{useState} from 'react';

function App() {
  const[state,setState] =useState([])
  return (
    <div className="App">
      <h1> helow world</h1>
      <button onClick={()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        console.log(response.data);
        setState(response.data);
      });
      }}> click me </button>
      {state.map((obj,index)=>{
      return(
        <div key={index}>
          <h1>{index}</h1>
          <h4>{obj.title}</h4>
        </div>
      )})}
       </div>
  );
}

export default App;

