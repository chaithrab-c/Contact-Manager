import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" className="w-100 px-0">
      <Container fluid className="px-0">
        <Navbar.Brand href="#" className='text-white'>
          <i className="fa-solid fa-phone me-2" />
          Contact List
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default NavBar;
