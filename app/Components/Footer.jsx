import React from "react";
import payment from "../../public/img/payment-4_370x.avif";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <section className="bg-[#000000d6] pt-[50px]  lg:pt-[100px] flex flex-col items-center justify-center">
        <div className="w-[90vw] flex flex-col items-center justify-center">
          <div className="text-white  flex-col lg:flex lg:flex-row m-auto border-b-1 border-dashed pb-[50px] border-[#209e2e] justify-center gap-10">
            <ul className="lg:w-[25%] max-w-[100%]">
              <h3 className="text-[20px] font-bold mb-[30px]">About Trifles</h3>
              <p className="leading-[25px] text-[16px] font-[400] mb-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
              </p>
              <li className="flex items-center text-[#209e2e] gap-2 cursor-pointer">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
                </svg>
                <p className="text-[18px] font-[500]">FIND US ON MAP</p>
              </li>
            </ul>
            <ul className="lg:w-[25%] max-w-[100%]">
              <h3 className="text-[20px] font-bold mb-[30px]">About Trifles</h3>
              <p className="leading-[25px] text-[16px] font-[400] mb-[5px]">
                Help and Ordering
              </p>
              <p className="leading-[25px] text-[16px] font-[400] mb-[5px]">
                Return & Cancellation
              </p>
              <p className="leading-[25px] text-[16px] font-[400] mb-[5px]">
                Delevery Schedule
              </p>
              <p className="leading-[25px] text-[16px] font-[400] mb-[5px]">
                Get a Call
              </p>
              <p className="leading-[25px] text-[16px] font-[400] mb-[5px]">
                Online Enquiry
              </p>
              <p className="leading-[25px] text-[16px] font-[400] mb-[5px] hover:text-[#209e2e] transition hover:ml-2 cursor-pointer">
                My Account
              </p>
            </ul>

            <ul className="lg:w-[25%] max-w-[100%]">
              <h3 className="text-[20px] font-bold mb-[30px]">Contact info</h3>

              <ul className="flex flex-col gap-3">
                <li>
                  <span className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 text-[#b48017]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                    </svg>
                    <h3 className="font-[400] text-[14px] uppercase">
                      Location
                    </h3>
                  </span>
                  <p>2750 Quadra Street Victoria Road, New York, Canada</p>
                </li>

                <li>
                  <span className="flex items-center gap-2  mb-2">
                    <svg
                      className="w-5 text-[#b48017]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                    </svg>
                    <h3 className="font-[400] text-[14px] uppercase">
                      Call Us
                    </h3>
                  </span>
                  <p className="leading-[25px] text-[16px] font-[400] mb-[5px] hover:text-[#209e2e] transition hover:ml-2 cursor-pointer">
                    987-0986-0987
                  </p>
                </li>
                <li>
                  <span className="flex items-center gap-2  mb-2">
                    <svg
                      className="w-5 text-[#b48017]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                    </svg>
                    <h3 className="font-[400] text-[14px] uppercase">
                      Email Us
                    </h3>
                  </span>
                  <p className="leading-[25px] text-[16px] font-[400] mb-[5px] hover:text-[#209e2e] transition hover:ml-2 cursor-pointer">
                    hello@trifles.com
                  </p>
                </li>
              </ul>
            </ul>

            <ul className="lg:w-[20%] max-w-[100%]">
              <h3 className="text-[20px] font-bold mb-[30px]">Newsletter</h3>
              <p className="leading-[25px] text-[16px] font-[400] mb-[18px]">
                Lorem ipsum dolor sit amet, consectetur aing elit, sed do
                eiusmod tempor.
              </p>
              <ul>
                <input
                  className="text-[#333333] rounded-4xl border-1 border-dashed border-[#209e2e] w-[100%] h-[50px] outline-none text-[15px] placeholder:text-[#7a7e9a] bg-[#ffffff] pl-[25px]"
                  type="text"
                  placeholder="Enter Your name"
                />

                <button className="bg-[#209e2e] mt-5 w-[100%] h-[50px] flex justify-center items-center lg:px-8 gap-1 text-white cursor-pointer transition p-3 rounded-4xl hover:bg-[#5c5b5a] hover:text-white">
                  <p className="font-medium lg:text-[17px]">Subcribe Now</p>
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                  </svg>
                </button>

                <div>
                  <h5 className="mt-[30px] rajdhani-light  text-[18px] font-[700] text-white mb-2">
                   We Accept
                  </h5>
                  <Image
                    className="max-w-[100%] w-[100%] h-[100%]"
                    src={payment}
                    alt="payments"
                  />
                </div>
              </ul>
            </ul>
          </div>

          <div className="lg:flex text-center  justify-between text-[#ffffff] w-[90vw] py-10 text-[14px] font-[600]">
            <p>
              Copyright @ {year} Trifles. All Rights Reserved by{" "}
              <a className="font-[900]" href="">
                EnvyTheme
              </a>
            </p>
            <ul className="flex gap-3 mt-3 lg:mt-0 text-center items-center justify-center">
              <li className="border-r-2 border-[#209e2e] px-3 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="cursor-pointer ">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
