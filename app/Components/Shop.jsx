"use client";

import React, { useState } from "react";
import veg1 from "../../public/img/veg1.png";
import veg2 from "../../public/img/veg2.png";
import veg3 from "../../public/img/veg3.png";
import eggplant from "../../public/img/eggplant.png";
import milk from "../../public/img/milk.png";
import Image from "next/image";
import AllNav from "./AllNav";
import Link from "next/link";
import Subcribe from "./Subcribe";
import Footer from "./Footer";

export default function Shop() {
  const [activeIndex, setactiveIndex] = useState(0);
  return (
    <>
      <section className="pagetitle">
        <AllNav />
        <div className="py-50 bg-[#00000093] text-white text-center">
          <h1 className="text-[30px] font-extrabold">Shop</h1>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Link href={"/pages/Home"}></Link>
              <p className="cursor-pointer">Home</p>
              <span className="w-[5px] h-[5px] rounded-full bg-[#209e2e] block"></span>
              <p className="cursor-pointer">Shop</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 py-30 flex flex-col items-center justify-center gap-0 lg:gap-5">
        <p className="text-[#209e2e] text-center lg:text-[15px] font-[400] text-[14px]">
          VISIT OUR SHOP
        </p>
        <h2 className="text-[38px] text-center font-[700] text-[#333333]">
          Buy our product
        </h2>
        <p
          className="
          text-[#7a7e9a] text-[16px] font-[400] leading-[1.8] text-center md:max-w-[605px] lg:max-w-[605px] m-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laboreonsectetur adipiscinet dolore.
        </p>

        <span className="flex my-5 lg:mt-10 gap-5 lg:gap-0">
          <button
            onClick={() => setactiveIndex(0)}
            className={`border-dashed lg:border-r cursor-pointer border-[#209e2e] lg:px-[20px] text-[18px] font-[400] transition ${
              activeIndex === 0 ? "text-[#209e2e]" : "text-[#8d8c8c]"
            }`}
          >
            Fresh Milk
          </button>
          <button
            onClick={() => setactiveIndex(2)}
            className={`border-dashed lg:border-r cursor-pointer border-[#209e2e] lg:px-[20px] text-[18px] font-[400] transition ${
              activeIndex === 2 ? "text-[#209e2e]" : "text-[#8d8c8c]"
            }`}
          >
            Fresh Vegetable
          </button>
          <button
            onClick={() => setactiveIndex(3)}
            className={`border-dashed lg:border-r cursor-pointer border-[#209e2e] lg:px-[20px] text-[18px] font-[400] transition ${
              activeIndex === 3 ? "text-[#209e2e]" : "text-[#8d8c8c]"
            }`}
          >
            Fresh Fish
          </button>
        </span>

        <div>
          {activeIndex === 0 && (
            <div className="flex lg:flex-row lg:flex-wrap flex-col items-center justify-center  gap-5 slideDown">
              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg1}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Fresh Cauliflower
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $50
                  </span>

                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>

                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={eggplant}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Fresh Eggplant
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $40
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={milk}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Organic Milk
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $60
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeIndex === 2 && (
            <div className="flex lg:flex-row flex-col items-center justify-center  gap-5 slideDown">
              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg1}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Fresh Cauliflower
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $50
                  </span>

                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>

                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={eggplant}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Fresh Eggplant
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $40
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={milk}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Organic Milk
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $60
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeIndex === 3 && (
            <div className="flex lg:flex-row flex-col items-center justify-center  gap-5 slideDown">
              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg1}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Fresh Cauliflower
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $50
                  </span>

                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>

                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={veg3}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Bunch Fresh Fish
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $90
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={eggplant}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Fresh Eggplant
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $40
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                <div className=" flex flex-col gap-3 text-center items-center">
                  <Image
                    className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                    src={milk}
                    alt="shape1"
                  />
                  <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                    Organic Milk
                  </h3>
                  <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                    $60
                  </span>
                  <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                    <span className="flex gap-1">
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                      <svg
                        className="text-[#f4a708] w-[20px] group-hover:text-[#209e2e] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
                      </svg>
                    </span>
                    <span className="w-[25vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-5">
                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    <svg
                      className="w-12 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path>
                    </svg>

                    <svg
                      className="w-10 bg-[#eafef1] text-[#209e2e] border-1 p-2 hover:text-white hover:bg-[#209e2e] rounded-4xl transition cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 mt-10">
          <button className="w-12 h-12 flex items-center justify-center shadow-lg bg-white hover:text-white hover:bg-[#209e2e] transition cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6" // Icon stays centered
            >
              <path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path>
            </svg>
          </button>

          <button className="w-12 h-12 flex items-center justify-center shadow-lg bg-white  text-lg font-extrabold hover:text-white hover:bg-[#209e2e] transition cursor-pointer">
            1
          </button>
          <button className="w-12 h-12 flex items-center justify-center shadow-lg   text-lg font-extrabold hover:text-white hover:bg-[#209e2e] transition cursor-pointer">
            2
          </button>
          <button className="w-12 h-12 flex items-center justify-center shadow-lg bg-white  text-lg font-extrabold hover:text-white hover:bg-[#209e2e] transition cursor-pointer">
            3
          </button>
          <button className="w-12 h-12 flex items-center justify-center shadow-lg bg-white  text-lg font-extrabold hover:text-white hover:bg-[#209e2e] transition cursor-pointer">
            4
          </button>

          <button className="w-12 h-12 flex items-center justify-center shadow-lg  hover:text-white hover:bg-[#209e2e] transition cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path>
            </svg>
          </button>
        </div>

        <button className="bg-[#209e2e] mt-10 w-fit px-5 flex justify-center items-center lg:px-8 gap-1 text-white cursor-pointer transition p-3 rounded-4xl hover:bg-white hover:text-[#209e2e] border-1 border-[#209e2e]">
          <p className="font-medium lg:text-[17px]">All Products</p>
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
          </svg>
        </button>
      </section>
      <Subcribe />
      <Footer />
    </>
  );
}
