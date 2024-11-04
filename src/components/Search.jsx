import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Select from "react-select";

const Search = () => {
  const [selectedOption, setSelectedOption] = useState("Rent");

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  const cities = [
    { value: "Chennai", label: "Chennai" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Delhi", label: "Delhi" },
  ];
  const [selectedCityOption, setSelectedCityOption] = useState(cities[0]);
  const [selectedPropertyStatusOption, setSelectedPropertyStatusOption] =
    useState(null);
  const [selectedBhkOption, setSelectedBhkOption] = useState(null);
  const [selectedAvailabilityOption, setSelectedAvailabilityOption] =
    useState(null);
  const [selectedPropertyTypeOption, setSelectedPropertyTypeOption] =
    useState(null);
  const bhkType = [
    { value: "1 RK", label: "1 RK" },
    { value: "2 BHK", label: "2 BHK" },
    { value: "3 BHK", label: "3 BHK" },
    { value: "4 BHK", label: "4 BHK" },
    { value: "4+ BHK", label: "4+ BHK" },
  ];

  const propertyStatus = [
    { value: "Under Construction", label: "Under Construction" },
    { value: "Ready", label: "Ready" },
  ];

  const availability = [
    {
      value: "Immediate",
      label: "Immediate",
    },
    {
      value: "Within 15 Days",
      label: "Within 15 Days",
    },
    {
      value: "Within 30 Days",
      label: "Within 30 Days",
    },
    {
      value: "After 30 Days",
      label: "After 30 Days",
    },
  ];

  const propertyType = [
    {
      value: "Office Space",
      label: "Office Space",
    },
    {
      value: "Co-Working",
      label: "Co-Working",
    },
    {
      value: "Restaurant/Cafe",
      label: "Restaurant/Cafe",
    },
    {
      value: "Shop",
      label: "Shop",
    },
    {
      value: "Showroom",
      label: "Showroom",
    },
    {
      value: "Industrial Building",
      label: "Industrial Building",
    },
    {
      value: "Industrial Shed",
      label: "Industrial Shed",
    },
    {
      value: "Gowdown/Warehouse",
      label: "Gowdown/Warehouse",
    },
    {
      value: "Other business",
      label: "Other business",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <div className="flex flex-col gap-4 mt-5">
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
            |
            <div className="flex items-center">
              <img
                src="https://assets.nobroker.in/nb-new/public/Home/deliveryIcon.svg"
                alt=""
              />
              Next Day Delivery
            </div>
          </div>

          <div className="grid grid-cols-3 items-center border w-9/12 mx-auto text-center">
            <div
              className={` p-4 cursor-pointer ${
                selectedOption === "Buy"
                  ? "border-b-4 border-red-500 text-red-500"
                  : "border-r border-zinc-200"
              } `}
              onClick={() => handleSelectedOption("Buy")}
            >
              <Link className="">Buy</Link>
            </div>
            <div
              className={` p-4 cursor-pointer ${
                selectedOption === "Rent"
                  ? "border-b-4 border-red-500 text-red-500"
                  : "border-x border-zinc-200"
              } `}
              onClick={() => handleSelectedOption("Rent")}
            >
              <Link>Rent</Link>
            </div>
            <div
              className={` p-4 cursor-pointer ${
                selectedOption === "Commercial"
                  ? "border-b-4 border-red-500 text-red-500"
                  : "border-l border-zinc-200"
              } `}
              onClick={() => handleSelectedOption("Commercial")}
            >
              <Link>Commercial</Link>
            </div>
          </div>
        </div>

        <div className="w-8/12 flex flex-col">
          <div className="flex">
            <Select
              defaultValue={selectedCityOption}
              onChange={setSelectedCityOption}
              options={cities}
              className="min-w-fit"
              styles={{
                control: (base) => ({
                  ...base,
                  minHeight: "50px", // Set a fixed height
                  padding: "0 10px", // Add horizontal padding instead
                  border: "1px solid #d1d5db", // Adjust border color
                }),
              }}
            />
            <input
              type="search"
              name="search"
              id="search"
              className="border border-zinc-200 px-4 py-2.5 w-full outline-none"
              placeholder="Search upto 3 localities or landmarks"
            />
            <div className="bg-rose-500 text-white flex items-center text-2xl px-4 py-2.5">
              <BiSearch />
              <button type="submit">Search</button>
            </div>
          </div>

          {/* for Buy */}
          {selectedOption === "Buy" ? (
            <div className="flex gap-4 border border-zinc-200  p-2.5 items-center">
              <div>
                <input
                  type="radio"
                  name="land_type"
                  id="full_house"
                  value="full_house"
                />
                <label htmlFor="full_house" className="ml-1">
                  Full House
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="land_type"
                  id="land_plot"
                  value="land_plot"
                />
                <label htmlFor="land_plot" className="ml-1">
                  Land/Plot
                </label>
              </div>

              <Select
                placeholder="BHK Type"
                options={bhkType}
                isMulti
                defaultValue={selectedBhkOption}
                onChange={setSelectedBhkOption}
                styles={{
                  control: (base) => ({
                    ...base,
                    fontSize: "14px",
                    padding: "0 10px", // Add horizontal padding instead
                    minWidth: "200px",
                    border: "1px solid #d1d5db", // Adjust border color
                  }),
                }}
              />

              <Select
                placeholder="Property Status"
                options={propertyStatus}
                defaultValue={selectedPropertyStatusOption}
                onChange={setSelectedPropertyStatusOption}
                className="min-w-fit"
                styles={{
                  control: (base) => ({
                    ...base,
                    fontSize: "14px",
                    padding: "0 10px", // Add horizontal padding instead
                    minWidth: "200px",
                    border: "1px solid #d1d5db", // Adjust border color
                  }),
                }}
              />
              <div className="border border-[#d1d5db] flex gap-2 px-2.5 py-1.5">
                <input type="checkbox" name="new_project" id="new_project" />
                <label for="new_project">New Builder Projects</label>
              </div>
            </div>
          ) : // for Rent
          selectedOption === "Rent" ? (
            <div className="flex gap-4 border border-zinc-200  p-2.5 items-center">
              <div>
                <input
                  type="radio"
                  name="land_type"
                  id="full_house"
                  value="full_house"
                />
                <label htmlFor="full_house" className="ml-1">
                  Full House
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="land_type"
                  id="land_plot"
                  value="land_plot"
                />
                <label htmlFor="land_plot" className="ml-1">
                  Land/Plot
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="land_type"
                  id="flatmates"
                  value="flatmates"
                />
                <label htmlFor="flatmates" className="ml-1">
                  Flatmates
                </label>
              </div>

              <Select
                placeholder="BHK Type"
                options={bhkType}
                isMulti
                defaultValue={selectedBhkOption}
                onChange={setSelectedBhkOption}
                styles={{
                  control: (base) => ({
                    ...base,
                    fontSize: "14px",
                    padding: "0 10px", // Add horizontal padding instead
                    minWidth: "200px",
                    border: "1px solid #d1d5db", // Adjust border color
                  }),
                }}
              />

              <Select
                placeholder="Availability"
                options={availability}
                defaultValue={selectedAvailabilityOption}
                onChange={setSelectedAvailabilityOption}
                className="min-w-fit"
                styles={{
                  control: (base) => ({
                    ...base,
                    fontSize: "14px",
                    padding: "0 10px", // Add horizontal padding instead
                    minWidth: "200px",
                    border: "1px solid #d1d5db", // Adjust border color
                  }),
                }}
              />
            </div>
          ) : // for Commercial
          selectedOption === "Commercial" ? (
            <div className="flex gap-4 border border-zinc-200  p-2.5 items-center">
              <div>
                <input type="radio" name="land_type" id="rent" value="rent" />
                <label htmlFor="full_house" className="ml-1">
                  Rent
                </label>
              </div>
              <div>
                <input type="radio" name="land_type" id="buy" value="buy" />
                <label htmlFor="buy" className="ml-1">
                  Buy
                </label>
              </div>

              <Select
                placeholder="Property Type"
                options={propertyType}
                defaultValue={selectedPropertyTypeOption}
                onChange={setSelectedPropertyTypeOption}
                className="min-w-fit"
                styles={{
                  control: (base) => ({
                    ...base,
                    fontSize: "14px",
                    padding: "0 10px", // Add horizontal padding instead
                    minWidth: "200px",
                    border: "1px solid #d1d5db", // Adjust border color
                  }),
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Search;
