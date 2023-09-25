import {useState} from "React"
function App() {
  const [count,setcount]=useState(0)
  function addcount(){
    setcount(count+1)
    console.log(count);
  }
  return (
    <div className='app'>
    <button onClick={addcount}>add</button>
    <h1>counter:{count}</h1>
    </div>
  );
}

export default App;
