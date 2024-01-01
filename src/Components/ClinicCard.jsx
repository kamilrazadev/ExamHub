import React from "react";
import clinicImage from "/images/hospital.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReviewStars from "./ReviewStars";

const ClinicCard = () => {
  return (
    <div className="w-full px-[10px] py-[25px] pb-0">
      <div className="flex gap-[15px]">
        <div className="clinic-card-950:min-w-[230px] clinic-card-950:max-w-[230px] w-[30%]">
          <img
            src={clinicImage}
            alt="Clinic Image"
            className="w-full rounded-xl"
          />
        </div>

        <div className="clinic-card-720:text-[13px] text-[11px] flex  flex-col justify-center">
          <h1 className="text-[20px] clinic-card-720:text-[30px] text-examhub-blue-purple font-black leading-7 mb-2">
            Midwest Express Clinic, West Loop
          </h1>

          <div className="flex items-center gap-2">
            <p>Urgent Care</p>
            <p>*open until 8pm</p>
          </div>

          <p>779 W Adam St, Chicago</p>

          <div className="flex items-center  gap-2 my-2">
            <ReviewStars rating={3.6} />
            <p className="text-examhub-blue-purple font-semibold">
              <b className="font-black">3.5</b>&nbsp; Overall rating
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span>👦</span>
              <p>Accept Kids</p>
            </div>

            <div className="flex items-center gap-2">
              <span>✨</span>
              <p>Highly Rated</p>
            </div>
          </div>

          <div className="flex items-end mt-1">
            <b className="font-black mr-1">Accepts </b> self-pay and most
            insurance{" "}
            <span className="text-examhub-blue-purple mb-[1px] text-[18px]">
              <MdKeyboardArrowDown className="cursor-pointer" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[25px] w-full h-[1.8px] bg-[#ffffff66] shadow"></div>
    </div>
  );
};

export default ClinicCard;
