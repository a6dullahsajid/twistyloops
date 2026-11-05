"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Detect scroll to hide the banner
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Banner */}
      <div
        className={`grid bg-secondary text-[#1E1716] font-body text-[12px] overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled
            ? "grid-rows-[0fr] opacity-0"
            : "grid-rows-[1fr] opacity-100"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="h-12 px-4 md:px-8 flex justify-center items-center text-center">
            <Link
              href="/products"
              className="announcement-text hover:underline animate-marquee md:animate-none"
            >
              Complimentary shipping on orders over ₹1,999 · Each piece made in
              small batches.
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar h-[80px] flex justify-center gap-50 items-center px-5 border-b">
        {/* Left Navigation */}
        <div className="nav-left hidden justify-self-start font-body text-[14px]">
          <ul className="flex items-center gap-8">
            <li className="hover:underline">
              <Link href="/#hero">Shop</Link>
            </li>

            <li className="hover:underline">
              <Link href="/products">Collections</Link>
            </li>

            <li className="relative group">
              <Link href="/#category">Our Story</Link>
            </li>
          </ul>
        </div>

        {/* Center Logo */}
        <div className="nav-center flex flex-col items-center justify-center">
          <div className="flex justify-center items-center gap-4 text-[28px] uppercase">
            <h1>Twiisty</h1>

            <div className="flex flex-col gap-2 justify-center items-center">
              <Image
                src="/images/brand_logo_vector.svg"
                alt="Twiisty Loops Logo"
                width={50}
                height={43}
                style={{
                  width: "50px",
                  height: "43px",
                }}
              />

              <p className="text-primary text-[10px]">HANDMADE</p>
            </div>

            <h1>Loops</h1>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="nav-right hidden justify-self-end font-body text-[14px]">
          <ul className="flex items-center gap-8">
            <li className="hover:underline">
              <Link href="/aboutus">Custom Orders</Link>
            </li>

            <li className="hover:underline">
              <Link href="/#faq">FAQs</Link>
            </li>
            <li className="shrink-0">
              <div className="relative p-1 bg- bg-green-300">
                <span className="absolute w-4 h-4 p-1 text-[10px] bg-primary rounded-2xl right-0 text-white flex justify-center items-center">
                  10
                </span>
                <Image
                  src="/images/cart.png"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
