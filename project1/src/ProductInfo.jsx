import React from 'react'

var total = prompt("Enter total no. of products: ")
var Name=[]
var price = []
var Avail = []

for(let i=0;i<total;i++){
    Name.push( prompt("Enter the name of Product: "))
    price.push( prompt("Enter the Price: "))
    Avail.push( prompt("Enter Availability (In stock / Not In stock"))
}
const ProductInfo = () => {
  return (
    <div>
        <h2>ProductInfo:</h2>
        {
            Name.map((_,i) =>(
           <ul key={i}>
                <li>Name: {Name[i]}</li>
                <li>Price: {price[i]}</li>
                <li>Availability: {Avail[i]}</li>
           </ul>
            ))
        }

    </div>
  )
}

export default ProductInfo