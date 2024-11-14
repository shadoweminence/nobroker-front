import React from 'react'
import '../style/rentReceipt.css'
import card from '../assets/images/card.png'

function ReceiptrentCcard() {
  return (
    <>
      <div className="container mt-5 rent-receipt ">
      <div className="">
          <h1>Pay Rent With Credit Card Online</h1>
          <h4>Earn money just by paying your rent!</h4>
          <div className="card-section">
            <div className="row horizontal-slide">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex gap-4 mb-5">
                <div className="img">
                  <div className="img-box d-flex flex-column justify-content-center align-items-center">
                    <img
                      className="img-fluid ms-3"
                      style={{ height: "50px", width: "42px" }}
                      src="https://assets.nobroker.in/nb-new/public/RentoPay/no_hidden_cost.svg"
                      alt="Earn Rewards"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="title">Earn Rewards</div>
                  <p className="sub-title">
                    Earn miles, get cash back and reward points on every rent
                    payment with your card.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 d-flex gap-4 mb-5">
                <div className="img">
                  <div className="img-box d-flex flex-column justify-content-center align-items-center">
                    <img
                      className="img-fluid ms-3"
                      style={{ height: "50px", width: "42px" }}
                      src="https://assets.nobroker.in/nb-new/public/RentoPay/credit_card.svg"
                      alt="Pay with Credit Card"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="d-flex title">
                    Pay with Credit Card
                    <img
                      style={{ height: "23px", width: "80px" }}
                      className="ms-4"
                      src={card}
                      alt="description"
                    />
                  </div>
                  <p className="sub-title">
                    We accept major cards like Visa and Mastercard so your rent
                    payment is hassle free.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 d-flex gap-4 mb-5">
                <div className="img">
                  <div className="img-box d-flex flex-column justify-content-center align-items-center">
                    <img
                      className="img-fluid ms-3"
                      style={{ height: "50px", width: "42px" }}
                      src="https://assets.nobroker.in/nb-new/public/RentoPay/digital_rent_receipt.svg"
                      alt="Digital Rent Receipts"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="title">Digital Rent Receipts</div>
                  <p className="sub-title">
                    Generate rent receipts instantly and claim your HRA with
                    ease. Get rent receipts sent directly to your email ID.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 d-flex gap-4 mb-5">
                <div className="img">
                  <div className="img-box d-flex flex-column justify-content-center align-items-center">
                    <img
                      className="img-fluid ms-3"
                      style={{ height: "50px", width: "42px" }}
                      src="https://assets.nobroker.in/nb-new/public/RentoPay/no_broker_trust.svg"
                      alt="NoBroker Trust"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="title">NoBroker Trust</div>
                  <p className="sub-title">
                    NoBroker Pay is a product by NoBroker and is 100% secure
                    with PCI compliant payment gateway.
                  </p>
                </div>
              </div>
            </div>
            <div className="get-startedbtn d-flex justify-content-center">
              <button
                class="getting-started btn btn-primary"
                style={{ width: "40%" }}
                id=""
                type="button"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default ReceiptrentCcard
