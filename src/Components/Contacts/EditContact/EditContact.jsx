
import React, { useEffect, useState } from 'react'
import Input from '../../commonui/Input'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import api from '../../axiosinstance'

function EditContact() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])

   const getContact = async () => {
      const res = await api.get(`/contacts/${id}`)
      setContacts(res.data)
    }

  useEffect(() => {
    getContact()
  }, [id])

  const updateContact = async () => {
    await api.put(`/contacts/${id}`, contacts)
    navigate('/ContactList')
  }

  return (
    <>
      <h1 className='ms-4 text-primary m-3 mb-2'>Edit Contact</h1>
      <Input contacts={contacts} setContacts={setContacts} />
      <NavLink to='/ContactList' className="btn btn-secondary m-3 ms-5"><i className="fa-solid fa-backward-step me-1"></i> Cancel</NavLink>
      <Button variant="primary" className="ms-2" onClick={updateContact}>Update</Button>
    </>
  )
}

export default EditContact
