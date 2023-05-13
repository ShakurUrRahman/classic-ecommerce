import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { TfiReload } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import logo from "../../public/assets/logo.jpg";
import Image from "next/image";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <section>
      <header className="w-full h-[37px] px-[46px] flex justify-between items-center text-black tracking-wide text-[13px] bg-white border-b border-b-[#e6ebf4]">
        <p className="">Welcome to Worldwide Electronics Store</p>
        <div>
          <ul className="flex gap-5 ">
            <li className="flex justify-center items-center gap-2 border-r-2 border-r-[#e6ebf4] pr-3 ">
              <CiLocationOn />
              <p>Store Locator</p>
            </li>
            <li className="flex justify-center items-center gap-2 border-r-2 border-r-[#e6ebf4] pr-3">
              <CiDeliveryTruck />
              <p>Track Your Order</p>
            </li>
            <li className="flex justify-center items-center gap-2 border-r-2 border-r-[#e6ebf4] pr-3">
              <HiOutlineShoppingBag />
              <p>Shop</p>
            </li>
            <li className="flex justify-center items-center gap-2 border-r-2 border-r-[#e6ebf4] pr-3">
              <CgProfile />
              <p>My Account</p>
            </li>
            <li className="flex justify-center items-center gap-2">
              <TfiReload />
              <p>Switch to RTL</p>
            </li>
          </ul>
        </div>
      </header>
      <main className="w-full h-[100px] px-[44px] flex justify-between items-center">
        <div className="flex justify-center items-center gap-20">
          <Image src={logo} alt="" className="w-[155px] h-[45px]" />
          <div className="flex justify-center items-center gap-10">
            <p className="text-2xl">
              <GiHamburgerMenu />
            </p>
            <nav className="flex gap-6 text-sm font-bold mb-1">
              <div className="flex justify-center items-center gap-2 ">
                <p>Home</p>
                <p className="mt-[5px] text-[10px] text-gray-500">
                  <FaChevronDown />
                </p>
              </div>
              <p>About Us</p>
              <div className="flex justify-center items-center gap-2 ">
                <p>Blog</p>
                <p className="mt-[5px] text-[10px] text-gray-500">
                  <FaChevronDown />
                </p>
              </div>
              <div className="flex justify-center items-center gap-2 ">
                <p>Products</p>
                <p className="mt-[5px] text-[10px] text-gray-500">
                  <FaChevronDown />
                </p>
              </div>
              <p>Features</p>
              <p>Contact Us</p>
            </nav>
          </div>
        </div>
        <div className="flex gap-10 text-xl mr-2">
          <div className="flex gap-3">
            <div className="text-5xl text-yellow-300">
              <MdHeadsetMic />
            </div>
            <div className="text-sm text-gray-700 flex flex-col gap-1">
              <p>
                <span className="font-bold">Support</span> (+800) 856 800 604
              </p>
              <p>Email: info@electro.com</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Navbar;
