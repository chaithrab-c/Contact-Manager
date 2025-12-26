import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import api from '../../axiosinstance'

function ViewContact() {
  const {id} = useParams();
  const [user,setUser] = useState([]);
   let getUser = async ()=>{
    const res = await api.get(`/contacts/${id}`);
    setUser(res.data);
  }

  useEffect(()=>{ 
     getUser(); 
  },[id]);
  return (
    <>
    <h1 className='text-primary m-3 mb-2 ms-4'>ViewContact <i className="fa-notdog fa-solid fa-expand ms-3"></i></h1><br />
    <div className='p-4'>
      <h3>Name:{user.name}</h3>
      <h3>Phone:{user.phone}</h3>
      <h3>Email:{user.email}</h3>
      <h3>City:{user.city}</h3>
      <h3>State:{user.state}</h3>
      <h3>Website:{user.website}</h3>
      <h3>Department:{user.department}</h3>
      <h3>Role:{user.role}</h3>
    </div>
    <NavLink to={'/ContactList'} className="btn btn-secondary m-3 ms-5"><i className="fa-solid fa-backward-step me-1"></i> Back</NavLink> 
    </>
  )
}

export default ViewContact