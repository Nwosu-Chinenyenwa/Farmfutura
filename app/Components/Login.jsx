import React from "react";
import AllNav from "./AllNav";
import Subcribe from "./Subcribe";
import Footer from "./Footer";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <section className="pagetitle">
        <AllNav />
        <div className="py-50 bg-[#00000093] text-white text-center">
          <h1 className="text-[30px] font-extrabold">Login</h1>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Link href={"/pages/Home"}></Link>
              <p className="cursor-pointer">Home</p>
              <span className="w-[5px] h-[5px] rounded-full bg-[#209e2e] block"></span>
              <p className="cursor-pointer">Login</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-10 px-2 mt-10 md:flex md:items-center md:justify-center ">
          <form className="md:shadow-sm  md:px-8 py-8 px-2 md:w-[60vw] xl:w-[40vw]">
            <div className="mb-[30px]">
              <h3 className="text-[28px]  text-center  font-bold text-[#333333]">
                Welcome Back
              </h3>
              <p className="mt-1 text-center text-[#33333397]">
                Please login to your account.
              </p>
            </div>

            <div className="grid gap-5">
              <input
                className="border-1 border-[#8080802a] placeholder:text-[#7a7e9a] focus:border-1 focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]"
                type="text"
                placeholder="Email"
              />
              <input
                className="border-1 border-[#8080802a] focus:border-1 focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]"
                type="text"
                placeholder="Password"
              />
              <span className="flex justify-between">
                <span className="flex items-center gap-3">
                  <input type="checkbox" />
                  <p className="text-[#7a7e9a] font-[400]">Keep Me Login</p>
                </span>
                <p className=" text-[#7a7e9a] font-[400] cursor-pointer">
                  Forgot Password?
                </p>
              </span>
              <button className="bg-[#209e2e] md:px-5 cursor-pointer p-3 px-6 w-fit text-white rounded-4xl">
                Login Now
              </button>
            </div>

            <span className="flex mt-5 text-[#7a7e9a]">
              <p>Don't have account?</p>
              <Link href={"/pages/Signup"}>
                <p className="text-[#209e2e] ml-1 cursor-pointer"> Signup!</p>
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
