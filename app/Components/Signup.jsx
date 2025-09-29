import React from "react";
import AllNav from "./AllNav";
import Subcribe from "./Subcribe";
import Footer from "./Footer";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <section className="pagetitle">
        <AllNav />
        <div className="py-50 bg-[#00000093] text-white text-center">
          <h1 className="text-[30px] font-extrabold">SignUp</h1>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Link href={"/pages/Home"}></Link>
              <p className="cursor-pointer">Home</p>
              <span className="w-[5px] h-[5px] rounded-full bg-[#209e2e] block"></span>
              <p className="cursor-pointer">Signup</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-10 px-2 mt-10 md:flex md:items-center md:justify-center ">
          <form className="md:shadow-sm  md:px-8 py-8 px-2 md:w-[60vw] xl:w-[40vw]">
            <h3
              className="text-[28px] mb-[30px] text-center  font-bold "
            >
              Create Your Account
            </h3>

            <div className="grid gap-5">
              <input
                className="border-1 border-[#8080802a] focus:border-1 focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]"
                type="text"
                placeholder="Username"
              />
              <input
                className="border-1 border-[#8080802a] focus:border-1 focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]"
                type="text"
                placeholder="Email"
              />
              <input
                className="border-1 border-[#8080802a] focus:border-1 focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]"
                type="text"
                placeholder="Password"
              />
              <span className="flex items-center gap-3">
                <input type="checkbox" />
                <p
                  className=" text-[#7a7e9a] font-[400]"
                >
                  Keep Me Signup
                </p>
              </span>
              <button className="bg-[#209e2e] md:px-5 cursor-pointer p-3 px-6 w-fit text-white rounded-4xl">
                Signup Now
              </button>
            </div>

            <span
              className="flex mt-5 text-[#7a7e9a]"
            >
              <p>Already a registered user? </p>
              <Link href={"/pages/Login"}>
                <p className="text-[#209e2e] ml-1">Login!</p>
              </Link>
            </span>
          </form>
        </div>
      </section>
      <Subcribe />
      <Footer />
    </>
  );
}
