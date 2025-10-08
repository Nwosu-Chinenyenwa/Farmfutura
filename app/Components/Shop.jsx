"use client";

import React, { useState } from "react";
import veg1 from "../../public/img/veg1.png";
import veg2 from "../../public/img/veg2.png";
import veg3 from "../../public/img/veg3.png";
import milk from "../../public/img/milk.png";
import Image from "next/image";
import AllNav from "./AllNav";
import Link from "next/link";
import Subcribe from "./Subcribe";
import Footer from "./Footer";
import eggplant from "../../public/img/eggplant.png";
import pawpaw from "../../public/asset/pawpaw.webp";
import Spline from "@splinetool/react-spline";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(false);
  const products1 = [
    {
      id: 1,
      img: milk,
      name: "Organic Apples",
      price: "3.99/lb",
      description: "Fresh organic apples.",
    },
    {
      id: 2,
      img: milk,
      name: "Bananas",
      price: "1.50/bunch",
      description: "Sweet ripe bananas.",
    },
    {
      id: 3,
      img: milk,
      name: "Carrots",
      price: "2.20/lb",
      description: "Crunchy organic carrots.",
    },
    {
      id: 4,
      img: milk,
      name: "Tomatoes",
      price: "2.50/lb",
      description: "Juicy red tomatoes.",
    },
    {
      id: 5,
      img: milk,
      name: "Tomatoes",
      price: "2.50/lb",
      description: "Juicy red tomatoes.",
    },
    {
      id: 6,
      img: milk,
      name: "Tomatoes",
      price: "2.50/lb",
      description: "Juicy red tomatoes.",
    },
    {
      id: 7,
      img: milk,
      name: "Tomatoes",
      price: "2.50/lb",
      description: "Juicy red tomatoes.",
    },
    {
      id: 8,
      img: milk,
      name: "Tomatoes",
      price: "2.50/lb",
      description: "Juicy red tomatoes.",
    },
    {
      id: 9,
      img: milk,
      name: "Tomatoes",
      price: "2.50/lb",
      description: "Juicy red tomatoes.",
    },
    {
      id: 10,
      img: milk,
      name: "Tomatoes",
      price: "2.50/lb",
      description: "Juicy red tomatoes.",
    },
    {
      id: 11,
      img: milk,
      name: "Tomatoes",
      price: "2.50/lb",
      description: "Juicy red tomatoes.",
    },
    {
      id: 12,
      img: milk,
      name: "Tomatoes",
      price: "2.50/lb",
      description: "Juicy red tomatoes.",
    },
  ];

  const products2 = [
    {
      id: 1,
      img: veg1,
      name: "Cabbage",
      price: "3.10/head",
      description: "Fresh green cabbage.",
    },
    {
      id: 2,
      img: veg2,
      name: "Onions",
      price: "1.80/lb",
      description: "Red cooking onions.",
    },
    {
      id: 3,
      img: veg3,
      name: "Potatoes",
      price: "2.75/lb",
      description: "Golden potatoes.",
    },
    {
      id: 4,
      img: veg3,
      name: "Potatoes",
      price: "2.75/lb",
      description: "Golden potatoes.",
    },
  ];

  const products3 = [
    {
      id: 1,
      img: veg1,
      name: "Cabbage",
      price: "3.10/head",
      description: "Fresh green cabbage.",
    },
    {
      id: 2,
      img: veg2,
      name: "Onions",
      price: "1.80/lb",
      description: "Red cooking onions.",
    },
    {
      id: 3,
      img: veg3,
      name: "Potatoes",
      price: "2.75/lb",
      description: "Golden potatoes.",
    },
  ];

  const categories = [products1, products2, products3];
  const categoryNames = ["Fresh Milk", "Fresh Vegetable", "Fresh Fish"];
  const [activeIndex, setactiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < categories.length - 1) {
      setactiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setactiveIndex((prev) => prev - 1);
    }
  };

  function ProductQuickView({ product, onClose }) {
    if (!product) return null;
    return (
      <div className="fixed inset-0 bg-[#000000a8] flex justify-center items-center z-50">
        <div className="flex relative py-8 items-center gap-10 bg-white px-10">
          <svg
          onClick={onClose}
          className="absolute w-7 cursor-pointer rounded-4xl bg-[#209e2e] top-[-30px] right-[-20px] text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>

          <Image
            src={product.img}
            alt={product.name}
            className="w-[8vw] max-w-[100%] mx-auto my-3"
          />
          <div>
            <h5 className="text-[18px] rajdhani-light text-[#071c1f] font-[700] leading-1.3 mb-[15px]">
              A. n/c {product.name}
            </h5>

            <span className="flex gap-3">
              <svg
                className="w-5 h-5 bg-[#209e2e] text-white rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
              </svg>

              <p className="text-[16px] font-[300] text-[#071c1f] mb-[30px]">
                Successfully added to your Cart
              </p>
            </span>

            <span className="flex rajdhani-light gap-5">
              <button onClick={() => addToCart(product)} className="bg-[#209e2e] text-[18px] py-1 px-5 cursor-pointer font-[700] text-white hover:bg-transparent hover:border-1 hover:border-[#071c1f] hover:text-[#071c1f] transition">
                Add to cart
              </button>
              <button className="bg-[#071c1f] text-[18px] py-1 px-5 cursor-pointer font-[700] text-white hover:bg-transparent hover:border-1 hover:border-[#071c1f] hover:text-[#071c1f] transition">
                              View cart

              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }

  const getActiveProduct = () => {
    if (activeIndex === 0) return products1;
    if (activeIndex === 1) return products2;
    if (activeIndex === 2) return [];
    return [];
  };

  const activeProduct = getActiveProduct();
  const {addToCart} = useCart();
  return (
    <>
      <section className="pagetitle">
        <AllNav />
        <div className="py-50 bg-[#00000093] text-white text-center">
          <h1 className="text-[30px] font-extrabold">Shop</h1>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Link href={"/pages/Home"}></Link>
              <p className="cursor-pointer">Home</p>
              <span className="w-[5px] h-[5px] rounded-full bg-[#209e2e] block"></span>
              <p className="cursor-pointer">Shop</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 py-30 flex flex-col items-center justify-center gap-0 lg:gap-5">
        <p className="text-[#209e2e] text-center lg:text-[15px] font-[400] text-[14px]">
          VISIT OUR SHOP
        </p>
        <h2 className="text-[38px] text-center font-[700] text-[#333333]">
          Buy our product
        </h2>
        <p
          className="
          text-[#7a7e9a] text-[16px] font-[400] leading-[1.8] text-center md:max-w-[605px] lg:max-w-[605px] m-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laboreonsectetur adipiscinet dolore.
        </p>

        <span className="flex my-5 lg:mt-10 gap-5 lg:gap-0">
          {categoryNames.map((name, i) => (
            <button
              key={i}
              onClick={() => setactiveIndex(i)}
              className={`border-dashed lg:border-r cursor-pointer border-[#209e2e] lg:px-[20px] text-[18px] font-[400] transition ${
                activeIndex === i ? "text-[#209e2e]" : "text-[#8d8c8c]"
              }`}
            >
              {name}
            </button>
          ))}
        </span>

        <div className="xl:flex xl:flex-wrap xl:gap-5 md:grid md:grid-cols-2  items-center flex flex-wrap gap-5 justify-center m-auto">
          {activeProduct.length > 0 ? (
            activeProduct.map((product) => (
              <div key={product.id}>
                <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed w-[90vw]  lg:w-[20vw]  text-center border-[#209e2e]  hover:bg-white transition">
                  <div className=" flex flex-col gap-3 text-center items-center">
                    <Image
                      className="w-[40vw] lg:w-[12vw] mb-4 h-auto"
                      src={product.img}
                      alt="shape1"
                    />
                    <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
                      {product.name}
                    </h3>
                    <span className="text-[#209e2e] text-[18px] font-extrabold transition">
                      {product.price}
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
                        onClick={() => setSelectedProduct(product)}
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
            ))
          ) : (
            <div>
              <p className="text-[25px] my-20 font-bold text-[#8d8c8c]">
                No product on stock
              </p>
            </div>
          )}
          {selectedProduct && (
            <ProductQuickView
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </div>

        <div className="flex gap-30 md:gap-100 xl:gap-250 mt-10">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`w-12 h-12 flex items-center justify-center shadow-lg bg-white hover:text-white hover:bg-[#209e2e] transition ${
              activeIndex === 0
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path>
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={activeIndex === categories.length - 1}
            className={`w-12 h-12 flex items-center justify-center shadow-lg bg-white hover:text-white hover:bg-[#209e2e] transition ${
              activeIndex === categories.length - 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path>
            </svg>
          </button>
        </div>
      </section>

      <Subcribe />
      <Footer />
    </>
  );
}
