"use client";

import React, { useState } from "react";
import logo from "../../public/img/logo-two.png";
import Image from "next/image";
import sub1 from "../../public/img/1.jpg";
import sub2 from "../../public/img/2.jpg";
import sub3 from "../../public/img/3.jpg";
import sub4 from "../../public/img/4.jpg";
import sub5 from "../../public/img/5.jpg";
import sub6 from "../../public/img/6.jpg";
import sub7 from "../../public/img/7.jpg";
import sub8 from "../../public/img/8.jpg";
import Search from "./Search";
import Link from "next/link";
import Cart from "./Cart";
import AvatarNav from "./AvaterNav";

export default function Nav() {
  const [view, setView] = useState(false);
  const [showside, setshowside] = useState(false);
  const searchView = () => setView(!view);
  const showsideView = () => setshowside(!showside);
  return (
    <header className="mb-10 lg:mb-0">
      <nav className="w-[100vw] fixed bg-[#ffffff] lg:p-4  shadow-md lg:flex items-center justify-between text-[#333333] z-30 ">
        <div className="p-5 lg:p-0 lg:px-5 lg:border-transparent  xl:border px-20">
          <Image className="lg:w-[10vw]" src={logo} alt="logo" />
        </div>
        <ul className="hidden lg:flex items-center gap-10  p-5 lg:p-0 lg:px-5  px-20 justify-center font-medium">
          <Link href={"/Home"}>
            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
              Home
            </li>
          </Link>

          <Link href={"/About"}>
            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
              About
            </li>
          </Link>

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

            <ul className="opacity-0 absolute shadow-sm group-hover:opacity-100 mt-10 bg-white text-black flex flex-col gap-2 w-50 p-5">
              <Link href={"/Shop"}>
                <li className="block hover:text-[#82b440] transition-all hover:ml-1">
                  Shop
                </li>
              </Link>

              <Link href={"/Cart"}>
                <li className="block hover:text-[#82b440] transition-all hover:ml-1">
                  Cart
                </li>
              </Link>

              <Link href={"/Checkout"}>
                <li className="block hover:text-[#82b440] transition-all hover:ml-1">
                  Checkout
                </li>
              </Link>
            </ul>
          </li>

          <Link href={"/Faq"}>
            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
              FAQ
            </li>
          </Link>

          <Link href={"/Contact"}>
            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
              Contact
            </li>
          </Link>

          <li className="group relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:top-8 after:w-3 after:h-3 after:rounded-full after:bg-[#209e2e] after:transition after:opacity-0 hover:after:opacity-100 transition hover:text-[#209e2e]">
            <span className="flex items-center">
              <span>Login</span>
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </span>

            <ul className="opacity-0 absolute shadow-sm group-hover:opacity-100 mt-10 bg-white text-black flex flex-col gap-2 w-50 p-5">
              <Link href={"/Login"}>
                <li className="block hover:text-[#82b440] transition-all hover:ml-1">
                  Login
                </li>
              </Link>
              <Link href={"/Signup"}>
                <li className="block hover:text-[#82b440] transition-all hover:ml-1">
                  SignUp
                </li>
              </Link>
            </ul>
          </li>
        </ul>

        <ul className="flex items-center xl:link1 p-5 lg:p-0 lg:px-5  gap-5 px-20">
          <li className="relative">
            <svg
              onClick={searchView}
              className="w-9 text-[#b7b7b7] p-2 rounded-[10px] border-1 border-[#b7b7b7] hover:text-white hover:bg-[#82b440] cursor-pointer transition"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>

            {view && (
              <div className="absolute right-0.5 top-15 shadow-sm bg-white w-[23vw] h-[80px] flex items-center justify-center">
                <Search />
              </div>
            )}
          </li>

          <Cart />

          <li>
            <svg
              onClick={showsideView}
              className="w-9 text-[#b7b7b7] p-2 border-1 rounded-[10px] border-[#b7b7b7]  hover:text-white hover:bg-[#82b440] cursor-pointer transition"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V10C11 10.5523 10.5523 11 10 11H4C3.44772 11 3 10.5523 3 10V4ZM3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4ZM13 14C13 13.4477 13.4477 13 14 13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H14C13.4477 21 13 20.5523 13 20V14ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"></path>
            </svg>
          </li>

          <AvatarNav/>
        </ul>
      </nav>

      {showside && (
        <section className="top-0 bg-[#000000c0] h-[100vh] fixed w-[100vw] z-30 transition">
          <div className="bg-white slideIn w-[30vw] xl:w-[30vw] lg:w-[50vw] absolute right-0  h-[100vh] overflow-y-scroll  p-10 flex flex-col gap-10">
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
                innovations and a positive customer experience are the heart of
                successful communication. No fake products and services. The
                customer is king, their lives and needs are the inspiration.
              </p>
            </span>

            <span className="flex flex-col gap-5 items-center justify-center">
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
    </header>
  );
}
