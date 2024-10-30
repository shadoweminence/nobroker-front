import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown"; // Import Dropdown from Bootstrap
import { FaBars, FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa"; // Import the hamburger icon
import logo from "../../assets/images/title.png";
import rent from "../../assets/images/rent.png";

import flogo from "../../assets/images/flogo.png";
import tlogo from "../../assets/images/tlogo.png";
import glogo from "../../assets/images/glogo.png";
import neww from "../../assets/images/neww.png";
import house from "../../assets/small_nav_images/house.png";
import userss from "../../assets/small_nav_images/userss.png";
import painting from "../../assets/small_nav_images/painting.png";
import packers from "../../assets/small_nav_images/packers.png";
import homeCleaning from "../../assets/small_nav_images/homeCleaning.png";
import acRepair from "../../assets/small_nav_images/acRepair.png";
import electrician from "../../assets/small_nav_images/electrician.png";
import carpentry from "../../assets/small_nav_images/carpentry.png";
import plumbing from "../../assets/small_nav_images/plumbing.png";
import homeRenovation from "../../assets/small_nav_images/homeRenovation.png";

function Navb() {
 const [user, setUser] = useState(false);
 const [showUserOptions, setShowUserOptions] = useState(false);
const [showResidentialPlans, setShowResidentialPlans] = useState(false);
const [showDashboard, setShowDashboard] = useState(false);
const [showListing, setShowListing] = useState(false);
  
  const [showCommercialPlans, setShowCommercialPlans] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showWallet,setShowWallet] = useState(false);
  const [showSmallResidentialPlans, setShowSmallResidentialPlans] = useState(false);
  const [showSmallCommercialPlans, setShowSmallCommercialPlans] = useState(false);
  const [showHomeServices, setshowHomeServices] = useState(false);
const [showNoBrokerPay, setshowNoBrokerPay] = useState(false);
const [showLegal, setShowLegal] = useState(false);
const [showUtilities, setShowUtilities] = useState(false);
const [showHelp, setShowHelp] = useState(false);

  const toggleServices = ()=>{
    setShowServices(!showServices);
  }


  const toggleShowUserOptions =()=>{
    setShowUserOptions(!showUserOptions);
    
  }

const toggleResidentialPlans =(event)=>{
    event.preventDefault();
    event.stopPropagation(); 
    setShowResidentialPlans(!showResidentialPlans);
    
  }

  const toggleDashboard =(event)=>{
    event.preventDefault();
    event.stopPropagation(); 
    setShowDashboard(!showDashboard);
    
  }

  const toggleListing =(event)=>{
    event.preventDefault();
    event.stopPropagation(); 
    setShowListing(!showListing);
    
  }

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

  const handleWalletToggle = ()=>{
    setShowWallet(!showWallet);
  }

  const handleResidentialToggle = ()=>{
    setShowSmallResidentialPlans(!showSmallResidentialPlans);
  }
const handleCommercialToggle = ()=>{
  setShowSmallCommercialPlans(!showSmallCommercialPlans);
}
const handleHomeToggle =()=>{
  setshowHomeServices(!showHomeServices);
}
const handleNoBrokerToggle = ()=>{
  setshowNoBrokerPay(!showNoBrokerPay);
}
const handleLegalToggle =()=>{
setShowLegal(!showLegal);
}
const handleUtilitiesToggle =()=>{
  setShowUtilities(!showUtilities);
}
const handleHelpToggle = ()=>{
  setShowHelp(!showHelp);
}

useEffect(() => {
    const nav = document.getElementById('navContainer');
    nav.classList.add('slide-in');
  }, []);

  return (
    <Navbar user={user} expand="lg" className="bg-body-tertiary " fixed="top"  >
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
          <Nav className="ms-auto my-2 my-lg-0 d-none d-lg-flex" style={{fontSize:"0.8rem"}}>
            <Nav.Link href="#action1" >
              
                 <span className="d-flex align-items-center border p-1"> <img 
            src={rent} // Use your imported image here
            alt="Brand Logo"
            width="30" // Adjust width as needed
        
          /> | Pay Rent</span>
                 
              
            </Nav.Link>
            <Nav.Link href="#action2">
             <button className="nav-property">
              For Property Owners
             </button>
            </Nav.Link>

            {user ?(
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
              <i class="fa-regular fa-circle-user"  ></i> {user.name}  {showUserOptions ?(<FaChevronUp className="ms-1"/>):(<FaChevronDown className="ms-1"/>)}
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
                  className="text-dark text-decoration-none " onClick={toggleResidentialPlans} style={{cursor:"pointer"}}
                >
                  <span className="d-flex align-items-center">
                 My Residential Plans
                 {showResidentialPlans ?(<FaChevronUp className="ms-5"/>):(<FaChevronDown className="ms-5"/>)}
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
                  className="text-dark text-decoration-none " onClick={toggleCommercialPlans} style={{cursor:"pointer"}}
                >
                  <span className="d-flex align-items-center">
                  My Commercial Plan
                 {showCommercialPlans ?(<FaChevronUp className="ms-5"/>):(<FaChevronDown className="ms-5"/>)}
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
                 
                  className="text-dark text-decoration-none " onClick={toggleDashboard} style={{cursor:"pointer"}}
                >

                  <span className="d-flex align-items-center">
                 My Dashboard
                 {showDashboard ?(<FaChevronUp className="ms-5"/>):(<FaChevronDown className="ms-5"/>)}
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
                 
                  className="text-dark text-decoration-none " onClick={toggleListing} style={{cursor:"pointer"}}
                >
                  <span className="d-flex align-items-center">
                 My Listing
                 {showListing ?(<FaChevronUp className="ms-5"/>):(<FaChevronDown className="ms-5"/>)}
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
                <Nav.Link href="#" disabled >
              |
            </Nav.Link>
              <Nav.Link href="#" >
              <i class="fa-solid fa-bell"></i>
            </Nav.Link>

            <Nav.Link href="#" disabled >
              |
            </Nav.Link>
                </>

            
            ):(
              <>
               <Nav.Link href="#signup" >
              Sign Up
            </Nav.Link>
            <Nav.Link href="#" disabled >
              |
            </Nav.Link>
            <Nav.Link href="#login" >
             Log In
            </Nav.Link>
             <Nav.Link href="#" disabled >
              |
            </Nav.Link></>
            )}
           

            {/* Dropdown Menu with Hamburger Icon */}
            <Dropdown align="end" >
              {" "}
              {/* Aligns the dropdown items to the right */}
              <Dropdown.Toggle
                variant="link"
                id="dropdown-basic"
                className="p-0 text-black no-arrow " // Text color black and no padding
              >
                 <span className="d-flex align-items-center"><FaBars /> Menu </span>
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
                  <span className="d-flex align-items-center">
                 Commercial Plans
                 {showCommercialPlans ?(<FaChevronUp className="ms-5"/>):(<FaChevronDown className="ms-5"/>)}
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
                  className="text-dark text-decoration-none " onClick={toggleContactUs} 
                >
                  <span className="d-flex align-items-center">
                Contact Us 
                {showContactUs ?(<FaChevronUp className="ms-5"/>):(<FaChevronDown className="ms-5"/>)}
               </span>

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
          </Nav >

           <div id="navContainer" className="nav-container">
            <Nav className="me-auto d-lg-none" style={{fontSize:"0.9rem"}}>
  <div className="container-fluid" style={{ backgroundColor: 'red', fontSize:"1.2rem ",padding:"5px" }}>
    <Nav.Link href="#home" style={{ color: "white" }} className="d-flex justify-content-between ">
      <span style={{marginBottom:"10px"}}>
        <i className="fa-regular fa-circle-user mx-2"></i>Login/Sign Up
      </span>
      <FaChevronRight />
    </Nav.Link>

    <Nav.Link
  href="#login"
  style={{ backgroundColor: "white", fontSize: "0.8rem" ,marginLeft:"5px"}}
  className="d-flex justify-content-between align-items-center border rounded" 
>
  <div className="d-flex align-items-center">
    <img src={house} alt="House Icon" width="40" height="auto" style={{ marginRight: '8px' }} />
    <span>
      Post your property
      <span  style={{ backgroundColor: "black", color: "white", padding: "0 5px", marginLeft: '5px' }}>
        FREE
      </span>
    </span>
  </div>
  <FaChevronRight />
</Nav.Link>

    <br />
  </div>
<div className="d-flex justify-content-between align-items-center my-3 mx-3">
  <span style={{fontSize:"1.2rem"}}>
    Because <span style={{ color: "green" }}> Your Home</span><br /> Deserves The Best.
  </span>
 <div className="d-flex justify-content-between align-items-center">
 
  <div className="text-end">
    <div className="d-flex flex-column align-items-end">
      <img src={userss} alt="Users Icon" width="30" height="auto" />
      <div className="text-right text-end" style={{fontSize:"0.6rem"}}>
        <b>3Lacs+</b> Services <br />
        booked in <b>last 3 months</b>
      </div>
    </div>
  </div>
</div>

</div>
 <div>
      <div className="d-flex align-items-center gap-5 mx-5" style={{ fontSize: "0.8rem" }}>
        <Nav.Link href="#" className="d-flex flex-column align-items-center gap-2 mx-4">
          <img src={painting} alt="Painting Icon" width="100" height="auto" />
          <span>Painting</span>
        </Nav.Link>
        <Nav.Link href="#" className="d-flex flex-column align-items-center gap-2 mx-4">
          <img src={packers} alt="Packers & Movers Icon" width="150" height="auto" />
          <span>Packers & Movers</span>
        </Nav.Link>
        <Nav.Link href="#" className="d-flex flex-column align-items-center gap-2 mx-4">
          <img src={homeCleaning} alt="Home Cleaning Icon" width="150" height="auto" />
          <span>Home Cleaning</span>
        </Nav.Link>
        <Nav.Link href="#" className="d-flex flex-column align-items-center gap-2 mx-4">
          <img src={acRepair} alt="AC Repair Icon" width="150" height="auto" />
          <span>AC Repair</span>
        </Nav.Link>
      </div>

      {/* Toggle content appears above the button */}
      {showServices && (
        <div className="d-flex align-items-center gap-5 mx-5 mt-3" style={{ fontSize: "0.8rem" }}>
          <Nav.Link href="#" className="d-flex flex-column align-items-center gap-2 mx-4">
            <img src={electrician} alt="Electrician Icon" width="100" height="auto" />
            <span>Electrician</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center gap-2 mx-4">
            <img src={carpentry} alt="Carpentry Icon" width="150" height="auto" />
            <span>Carpentry</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center gap-2 mx-4">
            <img src={plumbing} alt="Plumbing Icon" width="150" height="auto" />
            <span>Plumbing</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center gap-2 mx-4">
            <img src={homeRenovation} alt="Home Renovation Icon" width="150" height="auto" />
            <span>Home Renovation</span>
          </Nav.Link>
        </div>
      )}

      {/* Button for the content */}
      <div className="d-flex justify-content-center mt-3">
        <button className="nav-property w-100" onClick={toggleServices}>
          <span className="d-flex justify-content-center align-items-center">
            {showServices ? 'View Less' : '+4 More Services'}
            {showServices ? <FaChevronUp className="ms-2" /> : <FaChevronDown className="ms-2" />}
          </span>
        </button>
      </div>
    </div>

  
     <div className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white" onClick={handleWalletToggle}>
               <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
        <b>     NBcash Wallet</b>
          {showWallet? <FaChevronUp className="ms-auto" />:<FaChevronDown className="ms-auto" /> }
        </div>
    {showWallet && (
                 <li>
                   <ul className="custom-dropdown-ul">
                      <Nav.Link>Wallet Summary</Nav.Link>
                      <Nav.Link>Rewards</Nav.Link>
                    </ul>
                 </li>
          )}
    </div>

     <div className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white"  onClick={handleResidentialToggle}>
               <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
        <b>     Residential Plans</b>
          {showSmallResidentialPlans? <FaChevronUp className="ms-auto" />:<FaChevronDown className="ms-auto" /> }
        </div>
      {showSmallResidentialPlans && (
                 <li>
                   <ul className="custom-dropdown-ul">
                      <Nav.Link>For Owner</Nav.Link>
                      <Nav.Link>For Sellers</Nav.Link>
                      <Nav.Link>For Tenants</Nav.Link>
                      <Nav.Link>For Buyers</Nav.Link>
                    </ul>
                 </li>
          )}
    </div>
    
      <div className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white" onClick={handleCommercialToggle}>
               <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
        <b>     Commercial Plans</b>
          {showSmallCommercialPlans? <FaChevronUp className="ms-auto" />:<FaChevronDown className="ms-auto" /> }
        </div>
      {showSmallCommercialPlans && (
                 <li>
                   <ul className="custom-dropdown-ul">
                      <Nav.Link>For Owner</Nav.Link>
                      <Nav.Link>For Sellers</Nav.Link>
                      <Nav.Link>For Tenants</Nav.Link>
                      <Nav.Link>For Buyers</Nav.Link>
                    </ul>
                 </li>
          )}
    </div>

      <div className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white" onClick={handleHomeToggle}>
               <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
        <b>    Home Services</b>
          {showHomeServices? <FaChevronUp className="ms-auto" />:<FaChevronDown className="ms-auto" /> }
        </div>
     {showHomeServices && (
                 <li>
                   <ul className="custom-dropdown-ul">
                      <Nav.Link>Packers and Movers</Nav.Link>
                      <Nav.Link>Painting</Nav.Link>
                      <Nav.Link>Cleaning</Nav.Link>
                      <Nav.Link>Interiors</Nav.Link>
                      <Nav.Link>Furniture</Nav.Link>
                      
                    </ul>
                 </li>
          )}
    </div>

         <div className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white" onClick={handleNoBrokerToggle}>
               <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
        <b>  NoBroker Pay</b>
          {showNoBrokerPay? <FaChevronUp className="ms-auto" />:<FaChevronDown className="ms-auto" /> }
        </div>

          {showNoBrokerPay && (
                 <li>
                   <ul className="custom-dropdown-ul">
                      <Nav.Link>Pay Your Rent</Nav.Link>
                      <Nav.Link>Deposit Payment</Nav.Link>
                      <Nav.Link>Bill Payments</Nav.Link>
                      
                    </ul>
                 </li>
          )}
    </div>

      <div className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white" onClick={handleLegalToggle}>
               <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
        <b> Legal Assistance & Loan</b>
        {showLegal ? <FaChevronUp /> : <FaChevronDown />}
      </div>
         
          {showLegal && (
                 <li>
                   <ul className="custom-dropdown-ul">
                      <Nav.Link>Rental Agreement</Nav.Link>
                      <Nav.Link>Police Intimation</Nav.Link>
                      <Nav.Link>Tenant Verification</Nav.Link>
                      <Nav.Link>Property Legal Assistance</Nav.Link>
                      <Nav.Link>Home Loan</Nav.Link>
                      <Nav.Link>Home Deposit Loan</Nav.Link>
                    </ul>
                 </li>
                )}
        
    </div>

     <div className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white" onClick={handleUtilitiesToggle}>
      <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
        <b> Utilities</b>
        {showUtilities ? <FaChevronUp /> : <FaChevronDown />}
      </div>
        {showUtilities && (
                 <li>
                   <ul className="custom-dropdown-ul">
                      <Nav.Link>Know Your Rent</Nav.Link>
                      <Nav.Link>Create Rent Receipts</Nav.Link>
                      <Nav.Link>Click & Earn</Nav.Link>
                    </ul>
                 </li>
                )}
    </div>

      <div className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white" onClick={handleHelpToggle}>
        <div className="d-flex justify-content-between align-items-center w-100" style={{ cursor: 'pointer' }}>
        <b>Help & Support</b>
        {showHelp ? <FaChevronUp /> : <FaChevronDown />}
      </div>
       {showHelp && (
                 <li>
                   <ul className="custom-dropdown-ul">
                      <Nav.Link>Support Topics</Nav.Link>
                      <Nav.Link>Blog</Nav.Link>
                      <Nav.Link>Feedback</Nav.Link>
                      <Nav.Link>About Us</Nav.Link>
                      <Nav.Link>Chat With Us</Nav.Link>
                    </ul>
                 </li>
                )}
    </div>
</Nav>
          </div>
   


        
        </Navbar.Collapse>

       
      </Container>
    </Navbar>
  );
}

export default Navb;
