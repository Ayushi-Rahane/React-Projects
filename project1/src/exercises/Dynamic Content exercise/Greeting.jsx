import React from 'react'

var greeting_msg = prompt("Enter the Greeting Message")
const today = new Date();

const Greeting = () => {
  return (
    <div>
        <h1>{greeting_msg}</h1>
        <p>Current Date: {today.toLocaleDateString()}</p>
    </div>
  )
}

export default Greeting