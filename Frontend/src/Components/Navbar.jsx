import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-gray-700 text-white px-8 py-2'>
        <h1 className='text-xl text-white'>MERN User</h1>
        <ul className='flex gap-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allPost">All Posts</Link></li>
            <li><Link to="/addPost">Add Post</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar