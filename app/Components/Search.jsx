"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import products from "./Products";

export default function Search() {
 const router = useRouter();
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const ql = q.toLowerCase();
    const matched = products.filter(
      (p) =>
        p.name.toLowerCase().includes(ql) ||
        (p.description && p.description.toLowerCase().includes(ql))
    );
    setResults(matched.slice(0, 6));
    setOpen(true);
  }, [q]);

  function goToProduct(p) {
    const url = `${p.location}?scrollTo=${p.id}&q=${encodeURIComponent(q)}`;
    setOpen(false);
    setQ("");
    router.push(url);
  }



  return (
    <>
      <form className="w-[70vw] h-[40px] flex  text-[#333333] border-1 border-[#209e2e] items-center justify-center">
        <input
          className=" outline-0 p-1 placeholder:text-[#616161]"
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => q && setOpen(true)}
          onKeyDown={(e) => {
            if ((e.key === "Enter")) {
              if (results.length > 0) {
                goToProduct(results[0]);
              }
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          type="text"
          placeholder="Search"
        />
        <svg
          className="w-5 text-[#616161]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
        </svg>
      </form>
      {open && results.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full bg-white border rounded shadow">
          {results.map((r) => (
            <li
              key={r.id}
              onClick={() => goToProduct(r)}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
              <div className="font-medium">{r.name}</div>
              <div className="text-xs text-gray-500">{r.description}</div>
              <div className="text-xs text-gray-400">On: {r.location}</div>
            </li>
          ))}
        </ul>
      )}

      {open && q && results.length === 0 && (
        <div className="absolute mt-1 w-full bg-white border rounded p-3 text-sm text-gray-600">
          No product found for “{q}”.
        </div>
      )}
    </>
  );
}
