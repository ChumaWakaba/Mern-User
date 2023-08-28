import React from 'react'
import {Link} from "react-router-dom"

const Card = ({user, onDelete}) => {
    const {name, email, age, _id} = user; 
  return (
    <div className='flex-1'>
        <div className='border border-gray-500 rounded-md p-3 flex-1'>
            <h1 className='text-xl'><span>Name: </span>{name}</h1>
            <p className='text-lg'><span className='font-semibold'>Age: </span>{age}</p>
            <p className='text-lg'><span className='font-semibold'>Email: </span>{email}</p>
            <div>
                <Link to ={`/${_id}`} className='px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-800 my-4 mr-2'>Update</Link>
                <button onClick={()=>onDelete(_id)} className='px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-800 my-4'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Card