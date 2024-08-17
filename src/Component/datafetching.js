import React, { useState,useEffect } from 'react';
function Datafetching(){

    const[users,setUsers] = useState([]);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            setLoading(false);
        })
        .catch(error=>{
            console.error("Api is not Responding");
            setLoading(false);
        });
    },[]);
    if(loading){
        return <p>Loading</p>
    }
    return(
        <div>
            <h1>List Out The Users in API</h1>
            <ul>
                {
                    users.map(user=>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Datafetching;