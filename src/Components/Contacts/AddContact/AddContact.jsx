import React, { useState } from 'react'
import Input from '../../commonui/Input';
import Button from 'react-bootstrap/Button';
import api from '../../axiosinstance';
import { NavLink, useNavigate } from 'react-router-dom'

function AddContact() {
  const navigate = useNavigate()

  const [contacts, setContacts] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    website: "",
    department: "",
    role: ""
  })

  const addData = async () => {
    await api.post("/contacts", contacts)
    navigate("/ContactList")   
  }

  return (
    <>
    <Input contacts={contacts} setContacts={setContacts} />
    <Button className='m-4 ms-5' variant="success" onClick={addData}>Save</Button>
    <NavLink to={'/ContactList'} className="btn btn-secondary m-3 ms-5"><i className="fa-solid fa-backward-step me-1"></i> Cancel</NavLink> 
    </>
  )
}

export default AddContact

