
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* Announcement Banner */}
      <div className="banner bg-secondary font-body h-[48px] text-[#1E1716] text-[14px] flex justify-center items-center text-center px-4">
        Complimentary shipping on orders over ₹1,999 · Each piece made in small
        batches
      </div>

      {/* Navbar */}
      <div className="navbar h-[80px] flex justify-center gap-40 items-center px-20 ">

        {/* Left Navigation */}
        <div className="nav-left justify-self-start font-body text-[14px]">
          <ul className="flex items-center gap-8">
            <li className="hover:underline">
              <Link href="/#hero">Shop</Link>
            </li>

            <li className="hover:underline">
              <Link href="/products">Collections</Link>
            </li>

            <li className="relative group">
              <Link href="/#category">
                Our Story
              </Link>
            </li>

         
          </ul>
        </div>

        {/* Center Logo */}
        <div className="nav-center flex flex-col items-center justify-center ">
          <div className="flex justify-center items-center gap-4 text-[28px] uppercase">
            <h1>Twiisty</h1>

            <div className="flex flex-col gap-2 justify-center items-center">
              <Image
                src="/images/brand_logo_vector.svg"
                alt="Logo"
                width={50}
                height={50}
              />

              <p className="text-primary text-[10px]">
                HANDMADE
              </p>
            </div>

            <h1>Loops</h1>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="nav-right justify-self-end font-body text-[14px]">
          <ul className="flex items-center gap-8">
              <li className="hover:underline">
              <Link href="/aboutus">Custom Orders</Link>
            </li>

            <li className="hover:underline">
              <Link href="/#faq">FAQs</Link>
            </li>
            <li>
                <div className="relative p-1">
                    <span className="absolute w-4 h-4 p-1 text-[10px] bg-primary rounded-2xl right-0 text-white flex justify-center items-center">10</span>
                <Image
                src="/images/cart.png"
                alt="Logo"
                width={24}
                height={24}
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
