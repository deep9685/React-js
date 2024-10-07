import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         })
    // }, [])

    const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-orange-400 text-white p-4 text-3xl'>
        Github followers : {data.followers}
        <img className='rounded-full' src={data.avatar_url} alt='Git Picture' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/deep9685');
    return response.json();
}