import React,{useState,useEffect} from 'react';

function Main(){

  const[count,setCount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count=>count+1)
    },1000)
  })


  return(
    <h1>
      The Live Count is {count}
    </h1>
  )
  
}
export default Main;