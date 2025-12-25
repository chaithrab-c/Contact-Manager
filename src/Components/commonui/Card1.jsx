import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import contactlogo from '../../assets/contact-logo.avif'

function Card1({user}) {
  return (
    <>

    <Card style={{ width: '21rem', margin:'2px' }}>
      <Card.Img variant="top" className="mx-auto d-block w-50 h-50" src={contactlogo} />
      <Card.Body>
        <h2>Name:{user.name}</h2>
        <h2>Phone:{user.phone}</h2> <br />
        <NavLink to={`/ViewContact/${user.id}`} className="btn btn-warning ms-2"><i className='fa-regular fa-eye me-1'/>View</NavLink>
        <NavLink to={`/EditContact/${user.id}`} className="btn btn-info ms-2"><i className='fa-solid fa-pen me-1'/>Edit</NavLink>
        <NavLink to={`/DeleteContact/${user.id}`} className="btn btn-danger ms-2"><i className='fa-solid fa-trash me-1'/> Delete</NavLink>
      </Card.Body>
    </Card>

    </>
  )
}

export default Card1