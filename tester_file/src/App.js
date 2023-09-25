import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState([]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button
        onClick={() => {
          axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
              console.log(response.data);
              setState(response.data);
            })
        }}
      >
        Click Me
      </button>
      {state.map((obj, index) => (
        <div key={index}>
          <h1>{index}</h1>
          <h4>{obj.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;