import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
function Navigation() {
  const [categories, setCategories] = useState([]);


  useEffect( () => {
    axios.get("http://localhost:4002/user/categories/all").then( (res) => {
        setCategories(res.data);
    })
  }, [])

  return (
  <>
  <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-auto gap-4">
            <Nav.Link to="/" as={Link} >Home</Nav.Link>
           {
            categories.map( (cat) => {
              return <Nav.Link as={Link} to={`/${cat.name}`}>{cat.name}</Nav.Link>
            })
           }
          </Nav>
        </Container>
      </Navbar>






  </>
  )
}

export default Navigation