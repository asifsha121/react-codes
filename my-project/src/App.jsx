import {useState} from "react"
import Counter from "./counter";
function App() {
  const [count,setcount]=useState(0)
  function addcount(){
    setcount(count+1)
    console.log(count);
  }
  return (
    <div className='app'>
    <button onClick={addcount}>add</button>
    <Counter title="1st" count1={count}/>
    <Counter title="2nd" count1={count}/>
    </div>
  );
}

export default App;