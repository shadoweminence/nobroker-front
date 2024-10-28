import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown"; // Import Dropdown from Bootstrap
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import the hamburger icon
import logo from "../../assets/images/title.png";
import rent from "../../assets/images/rent.png";
import property from "../../assets/images/property.png";
import flogo from "../../assets/images/flogo.png";
import tlogo from "../../assets/images/tlogo.png";
import glogo from "../../assets/images/glogo.png";

function Navb() {



  
  const [showCommercialPlans, setShowCommercialPlans] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

  const toggleCommercialPlans =(event)=>{
    event.preventDefault();
    event.stopPropagation(); 
    setShowCommercialPlans(!showCommercialPlans);
    
  }

  const toggleContactUs = (event)=>{
     event.preventDefault();
    event.stopPropagation(); 
    setShowContactUs(!showContactUs);
  }
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
            <Dropdown align="end" >
              {" "}
              {/* Aligns the dropdown items to the right */}
              <Dropdown.Toggle
                variant="link"
                id="dropdown-basic"
                className="p-0 text-black no-arrow " // Text color black and no padding
              >
                <FaBars /> Menu
              </Dropdown.Toggle>
              {/* Dropdown menu items */}
              <Dropdown.Menu  className="dropdown-menu border-1  " >
                <Dropdown.Item
                  href="#action3"
                  className="text-dark text-decoration-none"
                >
                 Post Your Property
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action4"
                  className="text-dark text-decoration-none"
                >
                  Rental Agreement
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Painting & Cleaning
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Packers and Movers
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Refer & Earn
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Rent Receipts
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                 Tenant Plans
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Owner Plans
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Buyer Plans
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Seller Plans
                </Dropdown.Item>

              <Dropdown.Item
                 
                  className="text-dark text-decoration-none " onClick={toggleCommercialPlans} style={{cursor:"pointer"}}
                >
                 Commercial Plans
                 {showCommercialPlans ?(<FaChevronUp className="ms-5"/>):(<FaChevronDown className="ms-5"/>)}

                 {showCommercialPlans && (
                 <li>
                   <ul className="custom-dropdown-ul">
                      <Nav.Link>Tenant Plan</Nav.Link>
                      <Nav.Link>Owner Plan</Nav.Link>
                      <Nav.Link>Buyer Plan</Nav.Link>
                      <Nav.Link>Seller Plans</Nav.Link>
                    </ul>
                 </li>
                )}
                </Dropdown.Item>
               
             
                
             

                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Careers
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Corporate Enquiry
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  Blog
                </Dropdown.Item>
                <Dropdown.Item
                  href="#action5"
                  className="text-dark text-decoration-none"
                >
                  No Broker Support
                </Dropdown.Item>

               

               <Dropdown.Item
                  href="#action3"
                  className="text-dark text-decoration-none " onClick={toggleContactUs} 
                >
                Contact Us 
                {showContactUs ?(<FaChevronUp className="ms-5"/>):(<FaChevronDown className="ms-5"/>)}
               

                {showContactUs && (
                  <>
                   

                   <li>
                    <ul className="custom-dropdown-ul"> Email  <br /> 
                 hello@noroker.in
                   
            
                  <div className="d-flex justify-content-center">
                    <Nav.Link> <img
                src={flogo} // Use your imported image here
                alt="Rent Icon"
                width="50" // Adjust width as needed
                height="auto" // Maintain aspect ratio
                padding="0"
              /></Nav.Link>
              
              <Nav.Link><img
                src={tlogo} // Use your imported image here
                alt="Rent Icon"
                width="50" // Adjust width as needed
                height="auto" // Maintain aspect ratio
                padding="0"
              /></Nav.Link>

              <Nav.Link>
               <img
                src={glogo} // Use your imported image here
                alt="Rent Icon"
                width="50" // Adjust width as needed
                height="auto" // Maintain aspect ratio
                padding="0"
              /></Nav.Link>
              </div>
              </ul>
              </li>


                  </>
                )}

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
