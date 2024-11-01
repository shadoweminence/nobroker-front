import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <div className="flex flex-col gap-4 my-5">
          <h1 className="text-3xl">
            World's Largest NoBrokerage Property Site
          </h1>
          <div className="flex bg-[rgba(252,178,68,0.2)] gap-4 w-fit mx-auto p-4">
            <div className="flex items-center">
              <img
                src="https://assets.nobroker.in/nb-new/public/Home/RAIcon.svg"
                alt=""
              />
              Rental Agreement
            </div>
            <div className="flex items-center">
              <img
                src="https://assets.nobroker.in/nb-new/public/Home/deliveryIcon.svg"
                alt=""
              />
              Next Day Delivery
            </div>
          </div>

          <div className="grid grid-cols-3 items-center border w-9/12 mx-auto text-center">
            <div className="border-r border-zinc-200 p-4">
              <Link>Buy</Link>
            </div>
            <div className="border-r border-zinc-200 p-4">
              <Link>Rent</Link>
            </div>
            <div className="p-4">
              <Link>Commercial</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
