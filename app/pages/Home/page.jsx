"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
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
import eggplant from "../../../public/img/eggplant.png";
import milk from "../../../public/img/milk.png";
import more1 from "../../../public/asset/1 (1).png";
import more2 from "../../../public/asset/2.png";
import more3 from "../../../public/asset/3 (1).png";
import more4 from "../../../public/asset/4.png";
import more5 from "../../../public/asset/5.png";
import more6 from "../../../public/asset/6.png";
import more7 from "../../../public/asset/7.png";
import more8 from "../../../public/asset/8.png";
import more9 from "../../../public/asset/shape-2.png";
import more10 from "../../../public/asset/shape.png";
import morerag1 from "../../../public/asset/shape (1).png";
import morerag2 from "../../../public/asset/shape-2 (1).png";
import cowimg from "../../../public/asset/cow-image.png";
import agree1 from "../../../public/asset/agree1.png";
import agree from "../../../public/asset/agree.png";
import deal1 from "../../../public/asset/newsletter-popup-1_570x.webp";
import deal2 from "../../../public/asset/11_470x.webp";
import Footer from "@/app/Components/Footer";
import cultivationWhite from "../../../public/asset/cultivation-white.png";
import { FaTruck } from "react-icons/fa";
import Search from "@/app/Components/Search";
import { GiFishEggs } from "react-icons/gi";
import Link from "next/link";
import {
  GiPlantRoots,
  GiWheat,
  GiCorn,
  GiTomato,
  GiCarrot,
} from "react-icons/gi";
import { MdOutlineEmojiPeople, MdOutlineAgriculture } from "react-icons/md";
import Products from "@/app/Components/Products";
import Subcribe from "@/app/Components/Subcribe";
import AllNav from "@/app/Components/AllNav";

