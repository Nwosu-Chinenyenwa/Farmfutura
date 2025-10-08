"use client";

import React from "react";
import AllNav from "./AllNav";
import Footer from "./Footer";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Subcribe from "./Subcribe";

export default function Contact() {
  return (
    <>
      <section className="pagetitle">
        <AllNav />
        <div className="py-50 bg-[#00000093] text-white text-center">
          <h1 className="text-[30px] font-extrabold">Contact us</h1>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Link href={"/pages/Home"}>
                <p className="cursor-pointer">Home</p>
              </Link>
              <span className="w-[5px] h-[5px] rounded-full bg-[#209e2e] block"></span>
              <p className="cursor-pointer">Contact</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] p-2 flex flex-wrap gap-3 items-center justify-center">
        <div className="border-[#ededed] border-2 text-center w-[399px] flex flex-col items-center justify-center flex-wrap pt-[50px] pb-[25px] px-[25px]">
          <FaPhone className="text-[#80b500] max-w-[80px] text-6xl mb-[20px] p-3 border-1 border-dashed border-[#80b500] transition hover:bg-[#80b500] hover:text-[white] rounded-full" />
          ,
          <h3 className="text-[#071c1f] mb-[15px] font-[700] leading-1.3 text-[24px] rajdhani-light">
            Phone Number
          </h3>
          <span className="font-[400] text-[#747171] text-[16px] flex flex-col gap-2 leading-1.8">
            <a href="tel:09061703513">090961703513</a>
            <a href="tel:09061703513">23490961703513</a>
          </span>
        </div>
        <div className="border-[#ededed] border-2 text-center w-[399px] flex flex-col items-center justify-center flex-wrap pt-[50px] pb-[25px] px-[25px]">
          <FaEnvelope className="text-[#80b500] max-w-[80px] text-6xl mb-[20px] p-3 border-1 border-dashed border-[#80b500] transition hover:bg-[#80b500] hover:text-[white] rounded-full" />
          ,
          <h3 className="text-[#071c1f] mb-[15px] font-[700] leading-1.3 text-[24px] rajdhani-light">
            Email Address
          </h3>
          <span className="font-[400] text-[#747171] text-[16px] flex flex-col gap-2 leading-1.8">
            <a href="mailto:nwosuchinenyenwa4@gmail.com">090961703513</a>
            <a href="mailto:nwosuchinenyenwa4@gmail.com">090961703513</a>
          </span>
        </div>
        <div className="border-[#ededed] border-2 text-center w-[399px] flex flex-col items-center justify-center flex-wrap pt-[50px] pb-[25px] px-[25px]">
          <FaMapMarkerAlt className="text-[#80b500] max-w-[80px] text-6xl mb-[20px] p-3 border-1 border-dashed border-[#80b500] transition hover:bg-[#80b500] hover:text-[white] rounded-full" />
          ,
          <h3 className="text-[#071c1f] mb-[15px] font-[700] leading-1.3 text-[24px] rajdhani-light">
            Address
          </h3>
          <span className="font-[400] text-[#747171] text-[16px] flex flex-col gap-1 leading-1.8">
            <p>10 20Calabar street, Aba,</p>
            <p>Abia State, Nigeria</p>
          </span>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-[38px] text-[#333333] font-bold mb-[10ppx] text-center  rajdhani-light">
            Drop us a message for any query
          </h3>
          <p className="max-w-[605px] m-auto leading-1.8 text-[#7a7e9a] mb-[14px] font-[400] text-[16px] text-center">
            If you have an idea, we would love to hear about it.
          </p>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center py-10">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full focus:border-2 border-1 border-[#209e2e] rounded-md p-3 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full focus:border-2  border-1 border-[#209e2e] rounded-md p-3 outline-none"
                  />
                </div>
              </div>

              <div className="grid focus:border-2 grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full focus:border-2 border-1 border-[#209e2e] rounded-md p-3 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full focus:border-2 border-1 border-[#209e2e] rounded-md p-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full focus:border-2  border-1 border-[#209e2e] rounded-md p-3 outline-none"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Subcribe />
      <Footer />
    </>
  );
}
