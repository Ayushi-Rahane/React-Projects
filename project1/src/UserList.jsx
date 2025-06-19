import React from 'react'
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];

const UserList = () => {
  return (
    <div>UserList
       {
        users.map(({id,name,age}) =>(
             <ul key={id}>
                <li>Name: {name} Age: {age}</li>
             </ul>
        ))
       }
    </div>
  )
}

export default UserList