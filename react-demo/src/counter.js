import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Counter() {
    useEffect(()=>{
    console.log('mounting...');
return ()=>{
    console.log('unmounting...');
  }
},[])
    const[count,setcount]=useState(0)
    return(
    <div>
        <button onClick={()=>setcount(count+1)}> increment </button>
       <h1> hello im the component:{count} </h1>
    </div>
  )
}
export default Counter;
