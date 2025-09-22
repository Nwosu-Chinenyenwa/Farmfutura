"use client";

import React, { useState } from "react";
import Image from "next/image";
import pawpaw from "../../public/img/eggplant.png";

// Example product list (just duplicate to test)
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
    img: pawpaw,
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
  }, // won’t show, because we limit to 8
];

function ProductQuickView({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
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
      <div className="w-fit">
        <div className="relative flex flex-col border-2 border-[#8f8d8d30] w-fit">
          <div className="bg-[#b7b7b72f] w-[80vw] lg:w-[20vw] h-[50vh] flex items-center justify-center p-10 relative">
            <Image src={product.img} alt={product.name} />

            <div className="absolute inset-0  w-fit m-auto flex items-center  justify-between gap-5 lg:gap-0  transition">
              <svg
                className="w-12 h-12 transition hover:bg-[#82b440] hover:text-white cursor-pointer shadow-md rounded-full p-3 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
              </svg>

              <svg
                className="w-12 h-12 transition hover:bg-[#82b440] hover:text-white cursor-pointer shadow-md rounded-full p-3 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
              </svg>

              {love === 0 ? (
                <svg
                  onClick={() => setlove(1)}
                  className="w-12 h-12 transition hover:bg-[#82b440] hover:text-white cursor-pointer shadow-md rounded-full p-3 bg-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                </svg>
              ) : (
                <svg
                  className="w-12 h-12 transition hover:bg-[#82b440] text-[#FF0000] cursor-pointer shadow-md rounded-full p-3 bg-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
                </svg>
              )}

              <svg
                className="w-12 h-12 transition hover:bg-[#82b440] hover:text-white cursor-pointer shadow-md rounded-full p-3 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
              </svg>
            </div>
          </div>

          <div className="text-center py-5 flex flex-col gap-2 border-1 border-[#8f8d8d30]">
            <h3 className="font-semibold cursor-pointer text-[#333333] hover:text-[#82b440] transition">
              {product.name}
            </h3>
            <p className="font-[700] text-[20px] text-[#82b440] transition">
              ${product.price}
            </p>
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

      <div className="lg:grid grid-cols-4 flex flex-col gap-5 lg:gap-20 w-[80vw] m-auto">
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
