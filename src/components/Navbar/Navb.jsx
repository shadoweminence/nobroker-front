import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown"; // Import Dropdown from Bootstrap
import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import logo from "./title.png";
import rent from "./rent.png";
import property from "./property.png";

function Navb() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        {/* Image as Navbar Brand */}
        <Navbar.Brand href="#">
          <img
            src={logo} // Use your imported image here
            alt="Brand Logo"
            width="160" // Adjust width as needed
            height="auto" // Maintain aspect ratio
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link href="#action1">
              <img
                src={rent} // Use your imported image here
                alt="Rent Icon"
                width="110" // Adjust width as needed
                height="auto" // Maintain aspect ratio
              />
            </Nav.Link>
            <Nav.Link href="#action2">
              <img
                src={property} // Use your imported image here
                alt="Property Icon"
                width="140" // Adjust width as needed
                height="auto" // Maintain aspect ratio
              />
            </Nav.Link>
            <Nav.Link href="#signup" disabled>
              Sign Up
            </Nav.Link>
            <Nav.Link href="#login" disabled>
              Login
            </Nav.Link>

            {/* Dropdown Menu with Hamburger Icon */}
            <Dropdown align="end">
              {" "}
              {/* Aligns the dropdown items to the right */}
              <Dropdown.Toggle
                variant="link"
                id="dropdown-basic"
                className="p-0 text-black" // Text color black and no padding
              >
                <FaBars /> Menu
              </Dropdown.Toggle>
              {/* Dropdown menu items */}
              <Dropdown.Menu className="border-0">
                <Dropdown.Item
                  href="#action3"
                  className="text-dark text-decoration-none"
                >
                  Menu Item 1
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action4"
                  className="text-dark text-decoration-none"
                >
                  Menu Item 2
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Menu Item 3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
