import React, { useEffect } from 'react'
import api from '../../axiosinstance'
import { useNavigate, useParams } from 'react-router-dom';
function DeleteContact() {
  const {id} = useParams();
  const navigate = useNavigate();
  const deleteContact = async () => {
      const confirmdel = window.confirm("Do you really want to delete this contact ?");
      if(confirmdel){
      await api.delete(`/contacts/${id}`)
      alert("Contact Deleted Succesfully...")
      navigate('/ContactList')
    }
    else{
      navigate('/ContactList')
    }
    }
    
  useEffect(() => { 
    deleteContact()
  }, [id,navigate])
  return (
    <>
    <h1>Contact Deleted...</h1>
    </>
  )
}

export default DeleteContact