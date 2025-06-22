import React from 'react'

const Greeting = ({timeofDay}) => {
 const greeting =() =>{
   return (timeofDay=="morning") ? "Good Morning!" : "Good Afternoon!";
 }
    
  return(
    <h1>{greeting()}</h1>
  )
}

export default Greeting