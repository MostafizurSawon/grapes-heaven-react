import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const icon = <FontAwesomeIcon icon={faSeedling} />
    return (
        <div>
          <Navbar fixed="top" bg="light" expand="lg">
              <Container>
                  <Navbar.Brand>
                      <NavLink className="custom text-success" to="/">{icon} Grapes Heaven</NavLink></Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                  <nav>
                  <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
                          <Nav.Link>
                              <NavLink className="custom" activeClassName="activeStyle" to="/home">
                                  Home
                              </NavLink>
                              <NavLink className="custom" activeClassName="activeStyle" to="/services">Services
                              </NavLink>
                              <NavLink className="custom" activeClassName="activeStyle" to="/success">Success Story
                              </NavLink>
                              <NavLink className="custom" activeClassName="activeStyle" to="/about">About
                              </NavLink>
                          </Nav.Link>
                      </Nav>
                  </nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    );
};

export default Header;