import React, {useState, useEffect} from 'react'
import Card from '../Components/Card';

const AllPosts = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async ()=> {
    const response = await fetch("http://localhost:8000");
    const result = await response.json();
    if(!response.ok)
    {
      setError(result.message);
    }
    if(response.ok)
    {
      setData(result);
    }
  };
  useEffect(()=>{
    getData();
  })

  const handleDelete = async (id)=> {
    const response = await fetch(`http://localhost:8000/${id}`, {
      method: "DELETE",
    });
    const result = response.json();

    if(!response.ok)
    {
      setError(result.message);
    }
    if(response.ok)
    {
      setError("Deleted successfully");
    }
    setTimeout(()=>{
      setError('');
      getData();
    }, 1000);
  }

  return (
    <div>
      <div className='bg-orange-400 text-center'>
        {error && <h1>{error}</h1>}
      </div>
      <h1>Showing all the data</h1>
      <div className='flex gap-3 mt-4 flex-wrap'>
        {data?.map((user)=>(
          <Card user = {user} key = {user._id} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  )
}

export default AllPosts;