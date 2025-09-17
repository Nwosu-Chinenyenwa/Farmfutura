"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/app/Components/Nav";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import _ScrollSmoother from "gsap/ScrollSmoother";
import shape2 from "../../../public/img/shape-2.png";
import shape1 from "../../../public/img/shape-1.png";
import logo from "../../../public/img/logo-two.png";
import rag from "../../../public/img/shape.png";
import sub1 from "../../../public/img/1.jpg";
import sub2 from "../../../public/img/2.jpg";
import sub3 from "../../../public/img/3.jpg";
import sub4 from "../../../public/img/4.jpg";
import sub5 from "../../../public/img/5.jpg";
import sub6 from "../../../public/img/6.jpg";
import sub7 from "../../../public/img/7.jpg";
import sub8 from "../../../public/img/8.jpg";
import tomato from "../../../public/img/tomato.png";
import fish from "../../../public/img/fish.png";
import onion from "../../../public/img/onion.png";
import veg1 from "../../../public/img/veg1.png";
import veg2 from "../../../public/img/veg2.png";
import veg3 from "../../../public/img/veg3.png";
import about1 from "../../../public/img/about1 (1).png";
import about2 from "../../../public/img/about2.png";
import about3 from "../../../public/img/about3.png";
import rag1 from "../../../public/img/shape-2 (1).png";
import about from "../../../public/img/aboutM.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function page() {
  const [showside, setshowside] = useState(false);
  const [hamburga, sethamburga] = useState(true);
  const [mode, setmode] = useState(false);

  let hamtoggle = () => sethamburga(!hamburga);

  let images = [
    {
      img: about1,
      alt: "about1",
      title: "Rich in nutrients but no formal or defect",
      distription: "Pure agro services",
    },
    {
      img: about2,
      alt: "about2",
      title: "Rich in nutrients but no formal or defect",
      distription: "Pure agro services",
    },
    {
      img: about3,
      alt: "about3",
      title: "Rich in nutrients but no formal or defect",
      distription: "Pure agro services",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (isHovered) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, [isHovered, images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") previousSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!images.length) return null;

  return (
    <>
      <section className={`${mode ? "bg-[#000000] text-white" : ""}`}>
        <section className="relative nav-hero">
          <div className="bg-[#000000d6]">
            <Image
              className="w-20 leave absolute hidden z-10 lg:block"
              src={shape2}
              alt="shape2"
            />
            <Image
              className="w-35 x absolute right-10 top-150 hidden lg:block"
              src={shape1}
              alt="shape1"
            />

            <div className="fixed bottom-5 right-5 z-20">
              <li className="lg:hidden bg-[#209e2e] list-none text-white p-2 border-1 rounded-[10px] border-[#209e2e] hover:text-white cursor-pointer transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5"
                >
                  <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
                </svg>

                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#82b440] rounded-full">
                  0
                </span>
              </li>
            </div>

            <div className="w-35 fixed left-1 top-125 lg:top-120 z-30">
              <div className="checkbox-wrapper-5">
                <div className="check">
                  <input
                    id="check-5"
                    type="checkbox"
                    checked={mode}
                    onChange={(e) => setmode(e.target.checked)}
                  />
                  <label htmlFor="check-5"></label>
                </div>
              </div>
            </div>

            <button className="bg-[#82b440] text-white fixed right-5 z-10 cursor-pointer top-70 shake-btn rounded-4xl p-1.5 px-4 font-medium hover:bg-[#15803d] lg:p-2 lg:px-5">
              Buy Now
            </button>

            <header>
              <nav className=" hidden lg:flex items-center justify-between text-white nav-border">
                <div className="p-5  border px-20">
                  <Image src={logo} alt="logo" />
                </div>
                <ul className="hidden lg:flex items-center gap-10 link p-5  border px-20 justify-center font-medium">
                  <li className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
                    Home
                  </li>

                  <li className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
                    About
                  </li>
                  <li className="group relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
                    <span className="flex items-center">
                      <span>Services</span>
                      <svg
                        className="w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </span>

                    <ul className="opacity-0 absolute group-hover:opacity-100 mt-10 bg-white text-black flex flex-col gap-2 w-50 p-5">
                      <li className="block hover:text-[#82b440] transition-all hover:ml-1 ">
                        Services
                      </li>
                      <li className="block hover:text-[#82b440] transition-all hover:ml-1">
                        Services Details
                      </li>
                    </ul>
                  </li>
                  <li className="group relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
                    <span className="flex items-center">
                      <span>Shop</span>
                      <svg
                        className="w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </span>

                    <ul className="opacity-0 absolute group-hover:opacity-100 mt-10 bg-white text-black flex flex-col gap-2 w-50 p-5">
                      <li className="block hover:text-[#82b440] transition-all hover:ml-1">
                        Shop
                      </li>
                      <li className="block hover:text-[#82b440] transition-all hover:ml-1">
                        Cart
                      </li>
                      <li className="block hover:text-[#82b440] transition-all hover:ml-1">
                        Checkout
                      </li>
                    </ul>
                  </li>
                  <li className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
                    News
                  </li>
                  <li className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
                    Contact
                  </li>
                </ul>

                <ul className="flex items-center p-5  gap-5 px-20">
                  <li>
                    <svg
                      className="w-9 text-[#b7b7b7] p-2 border-1 rounded-[10px] border-[#b7b7b7] hover:text-white hover:bg-[#82b440] cursor-pointer transition"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                  </li>
                  <li className=" relative text-[#b7b7b7] p-2 border-1 rounded-[10px] border-[#b7b7b7] hover:text-white hover:bg-[#82b440] cursor-pointer transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5"
                    >
                      <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
                    </svg>

                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#82b440] rounded-full">
                      0
                    </span>
                  </li>

                  <li onClick={() => setshowside(true)}>
                    <svg
                      className="w-9 text-[#b7b7b7] p-2 border-1 rounded-[10px] border-[#b7b7b7]  hover:text-white hover:bg-[#82b440] cursor-pointer transition"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V10C11 10.5523 10.5523 11 10 11H4C3.44772 11 3 10.5523 3 10V4ZM3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4ZM13 14C13 13.4477 13.4477 13 14 13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H14C13.4477 21 13 20.5523 13 20V14ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"></path>
                    </svg>
                  </li>
                </ul>
              </nav>

              <section className="flex lg:hidden flex-col relative">
                <nav className="flex  w-[100vw] bg-white justify-between items-center p-3">
                  <Image src={logo} alt="logo" />

                  <svg
                    onClick={hamtoggle}
                    className="w-8 cursor-pointer z-30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
                  </svg>
                </nav>
                {hamburga && (
                  <section className="fixed z-20  justify-center flex items-center ">
                    <div className="justify-center  w-[100vw] h-[60vh] flex items-center shadow-sm">
                      <ul className=" w-[90vw] bg-white h-[40vh] overflow-y-scroll relative bottom-3">
                        <li className="flex  justify-between p-3 rounded-sm border-b-1 border-[#8080803f] ">
                          <p className="text-[#82b440]">Home</p>
                          <svg
                            className="w-6 text-[gray]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM12 15C13.3807 15 14.5 13.8807 14.5 12.5C14.5 11.1193 13.3807 9.99998 12 9.99998C10.6193 9.99998 9.5 11.1193 9.5 12.5C9.5 13.8807 10.6193 15 12 15Z"></path>
                          </svg>
                        </li>
                        <li className="flex  justify-between p-3 rounded-sm border-b-1 border-[#8080803f] ">
                          <p className="text-[#82b440]">About</p>
                          <svg
                            className="w-6 text-[gray]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM11.6113 4.22157L3.83316 11.9997L12.3184 20.485L20.0966 12.7069L19.036 5.28223L11.6113 4.22157ZM13.7327 10.5855C12.9516 9.80448 12.9516 8.53815 13.7327 7.7571C14.5137 6.97606 15.78 6.97606 16.5611 7.7571C17.3421 8.53815 17.3421 9.80448 16.5611 10.5855C15.78 11.3666 14.5137 11.3666 13.7327 10.5855Z"></path>
                          </svg>
                        </li>
                        <li className="flex  justify-between p-3 rounded-sm border-b-1 border-[#8080803f] ">
                          <p className="text-[#82b440]">Services</p>
                          <svg
                            className="w-6 text-[gray]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M11 19V9H4V19H11ZM11 7V4C11 3.44772 11.4477 3 12 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H11ZM13 5V19H20V5H13ZM5 16H10V18H5V16ZM14 16H19V18H14V16ZM14 13H19V15H14V13ZM14 10H19V12H14V10ZM5 13H10V15H5V13Z"></path>
                          </svg>
                        </li>
                        <li className="flex  justify-between p-3 rounded-sm border-b-1 border-[#8080803f] ">
                          <p className="text-[#82b440]"> Services Details</p>
                          <svg
                            className="w-6 text-[gray]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M11 7V4C11 3.44772 11.4477 3 12 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H11ZM5 16V18H10V16H5ZM14 16V18H19V16H14ZM14 13V15H19V13H14ZM14 10V12H19V10H14ZM5 13V15H10V13H5Z"></path>
                          </svg>
                        </li>
                        <li className="flex  justify-between p-3 rounded-sm border-b-1 border-[#8080803f] ">
                          <p className="text-[#82b440]">Shop</p>
                          <svg
                            className="w-6 text-[gray]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12.0049 0.999695C14.7663 0.999695 17.0049 3.23827 17.0049 5.99969V7.99969H20.0049C20.5572 7.99969 21.0049 8.44741 21.0049 8.99969V20.9997C21.0049 21.552 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.552 3.00488 20.9997V8.99969C3.00488 8.44741 3.4526 7.99969 4.00488 7.99969H7.00488V5.99969C7.00488 3.23827 9.24346 0.999695 12.0049 0.999695ZM17.0049 10.9997H15.0049V11.9997C15.0049 12.552 15.4526 12.9997 16.0049 12.9997C16.5177 12.9997 16.9404 12.6137 16.9982 12.1163L17.0049 11.9997V10.9997ZM9.00488 10.9997H7.00488V11.9997C7.00488 12.552 7.4526 12.9997 8.00488 12.9997C8.51772 12.9997 8.94039 12.6137 8.99815 12.1163L9.00488 11.9997V10.9997ZM12.0049 2.99969C10.4072 2.99969 9.10122 4.24861 9.00998 5.82342L9.00488 5.99969V7.99969H15.0049V5.99969C15.0049 4.40201 13.756 3.09603 12.1812 3.00479L12.0049 2.99969Z"></path>
                          </svg>
                        </li>
                        <li className="flex  justify-between p-3 rounded-sm border-b-1 border-[#8080803f] ">
                          <p className="text-[#82b440]">Cart</p>
                          <svg
                            className="w-6 text-[gray]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
                          </svg>
                        </li>
                        <li className="flex  justify-between p-3 rounded-sm border-b-1 border-[#8080803f] ">
                          <p className="text-[#82b440]">Checkout</p>
                          <svg
                            className="w-6 text-[gray]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                          </svg>
                        </li>
                        <li className="flex  justify-between p-3 rounded-sm border-b-1 border-[#8080803f] ">
                          <p className="text-[#82b440]">News</p>
                          <svg
                            className="w-6 text-[gray]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM18 9H14V7H18V9ZM14 13V11H18V13H14ZM6 17V15L18 15V17L6 17Z"></path>
                          </svg>
                        </li>
                        <li className="flex  justify-between p-3 rounded-sm border-b-1 border-[#8080803f] ">
                          <p className="text-[#82b440]">Contact</p>
                          <svg
                            className="w-6 text-[gray]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4 2C3.44772 2 3 2.44772 3 3V5H5V7H2V9H5V11H2V13H5V15H2V17H5V19H3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2H4ZM9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16H9ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z"></path>
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </section>
                )}
              </section>
            </header>

            <section className="lg:py-30 py-20">
              <div className="flex justify-start items-center">
                <div className=" flex-col hidden   items-center gap-10 lg:flex">
                  <div className="flex  bg-transparent">
                    <p className="text-white font-medium transform rotate-90 origin-center ">
                      Follow us
                    </p>
                  </div>
                  <span className="block h-5 w-0.5  bg-white rounded-4xl"></span>
                  <span className="flex flex-col gap-5">
                    <svg
                      className="w-6 transition hover:text-[#82b440] cursor-pointer text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"></path>
                    </svg>

                    <svg
                      className="w-6 text-white transition hover:text-[#82b440] cursor-pointer "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                    </svg>

                    <svg
                      className="w-6 text-white transition hover:text-[#82b440] cursor-pointer "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
                    </svg>

                    <svg
                      className="w-6 text-white transition hover:text-[#82b440] cursor-pointer "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                    </svg>
                  </span>
                </div>

                <div className="mr-auto max-w-[630px] flex flex-col gap-2 lg:gap-5">
                  <div>
                    <span className="flex gap-2 items-center">
                      <span className="flex flex-col items-center gap-1 lg:gap-2 list-none px-3 border-dotted border-r-2 border-[gray]">
                        <li className=" relative w-10 lg:w-14 p-3 rounded-4xl text-white bg-[#eefbf2]">
                          <Image
                            className="lg:w-8 w-5 invert-[50%] sepia-[90%] saturate-[500%] hue-rotate-[90deg]"
                            src={onion}
                            alt="onion"
                          />
                          <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#209e2e] rounded-full">
                            2
                          </span>
                        </li>
                        <p className="text-white lg:text-[15px] text-[10px] font-medium">
                          Vegetable
                        </p>
                      </span>

                      <span className="flex flex-col items-center lg:gap-2 gap-1 list-none px-3 border-dotted border-r-2 border-[gray]">
                        <li className=" relative lg:w-14 w-10 p-3 rounded-4xl text-white bg-[#eefbf2]">
                          <Image
                            className="lg:w-8 w-5 invert-[50%] sepia-[90%] saturate-[500%] hue-rotate-[90deg]"
                            src={fish}
                            alt="onion"
                          />
                          <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#209e2e] rounded-full">
                            2
                          </span>
                        </li>
                        <p className="text-white lg:text-[15px] text-[10px] font-medium">
                          Fish
                        </p>
                      </span>

                      <span className="flex flex-col items-center lg:gap-2 gap-1 list-none px-3 ">
                        <li className=" relative lg:w-14 w-10 p-3 rounded-4xl text-white bg-[#eefbf2]">
                          <Image
                            className="lg:w-8 w-5 invert-[50%] sepia-[90%] saturate-[500%] hue-rotate-[90deg]"
                            src={tomato}
                            alt="onion"
                          />
                          <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#209e2e] rounded-full">
                            2
                          </span>
                        </li>
                        <p className="text-white lg:text-[15px] text-[10px] font-medium">
                          Tomatos
                        </p>
                      </span>
                    </span>
                  </div>

                  <h1
                    className="text-white lg:text-[55px] text-[26px] font-bold"
                  >
                    Vegetable and fruits are Good for Health
                  </h1>
                  <p className="text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis commodi esse sequi laborum! Omnis magnam, itaque,
                    dicta, voluptates culpa perferendis cumque earum fugit
                    eveniet quasi vel et molestias illo sunt.
                  </p>

                  <span className="flex gap-5 flex-wrap">
                    <button className="bg-[#209e2e] flex justify-center items-center lg:px-8 gap-1 text-white cursor-pointer transition p-3 rounded-4xl hover:bg-white hover:text-[#209e2e]">
                      <p className="font-medium lg:text-[17px]">What we do</p>
                      <svg
                        className="w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                      </svg>
                    </button>

                    <button className="hover:bg-[#209e2e] flex justify-center items-center lg:px-8 gap-1 hover:text-white cursor-pointer transition p-3 rounded-4xl bg-white text-[#209e2e]">
                      <p className="font-medium lg:text-[17px]">
                        Visit our Firm
                      </p>
                      <svg
                        className="w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>
        {showside && (
          <section className="top-0 bg-[#000000c0] h-[100vh] fixed w-[100vw] z-10 transition">
            <div className="bg-white slideIn w-[30vw] absolute right-0  h-[100vh] overflow-y-scroll  p-10 flex flex-col gap-10">
              <div className="flex justify-end">
                <svg
                  onClick={() => setshowside(false)}
                  className="w-7 font-bold  text-[#595656] relative hover:text-black cursor-pointer transition"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
              </div>
              <span>
                <h1 className="font-[700] text-[24px] text-[#333333]">
                  About us
                </h1>
                <p className="text-[#7a7e9a] font-[400] leading-[1.8] text-[15px]">
                  We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication. No fake products and services.
                  The customer is king, their lives and needs are the
                  inspiration.
                </p>
              </span>

              <span className="flex flex-col gap-5">
                <h1 className="font-[700] text-[24px] text-[#333333]">
                  Instagram
                </h1>
                <span className="justify-center flex flex-col gap-3">
                  <span className="flex gap-3">
                    <Image className="w-15" src={sub1} alt="pic" />
                    <Image className="w-15" src={sub2} alt="pic" />
                    <Image className="w-15" src={sub3} alt="pic" />
                    <Image className="w-15" src={sub4} alt="pic" />
                  </span>
                  <span className="flex gap-3">
                    <Image className="w-15" src={sub5} alt="pic" />
                    <Image className="w-15" src={sub6} alt="pic" />
                    <Image className="w-15" src={sub7} alt="pic" />
                    <Image className="w-15" src={sub8} alt="pic" />
                  </span>
                </span>
                <p className="text-center font-extrabold text-[#0c810c] hover:text-black cursor-pointer transition text-[20px]">
                  +088 130 629 8615
                </p>
                <p className="text-center font-bold text-[#7a7e9a]">OR</p>
                <p className="font-bold hover:text-[#209e2e] text-[20px] cursor-pointer text-center">
                  trifles@gmail.com
                </p>
                <ul className="flex gap-3 justify-center items-center">
                  <svg
                    className="w-8 rounded-4xl border-1 border-[#aba5a5] text-[#aba5a5] p-2 hover:text-white hover:bg-[#0c810c] hover:border-0 cursor-pointer transition"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
                  </svg>

                  <svg
                    className="w-8 rounded-4xl border-1 border-[#aba5a5] text-[#aba5a5] p-2 hover:text-white hover:bg-[#0c810c] hover:border-0 cursor-pointer transition"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                  </svg>

                  <svg
                    className="w-8 rounded-4xl border-1 border-[#aba5a5] text-[#aba5a5] p-2 hover:text-white hover:bg-[#0c810c] hover:border-0 cursor-pointer transition"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
                  </svg>

                  <svg
                    className="w-8 rounded-4xl border-1 border-[#aba5a5] text-[#aba5a5] p-2 hover:text-white hover:bg-[#0c810c] hover:border-0 cursor-pointer transition"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                  </svg>

                  <svg
                    className="w-8 rounded-4xl border-1 border-[#aba5a5] text-[#aba5a5] p-2 hover:text-white hover:bg-[#0c810c] hover:border-0 cursor-pointer transition"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"></path>
                  </svg>
                </ul>
              </span>
            </div>
          </section>
        )}

        <section className="relative bottom-3 lg:bottom-6 z-0">
          <Image src={rag} alt="shape2" />
        </section>

        <section className="lg:pt-[100px] pt-[50px] pb-[30px] lg:pb-[100px]">
          <div>
            <span className="text-center">
              <p className="text-[#209e2e] lg:text-[15px] font-[400] text-[14px]">
                CULTIVATION AREA
              </p>
              <h3 className={`${mode ? "text-white" : "text-[#333333]"} lg:text-[36px] text-[26px] font-bold`}>
                We are triple areas of farm
              </h3>
              <p className={`${mode ? "text-white" : "text-[#7a7e9a]"} "text-[16px] font-[400] leading-[1.8] lg:max-w-[605px] m-auto`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut laboreonsectetur adipiscinet
                dolore.
              </p>
            </span>

            <div className="flex flex-wrap justify-center items-center lg:gap-10 gap-5 mt-[30px] lg:mt-[50px]">
              <div className={`${mode ? "bg-[#0e0e0e] text-white" : "bg-[#d2ecd4]"} lg:w-[28vw] w-[90vw] p-8 relative lg:px-10 lg:py-10`}>
                <span>
                  <p className={`${mo}text-[#209e2e] text-[14px]`}>
                    {" "}
                    Authentic Vegetable
                  </p>
                  <h3 className="text-[25px] text-[#5a5959] font-extrabold leading-[1.2] my-2">
                    Vegetables
                  </h3>
                  <button className="bg-[#eafef1] flex justify-center items-center lg:px-5 relative left-2 gap-1 cursor-pointer transition p-2 lg:p-3 rounded-4xl border-1 border-[#209e2e] text-[#209e2e]">
                    <p className="font-medium lg:text-[17px]">Visit Sector</p>
                    <svg
                      className="w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    </svg>
                  </button>
                </span>
                <Image
                  className="relative left-10 lg:left-20 top-10"
                  src={veg1}
                  alt="shape1"
                />
              </div>
              <div className="bg-[#fdedce] lg:w-[28vw] w-[90vw] p-8 relative lg:px-10 lg:py-10">
                <span>
                  <p className="text-[#209e2e] text-[14px]"> Breed Cow</p>
                  <h3 className="text-[25px] text-[#5a5959] font-extrabold leading-[1.2] my-2">
                    Breed Cow
                  </h3>
                  <button className="bg-[#eafef1] flex justify-center items-center lg:px-5 relative left-2 gap-1 cursor-pointer transition p-2 lg:p-3 rounded-4xl border-1 border-[#209e2e] text-[#209e2e]">
                    <p className="font-medium lg:text-[17px]">Visit Sector</p>
                    <svg
                      className="w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    </svg>
                  </button>
                </span>
                <Image
                  className="relative left-10 lg:left-20 top-10"
                  src={veg2}
                  alt="shape1"
                />
              </div>
              <div className="bg-[#d2ecd4] lg:w-[28vw] w-[90vw] p-8 relative lg:px-10 lg:py-10">
                <span>
                  <p className="text-[#209e2e] text-[14px]"> Fresh fish</p>
                  <h3 className="text-[25px] text-[#5a5959] font-extrabold leading-[1.2] my-2">
                    Natural Fish
                  </h3>
                  <button className="bg-[#eafef1] flex justify-center items-center lg:px-5 relative left-2 gap-1 cursor-pointer transition p-2 lg:p-3 rounded-4xl border-1 border-[#209e2e] text-[#209e2e]">
                    <p className="font-medium lg:text-[17px]">Visit Sector</p>
                    <svg
                      className="w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    </svg>
                  </button>
                </span>
                <Image
                  className="relative left-10 lg:left-20 top-10"
                  src={veg3}
                  alt="shape1"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4faf4]">
          <Image src={rag1} alt="rag1" />

          <div>
            <div className="flex items-center w-[90vw] m-auto my-[60px]">
              <span className="w-[60vw]">
                <span className="text-[#209e2e] text-[15px] block mb-[8px]">
                  KNOW ABOUT US
                </span>
                <h2 className="text-[38px] font-[700] text-[#333333]">
                  The territory might be safe is vegetable easy to get
                </h2>
              </span>

              <span className="  border-l-1 border-[#7a7e9a]">
                <p className="leading-[1.8]  pl-10 text-[#7a7e9a] font-[400] text-[16px] max-w-[600px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </span>
            </div>

            <div className="flex">
              <Image className="w-[40vw] h-auto" src={about} alt="seller" />

              <div>
                <div>
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <div className="flex">
                      <SwiperSlide>
                        <div>
                          <Image
                            className="w-[20vw] h-auto relative top-2"
                            src={about1}
                            alt="seller"
                          />
                          <div className="w-[20vw] border-1 border-dashed border-t-0 py-5 px-3 rounded-sm border-[#209e2e] bg-[#fdfdfd] flex flex-col item-center gap-2">
                            <li className="flex gap-2 items-center">
                              <p className="bg-[#209e2e] rounded-4xl block w-3 h-3"></p>
                              <p className="text-[#209e2e] text-[15px] leading-1 font-[500]">
                                Pure agro services
                              </p>
                            </li>
                            <h3 className="text-[#333333] font-[800]">
                              Rich in nutrients but no formal or defect
                            </h3>
                          </div>
                        </div>
                        <div>
                          <Image
                            className="w-[20vw] h-auto relative top-2"
                            src={about2}
                            alt="seller"
                          />
                          <div className="w-[20vw] border-1 border-dashed border-t-0 py-5 px-3 rounded-sm border-[#209e2e] bg-[#fdfdfd] flex flex-col item-center gap-2">
                            <li className="flex gap-2 items-center">
                              <p className="bg-[#209e2e] rounded-4xl block w-3 h-3"></p>
                              <p className="text-[#209e2e] text-[15px] leading-1 font-[500]">
                                Pure agro services
                              </p>
                            </li>
                            <h3 className="text-[#333333] font-[800]">
                              Rich in nutrients but no formal or defect
                            </h3>
                          </div>
                        </div>
                        <div>
                          <Image
                            className="w-[20vw] h-auto relative top-2"
                            src={about3}
                            alt="seller"
                          />
                          <div className="w-[20vw] border-1 border-dashed border-t-0 py-5 px-3 rounded-sm border-[#209e2e] bg-[#fdfdfd] flex flex-col item-center gap-2">
                            <li className="flex gap-2 items-center">
                              <p className="bg-[#209e2e] rounded-4xl block w-3 h-3"></p>
                              <p className="text-[#209e2e] text-[15px] leading-1 font-[500]">
                                Pure agro services
                              </p>
                            </li>
                            <h3 className="text-[#333333] font-[800]">
                              Rich in nutrients but no formal or defect
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>

                  <h3 className="text-[#333333] text-[25px] font-bold">
                    Life is not like a species do you believe?
                  </h3>
                  <p className="text-[#7a7e9a] text-[16px] font-[400] leading-[1.8]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    dorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                  <ul className="flex gap-2  flex-col flex-wrap">
                    <span className="flex gap-5">
                      <li className="flex items-center gap-2">
                        <svg
                          className="border-1 w-[35px] p-2 rounded-4xl border-[#209e2e] text-[#209e2e] bg-[#eafef1]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path>
                        </svg>
                        <p className="text-[16px] font-[400]">
                          Get Back to Healthy Life
                        </p>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="border-1 w-[35px] p-2 rounded-4xl border-[#209e2e] text-[#209e2e] bg-[#eafef1]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path>
                        </svg>
                        <p className="text-[16px] font-[400]">
                          {" "}
                          Wake up Refreshed
                        </p>
                      </li>
                    </span>
                    <span className="flex gap-5">
                      <li className="flex items-center gap-2">
                        <svg
                          className="border-1 w-[35px] p-2 rounded-4xl border-[#209e2e] text-[#209e2e] bg-[#eafef1]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path>
                        </svg>
                        <p className="text-[16px] font-[400]">
                          Set a Healthier Lifestyle
                        </p>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="border-1 w-[35px] p-2 rounded-4xl border-[#209e2e] text-[#209e2e] bg-[#eafef1]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path>
                        </svg>
                        <p className="text-[16px] font-[400]">
                          Boost Energy & Metabolism
                        </p>
                      </li>
                    </span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
