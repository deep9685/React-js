import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams();
  return (
    <div className='bg-orange-500 font-bold text-3xl text-white p-4'>
        User : {userId}
    </div>
  )
}

export default User