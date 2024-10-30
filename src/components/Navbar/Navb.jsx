import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown"; // Import Dropdown from Bootstrap
import {
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa"; // Import the hamburger icon
import logo from "../../assets/images/title.png";
import rent from "../../assets/images/rent.png";
import property from "../../assets/images/property.png";
import flogo from "../../assets/images/flogo.png";
import tlogo from "../../assets/images/tlogo.png";
import glogo from "../../assets/images/glogo.png";
import neww from "../../assets/images/neww.png";
import house from "../../assets/images/house.png";

function Navb() {
  const [user, setUser] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [showResidentialPlans, setShowResidentialPlans] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showListing, setShowListing] = useState(false);

  const [showCommercialPlans, setShowCommercialPlans] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

  const toggleShowUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  const toggleResidentialPlans = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowResidentialPlans(!showResidentialPlans);
  };

  const toggleDashboard = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowDashboard(!showDashboard);
  };

  const toggleListing = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowListing(!showListing);
  };

  const toggleCommercialPlans = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowCommercialPlans(!showCommercialPlans);
  };

  const toggleContactUs = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowContactUs(!showContactUs);
  };
  return (
    <Navbar user={user} expand="lg" className="bg-body-tertiary " sticky="top">
      <Container fluid>
        {/* Image as Navbar Brand */}
        <Navbar.Brand href="#">
          <img
            src={logo} // Use your imported image here
            alt="Brand Logo"
            width="160" // Adjust width as needed
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 d-none d-lg-flex">
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

            {user ? (
              <>
                <Nav.Link href="#action2">
                  <img
                    src={neww} // Use your imported image here
                    alt="Property Icon"
                    width="40" // Adjust width as needed
                    height="auto" // Maintain aspect ratio
                  />
                </Nav.Link>
                <Dropdown align="end" onToggle={toggleShowUserOptions}>
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-basic"
                    className="p-0 text-black no-arrow " // Text color black and no padding
                  >
                    <span className="d-flex align-items-center">
                      <i class="fa-regular fa-circle-user"></i> {user.name}{" "}
                      {showUserOptions ? (
                        <FaChevronUp className="ms-1" />
                      ) : (
                        <FaChevronDown className="ms-1" />
                      )}
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu border-1">
                    <Dropdown.Item
                      href="#action3"
                      className="text-dark text-decoration-none"
                    >
                      Profile
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="#action3"
                      className="text-dark text-decoration-none"
                    >
                      My Chats
                    </Dropdown.Item>

                    <Dropdown.Item
                      className="text-dark text-decoration-none "
                      onClick={toggleResidentialPlans}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="d-flex align-items-center">
                        My Residential Plans
                        {showResidentialPlans ? (
                          <FaChevronUp className="ms-5" />
                        ) : (
                          <FaChevronDown className="ms-5" />
                        )}
                      </span>

                      {showResidentialPlans && (
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
                      className="text-dark text-decoration-none "
                      onClick={toggleCommercialPlans}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="d-flex align-items-center">
                        My Commercial Plan
                        {showCommercialPlans ? (
                          <FaChevronUp className="ms-5" />
                        ) : (
                          <FaChevronDown className="ms-5" />
                        )}
                      </span>

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
                      className="text-dark text-decoration-none "
                      onClick={toggleDashboard}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="d-flex align-items-center">
                        My Dashboard
                        {showDashboard ? (
                          <FaChevronUp className="ms-5" />
                        ) : (
                          <FaChevronDown className="ms-5" />
                        )}
                      </span>

                      {showDashboard && (
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
                      className="text-dark text-decoration-none "
                      onClick={toggleListing}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="d-flex align-items-center">
                        My Listing
                        {showListing ? (
                          <FaChevronUp className="ms-5" />
                        ) : (
                          <FaChevronDown className="ms-5" />
                        )}
                      </span>

                      {showListing && (
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
                      href="#action3"
                      className="text-dark text-decoration-none"
                    >
                      My Rental Adreements
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="#action3"
                      className="text-dark text-decoration-none"
                    >
                      Sign Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="#" disabled>
                  |
                </Nav.Link>
                <Nav.Link href="#">
                  <i class="fa-solid fa-bell"></i>
                </Nav.Link>

                <Nav.Link href="#" disabled>
                  |
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#signup">Sign Up</Nav.Link>
                <Nav.Link href="#" disabled>
                  |
                </Nav.Link>
                <Nav.Link href="#login">Log In</Nav.Link>
                <Nav.Link href="#" disabled>
                  |
                </Nav.Link>
              </>
            )}

            {/* Dropdown Menu with Hamburger Icon */}
            <Dropdown align="end">
              {" "}
              {/* Aligns the dropdown items to the right */}
              <Dropdown.Toggle
                variant="link"
                id="dropdown-basic"
                className="p-0 text-black no-arrow " // Text color black and no padding
              >
                <span className="d-flex align-items-center">
                  <FaBars /> Menu{" "}
                </span>
              </Dropdown.Toggle>
              {/* Dropdown menu items */}
              <Dropdown.Menu className="dropdown-menu border-1  ">
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
                  className="text-dark text-decoration-none "
                  onClick={toggleCommercialPlans}
                  style={{ cursor: "pointer" }}
                >
                  <span className="d-flex align-items-center">
                    Commercial Plans
                    {showCommercialPlans ? (
                      <FaChevronUp className="ms-5" />
                    ) : (
                      <FaChevronDown className="ms-5" />
                    )}
                  </span>

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
                  className="text-dark text-decoration-none "
                  onClick={toggleContactUs}
                >
                  <span className="d-flex align-items-center">
                    Contact Us
                    {showContactUs ? (
                      <FaChevronUp className="ms-5" />
                    ) : (
                      <FaChevronDown className="ms-5" />
                    )}
                  </span>

                  {showContactUs && (
                    <>
                      <li>
                        <ul className="custom-dropdown-ul">
                          {" "}
                          Email <br />
                          hello@noroker.in
                          <div className="d-flex justify-content-center">
                            <Nav.Link>
                              {" "}
                              <img
                                src={flogo} // Use your imported image here
                                alt="Rent Icon"
                                width="50" // Adjust width as needed
                                height="auto" // Maintain aspect ratio
                                padding="0"
                              />
                            </Nav.Link>

                            <Nav.Link>
                              <img
                                src={tlogo} // Use your imported image here
                                alt="Rent Icon"
                                width="50" // Adjust width as needed
                                height="auto" // Maintain aspect ratio
                                padding="0"
                              />
                            </Nav.Link>

                            <Nav.Link>
                              <img
                                src={glogo} // Use your imported image here
                                alt="Rent Icon"
                                width="50" // Adjust width as needed
                                height="auto" // Maintain aspect ratio
                                padding="0"
                              />
                            </Nav.Link>
                          </div>
                        </ul>
                      </li>
                    </>
                  )}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="me-auto d-lg-none">
            <div
              className="container-fluid "
              style={{ backgroundColor: "red" }}
            >
              <Nav.Link href="#home" style={{ color: "white" }}>
                <i class="fa-regular fa-circle-user mx-2"></i>Login/Sign Up{" "}
                <FaChevronRight className="ms-5" />
                <br />
                <br />
              </Nav.Link>

              <Nav.Link
                href="#login"
                style={{ backgroundColor: "white", fontSize: "0.8rem" }}
              >
                <img src={house} alt="HOuse Icon" width="40" height="auto" />{" "}
                Post your property{" "}
                <span
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "0 5px",
                  }}
                >
                  {" "}
                  FREE
                </span>{" "}
                <FaChevronRight />
              </Nav.Link>
              <br />
            </div>
            <div>
              {" "}
              Because <span style={{ color: "green" }}> Your Home</span>
              <br /> Deserves The Best.
            </div>

            <Nav.Link href="#signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
