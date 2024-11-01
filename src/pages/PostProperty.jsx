import PhoneInput from "react-phone-input-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";
import "../style/postProperty.css";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import QuickChart from '../components/QuickChat'
import PostPropertyFAQ from "../components/postPropertyFAQ";


function PostProperty() {
  const [selectedType, setSelectedType] = useState("Residential");
  const [selectedAdType, setSelectedAdType] = useState(null);
  const adTypes = {
    Residential: ["Rent", "Resale", "PG/Hostel", "Flatmates"],
    Commercial: ["Rent", "Sale"],
    "Land/Plot": ["Resale"],
  };

  const brokerFeature = [
    {
      img: "https://assets.nobroker.in/static/img/listing/icon1.png",
      title: "No Calls From Brokers",
      content: "Your information is kept confidential and you no longer have to worry about call from brokers.",
    },
    {
      img: "https://assets.nobroker.in/static/img/listing/icon2.png",
      title: "Verified Tenants",
      content: "Thanks to our technology, only verified and genuine tenants can call you.",
    },
    {
      img: "https://assets.nobroker.in/static/img/listing/icon3.png",
      title: "Save Brokerage",
      content: "No Brokers means No Brokerage! Buy yourself a gift",
    },
  ];
  return (
    <>
    <QuickChart />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="top d-flex align-items-center justify-content-between">
          <h1 className="fw-semibold fs-4" style={{ color: "#424949" }}>
            Sell or Rent your property for free
          </h1>
          <p className="link" style={{ color: "#424949" }}>
            Looking for a property?{" "}
            <a href="" style={{ color: "#097969" }}>
              Click here
            </a>
          </p>
        </div>
        <div className="row main">
          <div className="col-lg-5 left">
            <h4
              className=""
              style={{ color: "#424949", fontSize: "18px", fontWeight: "600" }}
            >
              Why post through us?
            </h4>
            <div
              className="d-flex align-items-center mx-auto"
              style={{ padding: "8px 0" }}
            >
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/Zero_Brokerage.svg"
                alt="zero"
              />
              <div style={{ color: "#787676", fontSize: "14px" }}>
                Zero Brokerage
              </div>
            </div>
            <div
              className="d-flex align-items-center mx-auto"
              style={{ padding: "8px 0" }}
            >
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/Tenant.svg"
                alt="fast"
              />
              <div style={{ color: "#787676", fontSize: "14px" }}>
                Faster Tenants
              </div>
            </div>
            <div
              className="d-flex align-items-center mx-auto"
              style={{ padding: "8px 0" }}
            >
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/tenant_buyer_connections.svg"
                alt="connections"
              />
              <div style={{ color: "#787676", fontSize: "14px" }}>
                10 lac tenants/buyers connections
              </div>
            </div>
            <div>
              <h4
                className="mt-5"
                style={{
                  color: "#424949",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                30 Lac+ Home Owners Trust Us
              </h4>
            </div>

            <Carousel
              indicators={false}
              interval={3000}
              controls={true}
              className="mt-1"
            >
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I found Nobroker very helpful for house rent advertisements.
                  The team was very responsive and enthusiastic to help us find
                  a good tenant in a very short span of time. Within a week this
                  property listing site was able to get me a tenant and exceed
                  my expectations.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Mohan
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Kathmandu
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  NoBroker is doing a very good job out there saving us all from
                  the general brokers and from all those extra brokerage
                  expenses. They have a lot of real estate ads and options to
                  choose from, they will be with you until you find your house.
                  They did a great job by helping me throughout the whole
                  process.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Shyam
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Bhaktapur
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I posted a property ad online on NoBroker. Its an efficient
                  real estate website because despite my busy schedule they did
                  a great job of contacting me at the right times. To keep me
                  updated they sent mails &amp; messages. They found a great
                  tenant for my rental property as per my demands.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Gopal
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Lalitpur
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I posted a property ad online on NoBroker. Its an efficient
                  real estate website because despite my busy schedule they did
                  a great job of contacting me at the right times. To keep me
                  updated they sent mails &amp; messages. They found a great
                  tenant for my rental property as per my demands.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Gopal
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Lalitpur
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I posted a property ad online on NoBroker. Its an efficient
                  real estate website because despite my busy schedule they did
                  a great job of contacting me at the right times. To keep me
                  updated they sent mails &amp; messages. They found a great
                  tenant for my rental property as per my demands.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Gopal
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Lalitpur
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I posted a property ad online on NoBroker. Its an efficient
                  real estate website because despite my busy schedule they did
                  a great job of contacting me at the right times. To keep me
                  updated they sent mails &amp; messages. They found a great
                  tenant for my rental property as per my demands.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Gopal
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Lalitpur
                </span>
              </Carousel.Item>
              <Carousel.Item className="mb-4">
                <p style={{ color: "#787676", fontSize: "14px" }}>
                  I posted a property ad online on NoBroker. Its an efficient
                  real estate website because despite my busy schedule they did
                  a great job of contacting me at the right times. To keep me
                  updated they sent mails &amp; messages. They found a great
                  tenant for my rental property as per my demands.
                </p>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Gopal
                </span>
                <span style={{ color: "#787676", fontSize: "14px" }}>
                  {" "}
                  | Lalitpur
                </span>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-lg-7 right mt-4 py-1">
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col" style={{ border: "0 solid #e5e7eb" }}>
                <PhoneInput
                  country={"np"}
                  value=""
                  inputClass="form-control"
                  containerClass="w-100"
                />
              </div>
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select City</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <span>
                Get updates on
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                  viewBox="0 0 48 48"
                  style={{ width: "25px", height: "25px", margin: "0 7px" }}
                >
                  <g id="surface1">
                    <path
                      fill="#40C351"
                      d="M 35.175781 12.832031 C 32.195313 9.851563 28.234375 8.207031 24.019531 8.207031 C 15.316406 8.207031 8.234375 15.28125 8.230469 23.980469 C 8.230469 26.960938 9.066406 29.863281 10.644531 32.375 L 11.019531 32.972656 L 9.425781 38.792969 L 15.398438 37.226563 L 15.976563 37.570313 C 18.398438 39.007813 21.175781 39.769531 24.007813 39.769531 L 24.015625 39.769531 C 32.710938 39.769531 39.789063 32.691406 39.792969 23.992188 C 39.796875 19.777344 38.15625 15.8125 35.175781 12.832031 Z"
                    />
                    <path
                      fill="#FFF"
                      d="M 19.269531 16.046875 C 18.914063 15.253906 18.539063 15.238281 18.199219 15.226563 C 17.921875 15.214844 17.605469 15.214844 17.289063 15.214844 C 16.976563 15.214844 16.460938 15.332031 16.027344 15.808594 C 15.589844 16.28125 14.363281 17.429688 14.363281 19.765625 C 14.363281 22.097656 16.066406 24.355469 16.300781 24.671875 C 16.539063 24.984375 19.585938 29.929688 24.40625 31.832031 C 28.414063 33.410156 29.230469 33.097656 30.097656 33.019531 C 30.96875 32.9375 32.90625 31.871094 33.300781 30.761719 C 33.695313 29.65625 33.695313 28.707031 33.578125 28.507813 C 33.460938 28.308594 33.144531 28.191406 32.667969 27.953125 C 32.195313 27.714844 29.863281 26.570313 29.425781 26.410156 C 28.992188 26.253906 28.675781 26.175781 28.359375 26.648438 C 28.042969 27.121094 27.132813 28.191406 26.855469 28.507813 C 26.578125 28.824219 26.304688 28.863281 25.828125 28.628906 C 25.355469 28.390625 23.828125 27.890625 22.015625 26.273438 C 20.605469 25.015625 19.652344 23.464844 19.375 22.988281 C 19.097656 22.515625 19.34375 22.257813 19.582031 22.019531 C 19.796875 21.808594 20.058594 21.464844 20.296875 21.1875 C 20.53125 20.910156 20.609375 20.714844 20.769531 20.398438 C 20.925781 20.082031 20.847656 19.804688 20.730469 19.566406 C 20.613281 19.328125 19.691406 16.984375 19.269531 16.046875 Z"
                      style={{ fillRule: "evenodd" }}
                    />
                  </g>
                </svg>
                WhatsApp
              </span>
              <label className="custom-switch ms-2">
                <input type="checkbox" />
                <span className="custom-slider"></span>
              </label>
            </div>

            <div className="property-nav">
              <div
                className="text-center mt-4 mb-4 fw-semibold"
                style={{ fontSize: "14px" }}
              >
                Property Type
              </div>
              <div className="property-types">
                {["Residential", "Commercial", "Land/Plot"].map((type) => (
                  <div
                    key={type}
                    className={`property-type ${
                      selectedType === type ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedType(type);
                      setSelectedAdType(null);
                    }}
                  >
                    {type}
                  </div>
                ))}
              </div>
              <div className="property-ad-type-section">
                <div className="text-center mb-2 fw-semibold">
                  Select Property Ad Type
                </div>
                <div className="ad-types">
                  {adTypes[selectedType]?.map((adType) => (
                    <div
                      key={adType}
                      className={`ad-type fw-light ${
                        selectedAdType === adType ? "active" : ""
                      }`}
                      onClick={() => setSelectedAdType(adType)}
                    >
                      {adType}
                    </div>
                  ))}
                </div>
              </div>

              <div className="post-ad-button mb-4">
                <button
                  className="btn btn-lg btn-block text-white fw-medium"
                  style={{ fontSize: "17px" }}
                  type="button"
                >
                  Start Posting Your Ad For FREE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="help-call d-flex align-items-center justify-content-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "15px", width: "13px", marginRight: "8px" }}
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <span className="fw-light">
            Give a missed call to 869-000-5267 to get help with your property
            listing
          </span>
        </div>

        <div className="row mt-5">
          {brokerFeature.map((item, index) => (
            <div
              key={index}
              className="feature col d-flex flex-column align-items-center text-center"
            >
              <img
                className="mb-3"
                style={{ width: "50px", hight: "70px" }}
                src={item.img}
                alt={item.title}
              />
              <h5
                className="fw-semibold"
                style={{ fontSize: "18px", color: "#424949" }}
              >
                {item.title}
              </h5>
              <p className="" style={{ fontSize: "15px", color: "#787676" }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div
          className="work mt-4 py-4 px-40"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <h4
            className="text-center fw-semibold fs-5 pb-4"
            style={{ color: "#424949" }}
          >
            How it Works{" "}
          </h4>
          <div className="row mb-5">
            <div className="col d-flex flex-column justify-content-center">
              <h4 className="fw-semibold fs-5" style={{ color: "#424949" }}>
                Simple Listing Process
              </h4>
              <div class="fw-lighter " style={{ color: "#787676" }}>
                As an owner you can list your property in a few minutes. Just
                fill out our super simple form. Your property will go live after
                verification.
              </div>
            </div>
            <div className="col">
              <img
                src="https://assets.nobroker.in/static/img/listing/search.jpg"
                alt="Simple Listing Process"
              />
            </div>
          </div>

          <div className="row mb-5">
            <div className="col">
              <img
                src="https://assets.nobroker.in/static/img/listing/phonecall.jpg"
                alt="Simple Listing Process"
              />
            </div>
            <div className="col d-flex flex-column justify-content-center">
              <h4 className="fw-semibold fs-5" style={{ color: "#424949" }}>
                Tenant Selects Property and Schedules an Appointment
              </h4>
              <div class="fw-lighter " style={{ color: "#787676" }}>
                If a tenant likes your property they will request for your
                contact details. Both parties will receive contact information
                and then arrange for a visit.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col d-flex flex-column justify-content-center">
              <h4 className="fw-semibold fs-5" style={{ color: "#424949" }}>
                Deal Closure
              </h4>
              <div class="fw-lighter " style={{ color: "#787676" }}>
                Owner and tenant meet to close the deal directly. NoBroker can
                help create a rental agreement and deliver it to your doorstep.
              </div>
            </div>
            <div className="col">
              <img
                src="https://assets.nobroker.in/static/img/listing/shakeHands.jpg"
                alt="Simple Listing Process"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="fs-5" style={{ color: "#424949" }}>
            <strong>Rent or Sell Property Online Easily With NoBroker</strong>
          </h2>
          <p className="pb-3" style={{ color: "#787676", lineHeight: "1.35" }}>
            Looking to sell property online or list your property for rent?
            NoBroker makes it simple, whether you want to sell a house, post a
            property for rent, or even sell land online, you can do it all
            without the hassle of dealing with middlemen, thanks to free
            property ad listings at NoBroker.
          </p>

          <p className="" style={{ color: "#787676", lineHeight: "1.35" }}>
            NoBroker is designed to cater to all your needs, from house rent
            advertisements to selling plots online. With NoBroker, you can
            quickly and easily post free property ads, explore the best
            property-selling platform, and connect with potential buyers or
            tenants that match your needs directly. Whether you're a homeowner
            wanting to sell your house or a landlord aiming to{" "}
            <strong> rent out a property</strong>, NoBroker is your go-to
            platform for all things real estate.
          </p>

          <h2
            className="fw-semibold pt-3"
            style={{ color: "#424949", fontSize: "18px" }}
          >
            NoBroker’s House Sell & Rent Advertisement Services
          </h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid black",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    color: "#424949",
                  }}
                >
                  FEATURE
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    color: "#424949",
                  }}
                >
                  DESCRIPTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#424949",
                  }}
                >
                  {" "}
                  <strong>Zero Brokerage</strong>{" "}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#787676",
                  }}
                >
                  Buy, sell, or rent your property without paying hefty
                  commissions to agents.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#424949",
                  }}
                >
                  <strong>Free Listing</strong>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#787676",
                  }}
                >
                  Post your property advertisement for FREE on NoBroker's
                  platform. Whether you want to sell property online or rent out
                  property, you can do it without any charges.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#424949",
                  }}
                >
                  <strong>Easy and Quick Process</strong>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#787676",
                  }}
                >
                  With NoBroker, posting your rent advertisement or listing a
                  property for sale is seamless. Our platform guides you through
                  simple steps, ensuring your free property listing is
                  attractive and effective.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#424949",
                  }}
                >
                  <strong>Increased Property Visibility</strong>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#787676",
                  }}
                >
                  NoBroker’s extensive online presence ensures that your
                  property advertisement gets maximum visibility, increasing the
                  chances of finding the right tenants or buyers for your
                  property.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#424949",
                  }}
                >
                  <strong>Dedicated Support</strong>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#787676",
                  }}
                >
                  NoBroker’s dedicated team helps you with the process, ensuring
                  that your property advertisement gets the visibility it
                  deserves.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#424949",
                  }}
                >
                  <strong>Tenant/Buyer Background Verification</strong>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    color: "#787676",
                  }}
                >
                  NoBroker prioritizes your security by verifying interactions
                  and ensuring that only genuine tenants or buyers can contact
                  you.
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="pt-4 pb-1 fs-5" style={{ color: "#464949" }}>
            <strong>
              How to Sell Property Online With a NoBroker Property Listing{" "}
            </strong>
          </h2>

          <p style={{ color: "#767979" }}>
            NoBroker makes it easy to sell property online or list your property
            for rent with a simple, streamlined process that connects you
            directly with tenants or buyers. Here’s how it works:
          </p>

          <h3 className="fs-6" style={{ color: "#464949" }}>
            <span>
              <strong>1. Easy Property Listing Process</strong>
            </span>
          </h3>
          <p style={{ color: "#767979" }}>
            Post a free property ad on NoBroker within minutes. Simply fill out
            our easy-to-use form with all the relevant details, including
            location, amenities, and photos. Your property advertisement will go
            live after a quick verification.
          </p>

          <h3 className="fs-6" style={{ color: "#464949" }}>
            <span>
              <strong>2. Tenant/Buyer Schedules an Appointment</strong>
            </span>
          </h3>
          <p style={{ color: "#767979" }}>
            Once your rent or sale listing is live, interested tenants or buyers
            can easily request your contact details to arrange a visit. Both
            parties will receive contact information, enabling them to connect
            directly.
          </p>

          <p className="py-2" style={{ color: "#767979" }}>Here’s how NoBroker ensures that tenants and buyers find your listing:</p>

          <p className="ms-4 mb-0" style={{ color: "#767979" }}><span style={{color: "#464949"}}><strong>1. Potential Tenant/Buyer Views the Listing:</strong></span> Potential tenants or buyers browse NoBroker’s extensive list of property advertisements, filtering by location, price, and property type to find their ideal match.</p>

          <p className="ms-4 mb-0" style={{ color: "#767979" }}><span style={{color: "#464949"}}><strong>2. They Initiate Direct Contact: </strong></span> Once they find a suitable listing, they can click to view more details and obtain contact information.</p>

          <p className="ms-4" style={{ color: "#767979" }}><span style={{color: "#464949"}}><strong>3. You Receive Alerts:</strong></span> As soon as someone shows interest, you’ll be notified through multiple channels, including SMS, phone, and WhatsApp, so you never miss a lead.</p>

          <h3 className="fs-6 mb-1" style={{color: "#464949"}}><strong>3. Property Visit and Deal Closure</strong></h3> 

          <p className="mb-4" style={{ color: "#767979" }}>After connecting, the property owner and tenant or buyer can arrange a site visit. NoBroker helps facilitate a smooth deal closure by providing additional services like rental agreement creation and doorstep delivery, painting services, cleaning services, etc. By avoiding middlemen, you get to sell your property or rent out property quickly and efficiently, without any brokerage fees.</p>

          <h3 className="fs-5 py-3" style={{color: "#464949"}}><strong>Types of Property Listings Available on NoBroker</strong></h3>

          <p style={{ color: "#767979" }}>Here's an overview of the property listings available on NoBroker:</p>

          <h3 className="fs-6 pb-2" style={{color: "#464949"}}><strong>1. Residential Properties</strong></h3>
          <p style={{ color: "#767979" }}>If you are looking to rent out property or sell your house, NoBroker provides a seamless solution. You can easily create a listing for various residential types, including:</p>

          <ul style={{listStyleType: "disc"}}>
            <li style={{color: "#464949"}}>Homes for Rent or Sale: <span style={{color: "#767979"}}>NoBroker’s platform makes it straightforward to post property for rent or sell house online, reaching a broad audience without any brokerage fees.</span></li>
            <li style={{color: "#464949"}}>PG or Hostel Rentals: <span style={{color: "#767979"}}>Have a paying guest accommodation or hostel space? List it on NoBroker with relevant details. Your rent advertisement will be live in minutes, attracting potential tenants quickly.</span></li>
          </ul>

        <h3 className="fs-6 pb-2" style={{color: "#464949"}}><strong>2. Commercial Properties</strong></h3>
          <p style={{ color: "#767979" }}>Sell or rent your commercial property effortlessly on NoBroker’s platform, designed to accommodate a range of business spaces. Whether it's office space, a co-working setup, a retail shop, a showroom, or even a warehouse, you can easily list your commercial property for sale or rent.</p>

          <h3 className="fs-6 pb-2" style={{color: "#464949"}}><strong>3. Plots</strong></h3>
          <p style={{ color: "#767979" }}>NoBroker makes it easy for you to sell land online with a user-friendly listing system. When you list your plot, you can include important details like its location, size, shape, and other relevant information.</p>

          <p style={{ color: "#767979" }}>If you want to sell property online or find the right tenant quickly, NoBroker offers a seamless, easy-to-use, and cost-effective solution. With zero brokerage, dedicated support, and easy listing features, you can connect directly with potential buyers or tenants. </p>

        <PostPropertyFAQ />
         
        </div>
      </div>
    </>
  );
}

export default PostProperty;