export default function page() {
  const [displayNav, setdisplayNav] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);
  const [mode, setmode] = useState(false);
  const [faq, setfaq] = useState(0);
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  /* 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mo, setmo] = useState(false);

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

  if (!images.length) return null; */

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let index = 0;
    const items = scrollContainer.children;
    const itemWidth = items[0]?.offsetWidth + 12;

    const interval = setInterval(() => {
      index++;
      if (index >= items.length) index = 0;

      scrollContainer.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const Scroll = () => {
      if (window.scrollY > 100) {
        setdisplayNav(true);
      } else {
        setdisplayNav(false);
      }
    };

    window.addEventListener("scroll", Scroll);

    return () => window.removeEventListener("scroll", Scroll);
  }, []);
  return (
    <>
      <section>
        {displayNav ? (
          <div className="hidden lg:block">
            <Nav />
          </div>
        ) : (
          ""
        )}
        <section className="relative nav-hero ">
          <div className="bg-[#000000d6]">
            <Image
              className="w-20 leave absolute hidden lg:block"
              src={shape2}
              alt="shape2"
            />
            <Image
              className="w-35 x absolute right-10 lg:top-140 xl:top-150 hidden lg:block"
              src={shape1}
              alt="shape1"
            />

            <div className="fixed bottom-5 right-5 z-10">
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

            <button className="bg-[#82b440] text-white fixed  right-10 xl:right-5 z-10 cursor-pointer top-70 shake-btn rounded-4xl p-1.5 px-4 font-medium hover:bg-[#15803d] xl:p-2 xl:px-5">
              Buy Now
            </button>
            <AllNav />
            <section className="lg:py-30 py-20 md:py-30 px-2 lg:px-0">
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

                <div className="mr-auto max-w-[630px] md:px-10 md:gap-5 flex flex-col gap-2 lg:gap-5">
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
                            1
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
                            3
                          </span>
                        </li>
                        <p className="text-white lg:text-[15px] text-[10px] font-medium">
                          Tomatos
                        </p>
                      </span>
                    </span>
                  </div>

                  <h1 className="text-white lg:text-[37px] xl:text-[40px] xl:font-extrabold xl:leading-15 text-[26px] font-bold">
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
      

        <section className="relative bottom-3 lg:bottom-6">
          <Image src={rag} alt="shape2" />
        </section>

        <Products />

        <section className="lg:pt-[100px] pt-[50px] pb-[30px] lg:pb-[100px] p-2 lg:p-0">
          <div>
            <span className="text-center">
              <p className="text-[#209e2e] lg:text-[15px] font-[400] text-[14px]">
                CULTIVATION AREA
              </p>
              <h3
                className={`${
                  mode ? "text-white" : "text-[#333333]"
                } lg:text-[36px] text-[26px] font-bold`}
              >
                We are triple areas of farm
              </h3>
              <p
                className={`${
                  mode ? "text-white" : "text-[#7a7e9a]"
                } "text-[16px] font-[400] leading-[1.8] md:max-w-[605px] lg:max-w-[605px] m-auto`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut laboreonsectetur adipiscinet
                dolore.
              </p>
            </span>

            <div className="flex flex-wrap  md:flex md:flex-wrap justify-center items-center lg:gap-10 gap-5 mt-[30px] lg:mt-[50px]">
              <div
                className={`${
                  mode ? "bg-[#0e0e0e] text-white" : "bg-[#d2ecd4]"
                } lg:w-[28vw] md:w-[45vw] w-[90vw] p-8 relative lg:px-10 lg:py-10`}
              >
                <span>
                  <p className={`${mode}text-[#209e2e] text-[14px]`}>
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
              <div className="bg-[#fdedce] lg:w-[28vw] md:w-[45vw] w-[90vw] p-8 relative lg:px-10 lg:py-10">
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
              <div className="bg-[#d2ecd4] lg:w-[28vw] md:w-[45vw] w-[90vw] p-8 relative lg:px-10 lg:py-10">
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

        <section className="bg-[#f4faf4] ">
          <Image src={rag1} alt="rag1" />

          <div className="pb-10 ">
            <div>
              <div className="lg:flex items-center lg:w-[90vw] xl:w-[80vw] m-auto my-[30px] pl-1 md:w-[90vw] md:py-10 md:m-auto md:pt-10">
                <span className="w-[60vw]">
                  <span className="text-[#209e2e] text-[14px] lg:text-[15px] block mb-[8px]">
                    KNOW ABOUT US
                  </span>
                  <h2 className="text-[25px] lg:text-[30px] xl:text-[38px] font-[700] text-[#333333]">
                    The territory might be safe is vegetable easy to get
                  </h2>
                </span>

                <span className="lg:border-l-1 border-[#7a7e9a]">
                  <p className="leading-[1.8]  xl:text-[14px] lg:pl-10 text-[#7a7e9a] font-[400] text-[16px] lg:max-w-[600px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </span>
              </div>

              <div className="flex flex-col lg:flex-row md:gap-0 gap-10 xl:gap-10 lg:gap-5 justify-center items-center">
                <Image
                  className="w-[90vw] lg:w-[43vw] xl:w-[40vw]"
                  src={about}
                  alt="seller"
                />

                <div className="xl:w-[40vw] lg:w-[50vw] p-2 xl:p-0  lg:p-0">
                  <div className="flex flex-col gap-3 ">
                    <div
                      ref={scrollRef}
                      className="flex lg:w-[50vw] xl:w-[40vw] w-[95vw] md:w-[90vw] lg:justify-start justify-center items-center gap-3 overflow-x-scroll no-scrollbar"
                    >
                      <div>
                        <Image
                          className="w-[90vw]  md:w-[45vw]  xl:w-[20vw] h-auto relative top-2"
                          src={about2}
                          alt="seller"
                        />
                        <div className="w-[90vw]  md:w-[45vw] lg:w-[20vw] border-1 border-dashed border-t-0 py-5 px-3 rounded-sm border-[#209e2e] bg-[#fdfdfd] flex flex-col item-center gap-2">
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
                          className="w-[90vw] md:w-[45vw]  lg:w-[20vw] h-auto relative top-2"
                          src={about2}
                          alt="seller"
                        />
                        <div className="w-[90vw]  md:w-[45vw] lg:w-[20vw] border-1 border-dashed border-t-0 py-5 px-3 rounded-sm border-[#209e2e] bg-[#fdfdfd] flex flex-col item-center gap-2">
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
                          className="w-[90vw]  md:w-[45vw]  lg:w-[20vw] h-auto relative top-2"
                          src={about3}
                          alt="seller"
                        />
                        <div className="w-[90vw]  md:w-[45vw] lg:w-[20vw] border-1 border-dashed border-t-0 py-5 px-3 rounded-sm border-[#209e2e] bg-[#fdfdfd] flex flex-col item-center gap-2">
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
                    </div>

                    <h3 className="text-[#333333] text-[25px] p-2 lg:p-0 font-bold">
                      Life is not like a species do you believe?
                    </h3>
                    <p className="text-[#7a7e9a] text-[14px] p-2 lg:p-0  lg:text-[16px] font-[400] leading-[1.8]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed dorem ipsum dolor sit amet, consectetur adipiscing.
                    </p>
                    <ul className="flex gap-2 p-2 lg:p-0 flex-col flex-wrap">
                      <span className="flex lg:flex-row flex-col gap-2 lg:gap-5">
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
                      <span className="flex lg:flex-row flex-col gap-2 lg:gap-5">
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
          </div>

          <div className="flex justify-center items-center">
            <ul className="flex flex-col md:grid md:grid-cols-2 xl:flex lg:flex lg:gap-0 gap-5 lg:flex-row items-center justify-center w-[90vw] lg:w-[85vw] bg-[#ffffff] rounded-[5px] relative top-20 py-10 fun-facts-content-area">
              <li className="flex  lg:w-[25%] border-dashed lg:border-r-1 border-[#209e2e] flex-col items-center text-[#209e2e]  font-[300] text-[50px]">
                <span>120+</span>
                <p className="text-[16px] font-[400]">Category Vegetable</p>
              </li>
              <li className="flex  lg:w-[25%] border-dashed lg:border-r-1 border-[#209e2e] flex-col items-center text-[#209e2e] font-[300] text-[50px]">
                <span>560+</span>
                <p className="text-[16px] font-[400]">Home Supplier</p>
              </li>
              <li className="flex  lg:w-[25%] border-dashed lg:border-r-1 border-[#209e2e] flex-col items-center text-[#209e2e] font-[300] text-[50px]">
                <span>145+</span>
                <p className="text-[16px] font-[400]">Seasonal Vegetables</p>
              </li>
              <li className="flex lg:w-[25%]  flex-col items-center text-[#209e2e] font-[300] text-[50px]">
                <span>200+</span>
                <p className="text-[16px] font-[400]">Attended Event</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-30 py-30 flex flex-col items-center justify-center gap-0 lg:gap-5">
          <p className="text-[#209e2e] text-center lg:text-[15px] font-[400] text-[14px]">
            VISIT OUR SHOP
          </p>
          <h2 className="text-[38px] text-center font-[700] text-[#333333]">
            Buy our product
          </h2>
          <p
            className={`${
              mode ? "text-white" : "text-[#7a7e9a]"
            } "text-[16px] font-[400] leading-[1.8] text-center md:max-w-[605px] lg:max-w-[605px] m-auto`}
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

        <section className="flex items-center justify-center relative">
          <div className="bg-[#fefaf0] ">
            <Image src={morerag2} alt="morerag1" />
            <div className="flex items-center justify-center relative bg-[#fefaf0] py-20">
              <Image
                className="absolute left-0 hidden lg:block"
                src={more9}
                alt="morerag2"
              />
              <div className="w-[80vw] overflow-hidden border-b border-[#209e2e] border-dashed">
                <div className="flex  lg:animate-slide-x">
                  <Image
                    className=" px-10 py-5 w-[35vw] border-r-1 border-[#209e2e] border-dashed"
                    src={more1}
                    alt="more1"
                  />
                  <Image
                    className=" px-10 py-5 w-[35vw] border-r-1 border-[#209e2e] border-dashed"
                    src={more2}
                    alt="more2"
                  />
                  <Image
                    className=" px-10 py-5 w-[35vw] border-r-1 border-[#209e2e] border-dashed"
                    src={more3}
                    alt="more3"
                  />
                  <Image
                    className=" px-10 py-5 w-[35vw] border-r-1 border-[#209e2e] border-dashed"
                    src={more4}
                    alt="more4"
                  />
                  <Image
                    className=" px-10 py-5 w-[35vw] border-r-1 border-[#209e2e] border-dashed"
                    src={more5}
                    alt="more5"
                  />
                  <Image
                    className=" px-10 py-5 w-[35vw] border-r-1 border-[#209e2e] border-dashed"
                    src={more6}
                    alt="more6"
                  />
                  <Image
                    className=" px-10 py-5 w-[35vw] border-r-1 border-[#209e2e] border-dashed"
                    src={more7}
                    alt="more7"
                  />
                  <Image
                    className=" px-10 py-5 w-[35vw] border-r-1 border-[#209e2e] border-dashed"
                    src={more8}
                    alt="more8"
                  />
                </div>
              </div>
              <Image
                className="absolute right-0 hidden lg:block"
                src={more10}
                alt="morerag3"
              />
            </div>
            <Image src={morerag1} alt="morerag1" />
          </div>
        </section>

        <section className="py-30 flex flex-col items-center justify-center">
          <p className="text-[#209e2e] text-center lg:text-[15px] font-[400] text-[14px]">
            AREA FISH AND COW
          </p>
          <h2 className="lg:text-[38px] text-[27px] text-center font-[700] text-[#333333]">
            Rest of the two sector here
          </h2>
          <p
            className={`${
              mode ? "text-white" : "text-[#7a7e9a]"
            } "text-[14px] lg:text-[16px] font-[400] leading-[1.8] text-center lg:max-w-[605px] m-auto`}
          >
            Olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut laboreonsectetur adipiscinamet, consectetur
            adipiscingmpor.
          </p>

          <div className="flex flex-wrap justify-center gap-2 lg:gap-5 items-center">
            <button className="bg-[#209e2e] mt-10 px-5 w-fit flex justify-center items-center lg:px-8 gap-1 text-white cursor-pointer transition p-3 rounded-4xl hover:bg-white hover:text-[#209e2e] border-1 border-[#209e2e]">
              <p className="font-medium lg:text-[17px]">See Cow Farm</p>
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </button>

            <button className="bg-[#ffdd9b] mt-10 w-fit px-5 flex justify-center items-center lg:px-8 gap-1 text-[#5c5b5a] border-1 border-[#5a5959] cursor-pointer transition p-3 rounded-4xl hover:bg-[#209e2e] hover:text-white">
              <p className="font-medium lg:text-[17px]">See Fish Farm</p>
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </button>
          </div>

          <Image className="mt-10" src={cowimg} alt="cow" />
        </section>

        <section className="flex items-center justify-center relative">
          <div>
            <Image src={morerag2} alt="morerag1" />

            <div className="faq p-2 md:items-start md:justify-start xl:items-center xl:justify-center lg:justify-center lg:items-center lg:py-20 flex lg:flex-row gap-5 lg:gap-0 flex-col items-center justify-center">
              <div className="lg:w-[40vw] flex flex-col gap-2">
                <p className="text-[#209e2e] font-[400] text-[14px]">
                  frequently questions
                </p>
                <h2 className="text-[27px] lg:text-[30px] xl:text-[38px] font-[700] text-[#333333]">
                  The question a lot time we get from our customer
                </h2>
                <button className="bg-[#209e2e] lg:mt-5 w-fit px-5  flex justify-center items-center lg:px-8 gap-1 text-white cursor-pointer transition p-3 rounded-4xl hover:bg-[#5c5b5a] hover:text-white">
                  <p className="font-medium lg:text-[17px]">Ask Yours</p>
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                  </svg>
                </button>
              </div>

              <div className="lg:w-[45vw] flex flex-col gap-5">
                <span>
                  <li
                    onClick={() => setfaq(0)}
                    className="list-none flex items-center  cursor-pointer"
                  >
                    <svg
                      className="w-[8vw] md:w-[5vw] lg:w-[3vw] xl:w-[2vw] mr-[5px] text-[#209e2e]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    </svg>
                    <p className="text-[#696d8b] font-extrabold text-[15px] md:text-[20px] lg:text-[15px] xl:text-[20px]">
                      Why will we buy products from this company?
                    </p>
                  </li>

                  {faq === 0 && (
                    <p className="text-[14px] md:text-[16px] lg:text-[15] xl:text-[16px] faq font-[400] text-[#7a7e9a] leading-[1.8] pt-[10px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed dorem ipsum dolor sit amet, consectetur adipiscing.
                    </p>
                  )}
                </span>
                <span>
                  <li
                    onClick={() => setfaq(1)}
                    className="list-none flex items-center cursor-pointer"
                  >
                    <svg
                      className="w-[8vw] md:w-[5vw] lg:w-[3vw] xl:w-[2vw] mr-[5px] text-[#209e2e]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    </svg>
                    <p className="text-[#696d8b] font-extrabold text-[15px] md:text-[20px] lg:text-[15px] xl:text-[20px]">
                      Is it possible to have natural products?
                    </p>
                  </li>
                  {faq === 1 && (
                    <p className="text-[14px] md:text-[16px] lg:text-[15] xl:text-[16px] faq font-[400] text-[#7a7e9a] leading-[1.8] pt-[10px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed dorem ipsum dolor sit amet, consectetur adipiscing.
                    </p>
                  )}
                </span>
              </div>
            </div>
            <Image src={morerag2} alt="morerag1" />
          </div>
        </section>

        <section className="flex lg:flex-row flex-col  relative mt-15 lg:mt-0">
          <div className="xl:w-[50vw] lg:w-[60vw] p-2 lg:p-0 flex flex-col gap-3 bg-transparent relative lg:left-30">
            <p className="text-[#209e2e]  lg:text-[15px] font-[400] text-[14px]">
              A SUMMARY
            </p>
            <h2 className="text-[25px] lg:text-[30px] xl:text-[38px]  font-[700] text-[#333333]">
              A brief what we use how use the impression help you
            </h2>
            <p
              className={`${
                mode ? "text-white" : "text-[#7a7e9a]"
              } "text-[14px] lg:text-[16px] font-[400] leading-[1.8`}
            >
              On the first paragraph crucial text will be appeared consectetur
              adicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore..
            </p>
            <p
              className={`${
                mode ? "text-white" : "text-[#7a7e9a]"
              }"text-[14px] lg:text-[16px] font-[400] leading-[1.8] ]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            <button className="bg-[#eafef1] px-5 mt-5 w-fit flex justify-center items-center lg:px-8 gap-1 text-[#209e2e] cursor-pointer transition border-1 border-[#209e2e] p-3 rounded-4xl hover:bg-[#209e2e] hover:text-white">
              <p className="font-medium lg:text-[17px]">Cultivatons</p>
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
              </svg>
            </button>
          </div>

          <div className="relative flex">
            <Image src={agree} alt="agree" />
            <Image
              className="absolute right-0 w-[100vw] md:w-[70vw] lg:w-[40vw]"
              src={agree1}
              alt="agree"
            />
          </div>
        </section>

        <section className="py-30 hidden lg:block mt-20">
          <div className="flex flex-col items-center w-full">
            {/* Icons row */}
            <div className="flex justify-between w-[80%] relative transition-all duration-500">
              {showFirst ? (
                <>
                  {/* First 4 */}
                  <div className="flex flex-col items-center">
                    <MdOutlineEmojiPeople className="text-green-600 text-6xl" />
                    <p className="mt-2 text-lg font-bold text-gray-800">
                      Use of Land
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <GiFishEggs className="text-green-600 text-6xl" />
                    <p className="mt-2 text-lg font-bold text-gray-800">
                      Feed of Fish
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaTruck className="text-green-600 text-6xl" />
                    <p className="mt-2 text-lg font-bold text-gray-800">
                      Home Delivery
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <GiPlantRoots className="text-green-600 text-6xl" />
                    <p className="mt-2 text-lg font-bold text-gray-800">
                      Planting
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Second 4 */}
                  <div className="flex flex-col items-center">
                    <GiWheat className="text-green-600 text-6xl" />
                    <p className="mt-2 text-lg font-bold text-gray-800">
                      Harvest
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <MdOutlineAgriculture className="text-green-600 text-6xl" />
                    <p className="mt-2 text-lg font-bold text-gray-800">
                      Farmer
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <GiTomato className="text-green-600 text-6xl" />
                    <p className="mt-2 text-lg font-bold text-gray-800">
                      Tomato
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <GiCarrot className="text-green-600 text-6xl" />
                    <p className="mt-2 text-lg font-bold text-gray-800">
                      Carrot
                    </p>
                  </div>
                </>
              )}

              {/* Green dashed line */}
              <div className="absolute bottom-[-25px] left-0 w-full border-t-1 border-dashed border-green-600"></div>

              {/* Green dots (always 4, since we only show 4 steps at once) */}
              <div className="absolute bottom-[-30px] left-0 w-full flex justify-between">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f5eb] flex items-center justify-center mt-10 lg:mt-0 rajdhani-light">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 pt-[50px] pb-[50px] lg:pt-[70px] lg:pb-[70px]">
            {/* Left Image (hidden on small screens) */}
            <Image
              className="w-[80vw] sm:w-[60vw] lg:w-[40vw] hidden lg:block"
              src={deal2}
              alt="deal2"
            />

            {/* Text & Countdown */}
            <div className="text-center flex flex-col items-center justify-center max-w-[90vw] sm:max-w-[600px]">
              <h2 className="text-[#80b500] text-[20px] sm:text-[25px] xl:text-[30px] font-[700] mb-[10px] italic">
                Todays Hot Deals
              </h2>
              <h1 className="text-[#071c1f] text-[22px] sm:text-[30px] lg:text-[40px] xl:text-[50px] font-[700] mb-[15px]">
                Original Stock Honey Combo Package
              </h1>

              {/* Countdown */}
              <ul className="flex items-center flex-wrap gap-5 justify-center">
                {["Days", "Hrs", "Mins", "Secs"].map((label, idx) => (
                  <li key={idx} className="flex flex-col items-center gap-2">
                    <h1 className="text-[#071c1f] bg-[#fff] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] flex items-center justify-center rounded-full font-[700] text-[18px] sm:text-[20px] lg:text-[24px]">
                      00
                    </h1>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#071c1f]">
                      {label}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="bg-[#209e2e] px-5 mt-5 flex justify-center items-center lg:px-8 gap-1 text-white cursor-pointer transition border border-[#209e2e] p-3 rounded-3xl hover:bg-[#eafef1] hover:text-[#209e2e]">
                <p className="font-medium text-[15px] sm:text-[16px] lg:text-[17px]">
                  Shop now
                </p>
                <svg
                  className="w-5 sm:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                </svg>
              </button>
            </div>

            {/* Right Image (hidden on small screens) */}
            <Image
              className="w-[80vw] sm:w-[60vw] lg:w-[40vw] hidden lg:block"
              src={deal1}
              alt="deal1"
            />
          </div>
        </section>
      </section>
      <Subcribe />
      <Footer />
    </>
  );
}
