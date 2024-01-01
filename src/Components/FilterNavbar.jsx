import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import PaymentOptionsCard from "./PaymentOptionsCard";

const FilterNavbar = () => {
  return (
    <>
      <nav className="w-full px-3 mt-5 bg-transparent">
        <div className="w-full h-[40px] bg-[#ffffff69] rounded-lg flex items-center max-[480px]:justify-between max-[480px]:px-5 max-[480px]:text-[14px] text-[#373174] shadow-md ">
          <div className="px-10 max-[480px]:p-0">
            <PaymentOptionsCard />
          </div>
          <p className="px-10 max-[480px]:p-0 font-black flex items-center cursor-pointer ">
            Filters <MdKeyboardArrowDown className="text-[22px] self-end" />
          </p>
          <p className="px-10 max-[480px]:p-0 font-black flex items-center cursor-pointer ">
            Sort <MdKeyboardArrowDown className="text-[22px] self-end" />
          </p>
        </div>
      </nav>
    </>
  );
};

export default FilterNavbar;
