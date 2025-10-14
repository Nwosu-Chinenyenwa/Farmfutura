"use client";

import React, { useState } from "react";
import AllNav from "../Components/AllNav";
import Subcribe from "../Components/Subcribe";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import * as z from "zod";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [comfirm, setComfirm] = useState("");
  const [load, setLoad] = useState(false);
  const [isvisible, setisvisible] = useState(false);
  const router = useRouter();

  const signupSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      }),
  });

  const handleGoogleSignup = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) toast.error(error.message);
      else toast.success("Redirecting to Google...");
    } catch (error) {
      toast.error("Error with Google Signup");
      console.error(error);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
      });
      if (error) toast.error(error.message);
      else toast.success("Redirecting to Facebook...");
    } catch (error) {
      toast.error("Error with Facebook Signup");
      console.error(error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoad(true);

    if (comfirm !== password) {
      setLoad(false);
      return;
    }

    const result = signupSchema.safeParse({ email, password });
    if (!result.success) {
      // Zod errors live under `error.issues`
      const first = result.error?.issues?.[0];
      const msg = first?.message || "Validation failed";
      setMessage(msg);
      toast.error(msg);
      setLoad(false);
      return;
    }

    try {
      // ensure any leftover password-reset flag is cleared so verify flow is correct
      sessionStorage.setItem("verificationEmail", email);
      sessionStorage.removeItem("isPasswordReset");

      const resp = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "verification",
          email,
          password,
          isPasswordReset: false,
          origin:
            typeof window !== "undefined" ? window.location.origin : undefined,
        }),
      });

      const json = await resp.json();

      if (!resp.ok) {
        const errMsg = json?.error || "Failed to send verification email";
        toast.error(errMsg);
        setMessage(errMsg);
        setLoad(false);
        return;
      }

      toast.success("Verification email sent. Check your inbox.");
      router.push("/Verify");
    } catch (err) {
      console.error(err);
      const msg =
        err && err.message ? err.message : "An error occurred during signup";
      toast.error(msg);
      setMessage(msg);
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      <section className="pagetitle">
        <AllNav />
        <div className="py-50 bg-[#00000093] text-white text-center">
          <h1 className="text-[30px] font-extrabold">SignUp</h1>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Link href={"/Home"}></Link>
              <p className="cursor-pointer">Home</p>
              <span className="w-[5px] h-[5px] rounded-full bg-[#209e2e] block"></span>
              <p className="cursor-pointer">Signup</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 px-2 mt-10 md:flex md:items-center md:justify-center">
          <form
            onSubmit={handleSignup}
            className="md:shadow-sm md:px-8 py-8 px-2 md:w-[60vw] xl:w-[40vw]"
          >
            <h3 className="text-[28px] mb-[30px] text-center font-bold">
              Create Your Account
            </h3>

            <div className="flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={handleGoogleSignup}
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
                onClick={handleFacebookSignup}
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

            <div className="flex items-center pb-5 text-[#7a7e9a] justify-center gap-5">
              <span className="block h-[0.5px] w-30 bg-[#80808072]"></span>
              <p>OR</p>
              <span className="block h-[0.5px] w-30 bg-[#80808072]"></span>
            </div>

            <div className="grid gap-5">
              <input
                className="border-1 border-[#8080802a] focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex border-1 border-[#8080802a] focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]">
                <input
                  className="focus:border-[#209e2e] outline-none w-full rounded-[5px]"
                  type={isvisible ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button className="cursor-pointer text-[#595c72]" type="button" onClick={() => setisvisible(!isvisible)}>
                  {
                    isvisible ? 
                    <Eye/>
                    : 
                    <EyeOff/>
                  }
                </button>
              </div>

              <input
                className="border-1 border-[#8080802a] focus:border-[#209e2e] outline-none w-full p-4 rounded-[5px]"
                type="password"
                placeholder="Comfirm Password"
                onChange={(e) => setComfirm(e.target.value)}
                required
              />
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
                  Signup Now
                </button>
              )}
            </div>

            <span className="flex mt-5 text-[#7a7e9a]">
              <p>Already a registered user?</p>
              <Link href={"/Login"}>
                <p className="text-[#209e2e] ml-1">Login!</p>
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
