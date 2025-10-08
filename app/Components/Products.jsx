"use client";

import React, { useState } from "react";
import Image from "next/image";
import eggplant from "../../public/img/eggplant.png";
import pawpaw from "../../public/asset/pawpaw.webp";

const products = [
  {
    id: 1,
    img: pawpaw,
    name: "Organic Apples",
    price: "3.99/lb",
    description: "Fresh organic apples.",
  },
  {
    id: 2,
    img: eggplant,
    name: "Bananas",
    price: "1.50/bunch",
    description: "Sweet ripe bananas.",
  },
  {
    id: 3,
    img: pawpaw,
    name: "Carrots",
    price: "2.20/lb",
    description: "Crunchy organic carrots.",
  },
  {
    id: 4,
    img: pawpaw,
    name: "Tomatoes",
    price: "2.50/lb",
    description: "Juicy red tomatoes.",
  },
  {
    id: 5,
    img: pawpaw,
    name: "Cabbage",
    price: "3.10/head",
    description: "Fresh green cabbage.",
  },
  {
    id: 6,
    img: pawpaw,
    name: "Onions",
    price: "1.80/lb",
    description: "Red cooking onions.",
  },
  {
    id: 7,
    img: pawpaw,
    name: "Potatoes",
    price: "2.75/lb",
    description: "Golden potatoes.",
  },
  {
    id: 8,
    img: pawpaw,
    name: "Spinach",
    price: "4.00/bunch",
    description: "Organic green spinach.",
  },
  {
    id: 9,
    img: pawpaw,
    name: "Cucumber",
    price: "1.99/each",
    description: "Fresh cucumber.",
  }, 
];

function ProductQuickView({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed  inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-80">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <Image
          src={product.img}
          alt={product.name}
          className="h-40 mx-auto my-3"
        />
        <p className="text-gray-600">Price: ${product.price}</p>
        <p>{product.description}</p>

        <button className="bg-green-600 text-white px-3 py-1 mt-3 rounded">
          Add to Cart
        </button>

        <button
          className="ml-2 bg-red-600 text-white px-3 py-1 mt-3 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function ProductCard({ product, onQuickView }) {
  const [love, setlove] = useState(0);

  return (
    <div>
      <div className="w-fit m-auto">
        <div className="bg-[#d2ecd5] rounded-sm py-10 group  border-1 border-dashed  w-[90vw] md:w-[45vw] xl:w-[20vw] lg:relative lg:right-3  text-center border-[#209e2e]  hover:bg-white transition">
          <div className=" flex flex-col gap-3 text-center items-center">
            <Image
              className="w-[40vw] md:w-[20vw] lg:w-[12vw] mb-4 h-auto"
              src={eggplant}
              alt="shape1"
            />
            <h3 className="text-[#616161] group-hover:text-[#209e2e]   font-extrabold text-[20px] transition">
              Bunch Fresh Fish
            </h3>
            <span className="text-[#209e2e] text-[18px] font-extrabold transition">
              $90
            </span>
            <div className="flex items-center  gap-2 lg:w-[20vw] justify-between">
              <span className="w-[25vw] lg:w-[10vw] md:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
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
              <span className="w-[25vw]  md:w-[10vw] lg:w-[10vw] block bg-[#209e2e] h-[1px]"></span>
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
                onClick={ProductQuickView}
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
    </div>
  );
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-30">
      <div className="flex flex-col items-center justify-center mb-10">
        <h3
          className="text-[#333333] text-center
         lg:text-[36px] text-[26px] font-bold"
        >
          Featured Products
        </h3>
        <span className="flex gap-1">
          <svg
            className="w-[20px] text-[#209e2e] transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
          </svg>
          <svg
            className=" w-[20px] text-[#209e2e] transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
          </svg>
          <svg
            className="w-[20px] text-[#209e2e] transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
          </svg>
          <svg
            className=" w-[20px] text-[#209e2e] transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
          </svg>
          <svg
            className=" w-[20px] text-[#209e2e] transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path>
          </svg>
        </span>
      </div>

      <div className="xl:grid xl:grid-cols-4 xl:gap-5 xl:w-fit xl:items-center xl:justify-center md:grid md:grid-cols-2 flex flex-col gap-5 lg:gap-20 w-[90vw] m-auto">
        {products.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
