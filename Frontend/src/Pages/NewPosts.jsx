import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPosts = () => {
  const navigate = useNavigate();
  const[userData, setUserData] = useState({
    name:'',
    email:'',
    age:'',
  });

  const [error, setError] = useState();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const result = await response.json();

    if (!response.ok)
    {
      console.log(response.message);
      setError(result.message);
    }
    if(response.ok)
    {
      console.log(result);
      setError("Data added")
      setTimeout(()=>{
        setError('')
      },1000);
      setUserData({
        name:'',
        email:'',
        age:''
      });
      navigate('/allPost');
    }
  };
  return (
    <div>
      <div className='bg-orange-400'>{error && <h1>{error}</h1>}</div>
      <h1 className='text-center text-2xl'>Add New User</h1>
      <form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='block font-medium text-gray-800'>
            Name: 
          </label>
          <input type='text' id='name' name='name' value={userData.name} onChange={handleChange} className='mt-1 p-2 border border-gray-500 rounded w-full'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='block font-medium text-gray-800'>
            Email: 
          </label>
          <input type='email' id='email' name='email' value={userData.email} onChange={handleChange} className='mt-1 p-2 border border-gray-500 rounded w-full'/>
        </div>
        <div className='mb-3'>
          <label htmlFor='age' className='block font-medium text-gray-800'>
            Age: 
          </label>
          <input type='text' id='age' name='age' value={userData.age} onChange={handleChange} className='mt-1 p-2 border border-gray-500 rounded w-full'/>
        </div>
        <div className='text-center'>
          <button type='submit' className='px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-800'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NewPosts