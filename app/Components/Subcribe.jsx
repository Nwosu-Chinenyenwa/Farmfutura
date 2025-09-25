import React from "react";

export default function Subcribe() {
  return (
    <section className="faq py-[100px] flex flex-col items-center justify-center px-5">
      <div>
        <div className="mb-[30px] text-center">
          <h3 className="text-[25px] mb-[10px] font-extrabold text-[#333333]">
            Subscribe newsletter
          </h3>
          <p className="max-w-[605px] text-[#7a7e9a] text-[16px] font-[400] leading-1.8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laboreonsectetur adipiscinet dolore .
          </p>
        </div>

        <form className="lg:flex lg:items-center lg:justify-center lg:gap-3 w-full">
          <input
            className="flex-1 cursor-pointer lg:w-auto lg:border lg:border-dashed border-[#209e2e] h-[55px] outline-0 pl-[25px] bg-white text-[#333333] rounded-4xl"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="bg-[#209e2e] w-full lg:w-auto xl:w-[18vw] h-[55px] flex justify-center items-center lg:px-8 gap-1 text-white cursor-pointer transition rounded-4xl mt-5 lg:mt-0">
            <p className="font-medium lg:text-[17px]">Subscribe Now</p>
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
