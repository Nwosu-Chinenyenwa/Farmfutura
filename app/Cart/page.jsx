"use client";

import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import AllNav from "../Components/AllNav";
import Link from "next/link";
import eggplant from "../../public/img/eggplant.png";
import pawpaw from "../../public/asset/pawpaw.webp";
import Image from "next/image";
import Subcribe from "../Components/Subcribe";
import Footer from "../Components/Footer";

const cartProduct = [
  {
    img: pawpaw,
    name: "Organic Apples",
    price: "3.99/lb",
    description: "Fresh organic apples.",
  },
  {
    img: eggplant,
    name: "Bananas",
    price: "1.50/bunch",
    description: "Sweet ripe bananas.",
  },
  {
    img: pawpaw,
    name: "Carrots",
    price: "2.20/lb",
    description: "Crunchy organic carrots.",
  },
];

export default function page() {
  /*   const { cart, removeFromCart, clearCart, user } = useCart();
  const [total, setTotal] = useState(0);

  // 🔹 Calculate total whenever cart changes
  useEffect(() => {
    const totalValue = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalValue);
  }, [cart]);

  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Please log in to view your cart 🛒</h2>
      </div>
    );
  } */

  return (
    /*  <div style={{ padding: "20px", maxWidth: 700, margin: "0 auto" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 🕳️</p>
      ) : (
        <>
          <table style={{ width: "100%", marginTop: 20 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.product_name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: "red",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              marginTop: 20,
              textAlign: "right",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Total: ${total.toFixed(2)}
          </div>

          <div style={{ marginTop: 20, textAlign: "right" }}>
            <button
              onClick={clearCart}
              style={{
                background: "gray",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: 6,
              }}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div> */

    <>
      <section className="pagetitle">
        <AllNav />
        <div className="py-50 bg-[#00000093] text-white text-center">
          <h1 className="text-[30px] font-extrabold">Cart</h1>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Link href={"/pages/Home"}></Link>
              <p className="cursor-pointer">Home</p>
              <span className="w-[5px] h-[5px] rounded-full bg-[#209e2e] block"></span>
              <p className="cursor-pointer">Cart</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shadow-lg rajdhani-light my-10 py-5 w-[95vw] overflow-x-auto xl:overflow-x-hidden no-scrollbar m-auto flex xl:items-center xl:justify-center">
          <table className="table-auto w-full border-collapse text-center min-w-[700px] sm:min-w-[800px] md:min-w-[900px] lg:min-w-[1000px] xl:w-[90vw]">
            <thead>
              <tr className="text-[16px] sm:text-[18px] md:text-[20px] py-4 sm:py-6 simpleBorder">
                <th className="px-3 sm:px-4 py-3 sm:py-5">Product</th>
                <th className="px-3 sm:px-4 py-3 sm:py-5">Name</th>
                <th className="px-3 sm:px-4 py-3 sm:py-5">Unit Price</th>
                <th className="px-3 sm:px-4 py-3 sm:py-5">Quantity</th>
                <th className="px-3 sm:px-4 py-3 sm:py-5">Total</th>
              </tr>
            </thead>

            <tbody>
              {cartProduct.map((product, index) => (
                <tr
                  key={product.name || index}
                  className="text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] py-4 sm:py-6 simpleBorder text-center transition"
                >
                  <td className="px-3 sm:px-4 py-4 sm:py-6">
                    <Image
                      className="max-w-[20vw] sm:max-w-[10vw] md:max-w-[8vw] m-auto"
                      src={product.img}
                      alt={product.name}
                    />
                  </td>

                  <td className="text-[#666666] font-semibold sm:font-bold px-3 sm:px-4 py-2">
                    {product.name}
                  </td>

                  <td className="text-[#666666] font-semibold sm:font-bold px-3 sm:px-4 py-2">
                    ${product.price}
                  </td>

                  <td className="px-3 sm:px-4 py-2">
                    <div className="flex h-[35px] sm:h-[40px] px-2 sm:px-3 gap-3 sm:gap-5 font-[500] bg-[#f1efef] items-center justify-center">
                      <button className="text-[gray] cursor-pointer hover:text-[#333333] transition text-2xl sm:text-3xl">
                        -
                      </button>
                      <p className="text-[#333333] font-semibold text-[15px] sm:text-[17px]">
                        1
                      </p>
                      <button className="text-[gray] cursor-pointer hover:text-[#333333] transition text-2xl sm:text-3xl">
                        +
                      </button>
                    </div>
                  </td>

                  <td className="px-3 sm:px-4 py-2">
                    <div className="flex gap-3 sm:gap-5 items-center justify-center">
                      <p className="text-[#666666] font-bold text-[15px] sm:text-[17px]">
                        ${product.price}
                      </p>

                      <svg
                        className="w-4 sm:w-5 text-[gray] cursor-pointer hover:text-[#ff0000] transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM9 4V6H15V4H9Z"></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="w-full flex p-5 justify-end items-center my-10">
          <div className="w-[90vw] shadow-lg md:w-[40vw]  rounded-lg p-6 bg-white">
            <h2 className="text-[22px] rajdhani-light font-bold mb-5 text-[#333333]">
              Cart Totals
            </h2>

            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-1 border-[#eaedff] font-mono">
                  <td className="py-3 px-3 text-[16px] text-[#323232]">
                    Subtotal
                  </td>
                  <td className="py-3 px-3 text-[16px] text-right text-[#666666] font-normal">
                    $150.00
                  </td>
                </tr>
                <tr
                  title="No shipping fee!"
                  className="border-1 border-[#eaedff] font-mono"
                >
                  <td className="py-3 px-3 text-[16px] text-[#323232]">
                    Shipping
                  </td>
                  <td className="py-3 px-3 text-[16px] text-right text-[#666666] font-normal">
                    $0
                  </td>
                </tr>

                <tr className="rajdhani-light">
                  <td className="py-5 px-3 text-[16px] font-bold text-[#333333]">
                    Total
                  </td>
                  <td className="py-5 px-3 text-[16px] font-bold text-right text-[#333333]">
                    $160.00
                  </td>
                </tr>
              </tbody>
            </table>

            <button className="mt-6 w-full bg-[#28a745] text-white text-[16px] font-semibold py-3 rounded-full hover:bg-[#333333] transition cursor-pointer">
              Proceed To Checkout →
            </button>
          </div>
        </section>
      </section>
      <Subcribe />
      <Footer />
    </>
  );
}
