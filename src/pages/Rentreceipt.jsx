import React, { useState } from "react";
import "../style/rentReceipt.css";
import PhoneInput from "react-phone-input-2";
import QuickChart from "../components/QuickChat";

function Rentreceipt() {
  const [tenantName, setTenantName] = useState("");

  return (
    <>
      <QuickChart />
      <div className="container mb-5">
        <div className="page-heading text-center">Create Rent Receipts</div>
        <div className="page-subheading" style={{ color: "#464646" }}>
          Looking for rent receipts for tax saving? Do it in a click by filling
          the form below, take the print of the generated pdf and you are done.
          Easy 😊
        </div>
        <div className="container d-flex justify-content-center align-items-center mb-3">
          <form className="mt-5 w-90" style={{ maxWidth: "800px" }}>
            <div className="row">
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Tenant Name
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Tenant's Name"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Owner Name
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Owner's Name"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div
                className="mb-3 col-lg-6 col-md-6 col-sm-12"
                style={{ border: "0 solid #e5e7eb" }}
              >
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Tenant Phone
                </label>
                <PhoneInput
                  country={"np"}
                  value=""
                  inputClass="form-control"
                  inputStyle={{ width: "100%" }}
                />
              </div>
              <div
                className="mb-3 col-lg-6 col-md-6 col-sm-12"
                style={{ border: "0 solid #e5e7eb" }}
              >
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Owner Phone
                </label>
                <PhoneInput
                  country={"np"}
                  value=""
                  inputClass="form-control"
                  inputStyle={{ width: "100%" }}
                />
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Rent
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Monthly Rent in Rs."
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Owner PAN
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Owner's PAN"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Rented Property Address
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Address of property as required in rent receipts"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Owner Address
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Current Adress of the owner as required in rental receipts"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Receipt Start Date
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Receipt Start Date"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Receipt End Date
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Receipt End Date"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="rentrecipt-element mb-3 col-lg-6 col-md-6 col-sm-12">
                <label
                  htmlFor="rentrecipt-form-tenant_name-nbInput"
                  className="rentrecipt-form-label"
                  style={{
                    marginRight: "5px",
                    lineHeight: "25px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#464646",
                  }}
                >
                  Email
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="Email to receive PDF link"
                    autoFocus
                    name="tenant_name"
                    autoComplete="off"
                    id="rentrecipt-form-tenant_name-nbInput"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="submit-form btn rentReceipt-btn mx-auto"
                id=""
                type="submit"
                style={{ backgroundColor: "#009587", color: "#fff" }}
              >
                Generate Rent Receipt Now
              </button>
            </div>
          </form>
        </div>

        <div className="row gap-2 d-flex justify-content-center align-items-center">
          <div className="col-lg-5 text-left border p-4">
            <div className="d-flex justify-content-between align-items-center gap-2">
              <div>
                <div className="fs-5.5 font-semibold">
                  Create Rental Agreement
                </div>
                <div style={{fontSize: "14px", color: "#464646"}}>Get your rental Agreement delivered to your doorstep</div>
              </div>
              <img
                src="https://assets.nobroker.in/nb-new/public/LegalServices/ra_icon.svg"
                className=""
                alt="rental"
                loading="lazy"
                style={{width: "70px",height: "80px"}}
              />
            </div>
            <div class="d-flex gap-2 text-center mt-2 mb-1">
              <div
                className=" rounded-pill px-3 py-2"
                style={{ backgroundColor: "#EBEBEB", fontSize: "12px" }}
              >
                Same day Delivery
              </div>
              <div
                className="rounded-pill px-3 py-2"
                style={{ backgroundColor: "#EBEBEB" , fontSize: "12px"}}
              >
                30% off
              </div>
              <div
                className="rounded-pill px-3 py-2"
                style={{ backgroundColor: "#EBEBEB", fontSize: "12px" }}
              >
                Live tracking
              </div>
            </div>
            <button
              style={{ borderRadius: "6px", marginTop: "7px", backgroundColor: "#009587", color:"#fff" }}
              className="btn btn-default btn-sm fw-semibold"
              id=""
              type="button"
            >
              Explore Now
            </button>
          </div>
          <div className="col-lg-5 text-left border p-4">
            <div className="flex justify-content-between align-items-center gap-2">
              <div>
                <div className="fs-5.5 font-semibold">
                Hassle Free Tenant Verification
                </div>
                <div style={{fontSize: "14px", color: "#464646"}}>Ensure safety | Get Rent on Time | Avoid fraudsters</div>
              </div>
              <img
                src="https://assets.nobroker.in/nb-new/public/LegalServices/tenant_verification_icon.svg"
                className=""
                alt="rental"
                loading="lazy"
                style={{width: "70px", height: "80px"}}
              />
            </div>
            <div class="flex gap-2 text-center mt-2 mb-1 text-11">
              <div
                className="rounded-pill px-3 py-2"
                style={{ backgroundColor: "#EBEBEB", fontSize: "12px" }}
              >
                Get Reports Instantly
              </div>
              <div
                className="rounded-pill px-3 py-2"
                style={{ backgroundColor: "#EBEBEB", fontSize: "12px" }}
              >
                Civil/Criminal Check
              </div>
            </div>
            <button
              style={{ borderRadius: "6px", marginTop: "7px" , backgroundColor: "#009587", color:"#fff"}}
              className="btn btn-default btn-sm fw-semibold"
              id=""
              type="button"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rentreceipt;
