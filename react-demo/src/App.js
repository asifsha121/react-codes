import { useState } from 'react';
import './App.css';
import Counter from './counter';

function App() {
  const[state,setstate]=useState(false)
  return (
    <div className="App">
      <button onClick={()=>setstate(!state)}>show or hide</button>
      {state && <Counter/>}
    </div>
  );
}

export default App;