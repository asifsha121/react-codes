import React,{useEffect,useState} from 'react'
import axios from "../axios"
import './RowPost.css'
import {imageUrl} from '../../constants/constants'
function RowPost(props) {
    const [Rpost, setRpost] = useState([])
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setRpost(response.data.results)
        })
        .catch(err=>{ 
        //    alert("Network error")
        }) 
    }, [])
    return (
        <div className='row'>
        <p className='title1'>{props.title}</p>
            <div className='posters'>
                {Rpost.map((opp)=>
                
                <img className={props.size ? 'smallposter':'poster'} alt='poster' src={`${imageUrl+opp.backdrop_path}`} />    )}
            </div>
        </div>
    )
}

export default RowPost