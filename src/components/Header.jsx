import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
 
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand as={NavLink} to="/"><img
              alt=""
              src="ponos.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}GigaByteHub</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/">головна</Nav.Link>
                  <Nav.Link as={NavLink} to="/pc">збірки</Nav.Link>
                  <NavDropdown title="контакти" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/matb">менеджер</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/viduha'>
                      збірщик
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/proz'>касири(!)</NavDropdown.Item>
                    <NavDropdown.Divider />
                
              
                
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }
      
      

