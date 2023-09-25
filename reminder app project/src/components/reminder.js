import React,{useState} from 'react'
import './Reminder.css' 
function Reminder(){
  const[Reminder,setReminder]=useState([])
  const[newReminder,setNewReminder]=useState('')

  const handlesetReminder=(event)=>{
    setNewReminder(event.target.value)
  }
  const addReminder=()=>{
    if(newReminder.trim()){
      setReminder([...Reminder,newReminder])
    }
  }
  const deletebutton=(index)=>{
    setReminder(Reminder.filter((item,itemIndex)=>itemIndex !==index))
  }
  return (
    <div className='container'> 
    <h1> Reminder app</h1>
    <div className='input-container'>
      <input 
      type='text' 
      placeholder="🖊️ Add item..." 
      onChange={handlesetReminder}/>
        <button className='add-button'
        onClick={addReminder}>Add reminder</button>
        </div>
        <ul className="newbox">
          {
            Reminder.map((Reminder,index)=>
            (
              <li key={index}>
              {Reminder}
              <button onClick={()=>deletebutton(index)}>delete</button>
              </li>

            ))
          }
          
        </ul>
    </div>
  )
}
export default Reminder;
