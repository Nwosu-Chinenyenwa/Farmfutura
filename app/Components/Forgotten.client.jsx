"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "../backend/lib/superbaseClient";
import Subcribe from "./Subcribe";
import Footer from "./Footer";
import AllNav from "./AllNav";
import Link from "next/link";


export default function Forgotten() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const redirectTo = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/reset-password`;
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Password reset email sent. Check your inbox.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <section className="pagetitle">
           <AllNav />
           <div className="py-50 bg-[#00000093] text-white text-center">
             <h1 className="text-[30px] font-extrabold">Login</h1>
             <div>
               <div className="flex items-center justify-center gap-2">
                 <Link href={"/pages/Home"}>
                 <p className="cursor-pointer">Home</p>
                 </Link>
                 <span className="w-[5px] h-[5px] rounded-full bg-[#209e2e] block"></span>
                 <p className="cursor-pointer">Forgotten Password</p>
               </div>
             </div>
           </div>
         </section>
         <section>
           <div className="py-10 px-2 mt-10 md:flex md:items-center md:justify-center ">
             <form
               onSubmit={handleForgot}
               className="md:shadow-sm  md:px-8 py-8 px-2 md:w-[60vw] xl:w-[40vw]"
             >
               <div className="mb-[30px]">
                 <h3 className="text-[28px]  text-center  font-bold text-[#333333]">
                   Welcome Back
                 </h3>
                 <p className="mt-1 text-center text-[#33333397]">
                  Are you sure you want to reset your password?
                 </p>
               </div>
   
               
   
               <div className="grid gap-5">
                 <input
                   className="border-1 border-[#8080802a] placeholder:text-[#7a7e9a] focus:border-1 focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]"
                   type="text"
                   placeholder="Email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                 />
                 <span className="flex justify-between">
                 </span>
                 {loading ? (
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
                     Send reset email
                   </button>
                 )}
               </div>
   
               <span className="flex mt-5 text-[#7a7e9a]">
                 <p>Pemembered Password?</p>
                 <Link href={"/pages/Login"}>
                   <p className="text-[#209e2e] ml-1 cursor-pointer"> Login!</p>
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
