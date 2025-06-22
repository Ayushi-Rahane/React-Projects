import React from 'react'

const Whether = ({temperature}) => {
    let msg="";
  if(temperature < 15){
     msg = "It's cold outside!";
  }
  else if(temperature > 15 && temperature < 25){
    msg = "It's nice outside!";
  }
  else if(temperature > 25){
    msg = "It's hot outside!";
  }
    return (    
    <div>
     <h1>Temperature: {temperature}</h1>
     <h2>{msg}</h2>
    </div>
  )
}

export default Whether