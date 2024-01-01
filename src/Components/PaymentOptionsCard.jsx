import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const PaymentOptionsCard = () => {
  const [showPaymentFilter, setShowPaymentFilter] = useState(false);

  return (
    <>
      <p
        className="font-black flex items-center cursor-pointer"
        onClick={() => setShowPaymentFilter(true)}
      >
        Insurance <MdKeyboardArrowDown className="text-[22px] self-end" />
      </p>
      <div
        className={`fixed top-0 left-0 w-full h-screen  justify-center items-center bg-[#ffffff92] transition-opacity duration-300 ${
          showPaymentFilter ? "flex" : "hidden"
        }`}
        //   onClick={() => setShowPaymentFilter(false)}
      >
        <div
          className="w-[500px] max-w-[90%] text-[14px] rounded-b-xl rounded-t-3xl"
          style={{ boxShadow: "2px 3px 8px 2px #0006" }}
        >
          <div className="relative bg-[#DCF1FA] rounded-t-3xl py-4 flex justify-center items-center">
            <span
              className="absolute top-0 right-0 cursor-pointer"
              onClick={() => setShowPaymentFilter(false)}
            >
              x
            </span>

            <h3 className="text-examhub-blue-purple font-black text-[22px]">
              PAYMENT OPTIONS
            </h3>
          </div>
          <div className="bg-[#373174] py-5 px-6 rounded-b-xl">
            <div>
              <ul className="text-white flex flex-col gap-3">
                <li className="flex gap-4">
                  <input type="checkbox" name="" id="" value="Cash" />
                  <p className="font-bold">Cash</p>
                </li>
                <li className="flex gap-4">
                  <input type="checkbox" name="" id="" value="Card" />
                  <p className="font-bold">Card</p>
                </li>
                <li className="flex gap-4">
                  <input type="checkbox" name="" id="" value="PayPal" />
                  <p className="font-bold">PayPal</p>
                </li>
                <li className="flex gap-4">
                  <input type="checkbox" name="" id="" value="Humana" />
                  <p className="font-bold">Humana</p>
                </li>
                <li className="flex gap-4">
                  <input type="checkbox" name="" id="" value="Medicaid" />
                  <p className="font-bold">Medicaid</p>
                </li>
                <li className="flex gap-4">
                  <input type="checkbox" name="" id="" value="Medicare" />
                  <p className="font-bold">Medicare</p>
                </li>
                <li className="flex gap-4">
                  <input type="checkbox" name="" id="" value="Tricare" />
                  <p className="font-bold">Tricare</p>
                </li>
              </ul>
            </div>
            <p className="text-white font-bold my-5 text-[11px] ">
              Not all exams are covered by insurances we accept.
            </p>
            <div className="flex justify-end gap-4 ">
              <button className="px-[10px] py-[6px] rounded text-white font-extrabold  hover:bg-[#DCF1FA] hover:text-examhub-blue-purple transition-all">
                Clear
              </button>
              <button className="px-[10px] py-[6px] rounded bg-[#DCF1FA] text-examhub-blue-purple border-[1.5px] border-[#DCF1FA] font-extrabold hover:text-[#DCF1FA] hover:bg-transparent transition-all">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentOptionsCard;
