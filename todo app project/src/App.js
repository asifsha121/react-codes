import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const[todos,settodos]=useState([])
  const[todo,settodo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕<br/><br/></h2>
      </div>
      <div className="input">
        <input  onChange={(e)=>settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>settodos([...todos,{text:todo,status:false}])}   className="fas fa-plus"></i>
      </div>
      <div className="todos">
      { todos.map((value)=>{
        return(
        <div className="todo">
          <div className="left">
            <input value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="">
            <i className="fas fa-times" ></i>
          </div>
        </div>)
       } )}
      </div>
    </div>
  );
}

export default App;
