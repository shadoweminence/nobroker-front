import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { defaultCountries, PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const LoginSignup = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="flex justify-center items-center z-10 bg-white">
        <div className="flex h-[500px] relative shadow-md shadow-slate-400">
          {/* <RxCross1 className="absolute right-4 top-4 cursor-pointer text-xl" /> */}
          <div className="flex flex-col gap-2 bg-slate-100 p-6 justify-center w-5/12 text-sm">
            <img
              src="https://assets.nobroker.in/nb-new/public/Signup/signupHome.png"
              alt=""
              width="30%"
            />
            <div className="font-bold">Login / Sign up</div>
            <div className="flex items-center">
              <IoMdCheckmark /> Zero Brokerage.
            </div>
            <div className="flex items-center">
              <IoMdCheckmark /> Thousands of new listings daily.
            </div>
            <div className="flex items-center">
              <IoMdCheckmark /> 100 Cr+ Brokerage saved monthly.
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 mt-4 w-7/12">
            <div className="flex flex-col gap-4">
              <h2>Enter phone to continue</h2>

              <div>
                <PhoneInput
                  defaultCountry="np"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputStyle={{ width: "100%" }}
                />
              </div>

              <button
                type="submit"
                className="bg-red-500 bg-red hover:bg-red-600 text-white w-full px-4 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
            <div>
              <span className="text-xs">By continuing, you agree to our </span>
              <span className="hover:underline font-bold text-xs cursor-pointer">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
