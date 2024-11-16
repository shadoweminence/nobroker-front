import React, { useState } from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { PiShareFatThin, PiStamp } from "react-icons/pi";
import { Link } from "react-router-dom";

const RentalAgreement = () => {
  const selectARentAgreement = [
    {
      id: 1,
      text: "Rental Agreement + Police Intimation",
      bgImage: "https://assets.nobroker.in/nob-common/pkgWithRaUpload.webp",
      offer: "Upto ₹100 off",
    },
    {
      id: 2,
      text: "Rental Agreement with Biometric",
      bgImage: "https://assets.nobroker.in/nob-common/pkgWithRaMh.webp",
      offer: "Upto ₹100 off",
    },
    {
      id: 3,
      text: "Rental Agreement with E-Stamp & Notary",
      bgImage: "https://assets.nobroker.in/nob-common/pkgWithEstamp.webp",
      offer: "Upto ₹100 off",
    },
  ];

  const availableAddOns = [
    {
      id: 1,
      image: "https://assets.nobroker.in/nob-common/extraVisit.webp",
      heading: "Extra Visit",
      desc: "Book additional biometric appointments in",
      bgColor: "#ffeff3",
    },
    {
      id: 2,
      image: "https://assets.nobroker.in/nob-common/techAssistance.webp",
      heading: "Tech Assistance",
      desc: "For distant registration via a biometric device",
      bgColor: "#f2f3ff",
    },
    {
      id: 3,
      image:
        "https://assets.nobroker.in/nob-common/legalIDVerificationAddon.webp",
      heading: "Tenant Verification",
      desc: "Verify your tenant's Identity Instantly.",
      bgColor: "#fff5e2",
    },
    {
      id: 4,
      image: "https://assets.nobroker.in/nob-common/legalDeliveryAddon.webp",
      heading: "Standard Delivery",
      desc: "Hard copy delivery of your agreement",
      bgColor: "rgb(255, 236, 226)",
    },
    {
      id: 5,
      image: "https://assets.nobroker.in/nob-common/powerOfAttorneyImg.svg",
      heading: "Power Of Attorney",
      desc: "Drafting of Power Of Attorney.",
      bgColor: "rgb(242, 246, 253)",
    },
  ];

  const howItWorks = [
    {
      id: 1,
      bgNumber: "",
      image: "rentalAgreement/fillDetail.webp",
      heading: "Fill Details Online",
      desc: "Customise our template agreement as per your requirement and submit the draft",
    },
    {
      id: 2,
      bgNumber: "",
      image: "rentalAgreement/lsDelivery.webp",
      heading: "Stamping & Printing",
      desc: "We print the agreement on a legal stamp paper",
    },
    {
      id: 3,
      bgNumber: "",
      image: "rentalAgreement/stamping.webp",
      heading: "Agreement is Delivered!",
      desc: "We deliver the printed agreement to you in 3-4 days",
    },
  ];

  const compareAgreement = [
    {
      id: 1,
      heading: "Upload your Draft",
      details: {
        1: "Agreement printed with legal E-Stamp",
        2: "Upload agreement with your own clauses",
        3: "Hardcopy Delivery with Same Day Delivery",
        4: "Agreement Delivery available for both Tenant/ Owner",
        5: "Starting @ ₹399 + Stamp Paper",
      },
    },
    {
      id: 2,
      heading: "E-Stamped Agreement",
      details: {
        1: "Agreement printed with legal E-Stamp",
        2: "NoBroker Draft with custom clauses",
        3: "Hardcopy Delivery with Same Day Delivery",
        4: "Agreement Delivery available for both Tenant/Owner",
        5: "Starting @ ₹399 + Stamp Paper",
      },
    },
    {
      id: 3,
      heading: "Paperless Rental Agreement with Aadhar E-Sign",
      details: {
        1: "Agreement printed with legal E-Stamp",
        2: "NoBroker Draft with custom clauses",
        3: "Paperless, remote and secure Aadhar eSign",

        4: "Get agreement digital copy Instantly, legally valid in court of law",
        5: "Go paperless and Save ₹100!",
      },
    },
  ];

  const discountCoupons = [
    {
      id: 1,
      image:
        "https://assets.nobroker.in/hs-new/public/LegalServiceNew/nbDiscount.svg",
      disPercent: "10% NB cash discount",
      upto: "Upto ₹250",
    },
    {
      id: 2,
      image:
        "https://assets.nobroker.in/hs-new/public/LegalServiceNew/hdfcCoupon.png",
      disPercent: "5% HDFC bank",
      upto: "Upto ₹1500",
    },
    {
      id: 3,
      image:
        "https://assets.nobroker.in/hs-new/public/LegalServiceNew/amazonCoupon.png",
      disPercent: "₹100 Amazon pay discount",
      upto: "On spend of ₹2000",
    },
  ];

  const otherLegalServices = [
    {
      id: 1,
      image: "rentalAgreement/backgroundVerification.webp",
      text: "Tenant verification",
    },
    { id: 2, image: "rentalAgreement/affidavit.webp", text: "Affidavit" },
    {
      id: 3,
      image: "rentalAgreement/backgroundVerification.webp",
      text: "Tenant verification Tenant verification",
    },
    { id: 4, image: "rentalAgreement/affidavit.webp", text: "Affidavit" },
  ];

  const [selected, setSelected] = useState(2);

  return (
    <>
      {/* online rent Agreement */}
      <div className="bg-gradient-to-b from-[#1f235b] from-[450px] to-[#f0f0f0] to-[400px] py-10">
        <div className="w-[98%] xl:w-8/12 mx-auto">
          <div className=" h-[450px] text-white">
            <div className="w-[92%] mx-auto py-10">
              <div>
                <div className="text-3xl mb-2">
                  Online Rent Agreement in Mumbai
                </div>
                <span className="opacity-80">
                  Now available in 150+ cities in india
                </span>

                <div className="bg-white/10 w-fit p-2 rounded-md flex  gap-32 mt-4">
                  <div className="flex">
                    <img
                      src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/renew.svg"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <div>Renew Your Agreement</div>
                        <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>
                      </div>
                      <div className="text-sm opacity-80">
                        Renew your existing agreement
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/leftAero.svg"
                    alt=""
                    className="m-0"
                  />
                </div>
              </div>

              <div className="pt-10">
                <div className="flex whitespace-nowrap items-center">
                  <div className="uppercase w-fit">select a rent agreement</div>
                  <hr className="border w-full ml-2" />
                </div>
                <div className="flex gap-3 mt-2">
                  {selectARentAgreement.map((item) => (
                    <div
                      className={`rounded-3xl bg-white text-black w-1/3 h-80 flex flex-col justify-between py-4`}
                      style={{
                        backgroundImage: `url(${item.bgImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top right",
                        backgroundSize: "120px",
                      }}
                    >
                      <div className="text-2xl font-medium w-2/3 px-3">
                        {item.text}
                      </div>
                      <div className="flex bg-gradient-to-r from-green-200/40 p-2 justify-between">
                        <div className="flex w-full items-center">
                          <img
                            src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/offuptoIcon.svg"
                            alt=""
                            className="mx-2 w-6"
                          />
                          <div className="text-green-700 font-medium text-xl">
                            {item.offer}
                          </div>
                        </div>
                        <img
                          src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/leftAeroPkg.svg"
                          alt=""
                          className="m-0 w-6"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SELECT A RENT AGREEMENT */}
          <div className="flex justify-center gap-2 mt-44 text-sm">
            <div className="flex items-center gap-2">
              <PiStamp className="text-3xl text-orange-800" />
              <div className="opacity-80">Mahrashtra Govt. Registered</div>
              <div className="h-[80%] border border-black/40"></div>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineSafety className="text-3xl text-orange-800" />
              <div className="opacity-80">Legally Valid Agreement</div>
              <div className="h-[80%] border border-black/40"></div>
            </div>
            <div className="flex items-center gap-2">
              <PiShareFatThin className="text-3xl text-orange-800" />
              <div className="opacity-80">Share form with tenant/Owner</div>
            </div>
          </div>

          {/* Available Add ons */}
          <div className="p-8 bg-white rounded-2xl w-11/12 mx-auto my-10">
            <div className="font-semibold text-3xl mb-8">Available Add ons</div>
            <div className="grid grid-cols-3 gap-4 flex-wrap">
              {availableAddOns.map((item) => (
                <div key={item.id}>
                  <div
                    className="rounded-xl items-center flex justify-center"
                    style={{ backgroundColor: `${item.bgColor}` }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-[80%] w-[80%] m-0"
                    />
                  </div>
                  <div className="font-medium text-lg mt-2">{item.heading}</div>
                  <div className="opacity-80">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="p-8 bg-white rounded-2xl w-11/12 mx-auto">
            <div className="font-semibold text-3xl mb-8">How it works</div>
            <div className="grid grid-cols-3 gap-4 flex-wrap">
              {howItWorks.map((item) => (
                <div key={item.id}>
                  <div className="rounded-xl items-center flex justify-center">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[80%] w-[80%] m-0"
                    />
                  </div>
                  <div className="font-medium text-lg mt-2">{item.heading}</div>
                  <div className="opacity-80">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Select to Compare Agreement */}
      <div className="text-white text-center py-10 bg-[#121a45]">
        <div className="w-[90%] mx-auto">
          <div className="font-medium text-3xl">
            Select to Compare Agreement
          </div>
          <div
            className={`grid grid-cols-3 text-left opacity-70 text-xl mt-10`}
          >
            {compareAgreement.map((item) => (
              <div
                key={item.id}
                className={`cursor-pointer focus:bg-white p-3 rounded-xl text-lg ${
                  selected === item.id ? "bg-white/30" : null
                }`}
                onClick={() => setSelected(item.id)}
              >
                <div className="mb-2">{item.heading}</div>
                {Object.values(item.details).map((itemDetail, index) => (
                  <div className="flex align-middle gap-2" key={index}>
                    <FaCheck className="mt-1" />
                    {itemDetail} helo
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <button className="px-20 py-3 border border-white border-opacity-80 rounded-md">
              Preview
            </button>
            <button className="px-20 py-3 bg-white font-medium text-lg rounded-md text-black flex items-center gap-2">
              Proceed <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f0f0] flex flex-col gap-8">
        {/* Discount Coupons */}
        <div className="bg-white rounded-xl p-8 w-[90%] mt-10 mx-auto">
          <div className="text-3xl font-semibold">Discount Coupons</div>
          <div>Apply Coupon at the summary Screen</div>
          <div className="flex justify-between gap-4">
            {discountCoupons.map((item) => (
              <div className="border p-2 w-full rounded-xl">
                <div className="bg-zinc-200 w-fit p-1 rounded-md">
                  <img src={item.image} alt="" className="m-0" />
                </div>
                <hr className="m-2" />
                <div>
                  <div className="font-semibold text-lg">{item.disPercent}</div>
                  <div className="opacity-70">{item.upto}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NoBroker Promise */}
        <div className="bg-white rounded-xl p-8 w-[90%] mx-auto">
          <div className="text-3xl font-semibold">NoBroker Promise</div>
          <div className="flex justify-between mt-10">
            <div className="flex flex-col gap-10">
              <div className="flex gap-2">
                <div>
                  <img
                    src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/lowestPrice.svg"
                    alt=""
                    className="m-0"
                  />
                </div>
                <div>
                  <div className="text-lg text-blue font-semibold">
                    Guaranteed Lowest Prices
                  </div>
                  <div>Best-in-class legal documentation at lowest prices.</div>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <img
                    src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/legallyValid.svg"
                    alt=""
                    className="m-0"
                  />
                </div>
                <div>
                  <div className="text-lg text-blue font-semibold">
                    Legally Valid
                  </div>
                  <div>
                    Make genuine documents which are legally valid in court of
                    law.
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <img
                    src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/convenient.svg"
                    alt=""
                    className="m-0"
                  />
                </div>
                <div>
                  <div className="text-lg text-blue font-semibold">
                    100% Convenience. 0% Stress.
                  </div>
                  <div>
                    Get delighted with super fast documentation at the
                    convenience of your home.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="rentalAgreement/nBPromise.webp"
                alt=""
                className="m-0 w-80"
              />
            </div>
          </div>
        </div>

        {/* Other legal services that we offer */}
        <div className="bg-white rounded-xl px-8 py-12 w-[90%] mx-auto">
          <div className="font-semibold text-3xl">
            Other legal services that we offer
          </div>
          <div className="flex gap-8 overflow-x-scroll flex-nowrap mt-10">
            {[...otherLegalServices, ...otherLegalServices].map(
              (item, index) => (
                <Link>
                  <div
                    className="text-center flex flex-col gap-2 items-center"
                    key={index}
                  >
                    <div className="border border-black flex items-center justify-center w-40 h-40 rounded-full">
                      <img
                        src={item.image}
                        alt=""
                        className="m-0 w-32 h-32 mt-1 items-center hover:transform hover:scale-125 ease-linear duration-100 rounded-full"
                      />
                    </div>
                    <div>{item.text}</div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="bg-white rounded-xl px-8 py-12 w-[90%] mx-auto">
          <div>Customer Reviews</div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default RentalAgreement;
