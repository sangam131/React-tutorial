import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
   const [data,setData]=useState([]);
    // const data= useLoaderData()
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white
        p-4 text-3xl'>Github Follower: {data.followers}</div>
    //    <img src={data.avatar_url} alt="Git picture"  width={300} />
        )
}

export default Github

// export const githubInfoLoader= async()=>{
//   const response=await fetch('https://api.github.com/users/hiteshchoudhary')
//   return response.json();
// }