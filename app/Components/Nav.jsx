import React from "react";
import logo from "../../public/img/logo-two.png"
import Image from "next/image";

export default function Nav() {
  return (
    <header className="mb-10 lg:mb-0">
      <nav className="w-[100vw] fixed bg-[#ffffff]  shadow-sm  hidden lg:flex items-center justify-between text-[#333333] z-30 ">
        <div className="p-5  px-20">
          <Image src={logo} alt="logo" />
        </div>
        <ul className="hidden lg:flex items-center gap-10 p-5  px-20 justify-center font-medium">
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

            <ul className="opacity-0 shadow-sm absolute group-hover:opacity-100 mt-10 bg-white text-black flex flex-col gap-2 w-50 p-5">
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

            <ul className="opacity-0 absolute shadow-sm group-hover:opacity-100 mt-10 bg-white text-black flex flex-col gap-2 w-50 p-5">
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
              className="w-9 text-[#b7b7b7] p-2 rounded-[10px] border-1 border-[#b7b7b7] hover:text-white hover:bg-[#82b440] cursor-pointer transition"
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

          <li>
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
    </header>
  );
}
