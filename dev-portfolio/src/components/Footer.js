import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar bg="primary" expand="lg" fixed='button'>
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center">
          <Nav.Link href="#home">Linkedin</Nav.Link>
          <Nav.Link href="#link">Github</Nav.Link>
          <Nav.Link href="#home">Resume</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Footer