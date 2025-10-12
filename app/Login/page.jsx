"use client";

import React, { useState } from "react";
import AllNav from "../Components/AllNav";
import Subcribe from "../Components/Subcribe";
import Footer from "../Components/Footer";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { login } from "@/lib/utils/auth-helpers"; 

export default function page() {
  const [load, setLoad] = useState(false);
  const [message, setmessage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoad(true);
    setmessage("");

    try {
      await login(email, password); 
      toast.success("Logged in successfully");
      router.push("/Home");
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Invalid email or password";
      setmessage(errMsg);
      toast.error(errMsg);
    } finally {
      setLoad(false);
    }
  }

  return (
    <>
      <section className="pagetitle">
        <AllNav />
        <div className="py-50 bg-[#00000093] text-white text-center">
          <h1 className="text-[30px] font-extrabold">Login</h1>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Link href={"/Home"}>
                <p className="cursor-pointer">Home</p>
              </Link>
              <span className="w-[5px] h-[5px] rounded-full bg-[#209e2e] block"></span>
              <p className="cursor-pointer">Login</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-10 px-2 mt-10 md:flex md:items-center md:justify-center ">
          <form
            onSubmit={handleSubmit} // <- attached handler here
            className="md:shadow-sm  md:px-8 py-8 px-2 md:w-[60vw] xl:w-[40vw]"
          >
            <div className="mb-[30px]">
              <h3 className="text-[28px]  text-center  font-bold text-[#333333]">
                Welcome Back
              </h3>
              <p className="mt-1 text-center text-[#33333397]">
                Please login to your account.
              </p>
            </div>

            <div className="flex items-center justify-center gap-5">
              <button
                type="button"
                className="google xl:w-[13vw] items-center text-[#413f3f] shadow-sm justify-center mb-5 flex gap-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
                Google
              </button>

              <button
                type="button"
                className="google xl:w-[13vw] bg-[#1778f2] text-white items-center shadow-sm justify-center mb-5 flex gap-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                </svg>
                Facebook
              </button>
            </div>

            <div className="grid gap-5">
              <input
                className="border-1 border-[#8080802a] placeholder:text-[#7a7e9a] focus:border-1 focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                className="border-1 border-[#8080802a] focus:border-1 focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <span className="flex justify-between">
                <span className="flex items-center gap-3">
                  <input type="checkbox" />
                  <p className="text-[#7a7e9a] font-[400]">Keep Me Login</p>
                </span>
                <Link href={"/ForgottenPassword"}>
                  <p className="underline text-[#7a7e9a] font-[400] cursor-pointer">
                    Forgot Password?
                  </p>
                </Link>
              </span>

              {/* show loading animation or submit button (unchanged UI) */}
              {load ? (
                <div className="newtons-cradle">
                  <div className="newtons-cradle__dot"></div>
                  <div className="newtons-cradle__dot"></div>
                  <div className="newtons-cradle__dot"></div>
                  <div className="newtons-cradle__dot"></div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-[#209e2e] md:px-5 cursor-pointer p-3 px-6 w-fit text-white rounded-4xl"
                >
                  Login Now
                </button>
              )}
            </div>

            <span className="flex mt-5 text-[#7a7e9a]">
              <p>Don't have account?</p>
              <Link href={"/Signup"}>
                <p className="text-[#209e2e] ml-1 cursor-pointer"> Signup!</p>
              </Link>
            </span>
          </form>
        </div>
      </section>
      <Toaster />
      <Subcribe />
      <Footer />
    </>
  );
}
