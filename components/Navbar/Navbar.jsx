import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { TfiReload } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
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
      <main className="w-full h-[145px] px-[46px] flex justify-between items-center">
        <div className="flex justify-center items-center gap-16">
          <Image src={logo} alt="" className="w-[155px] h-[45px]" />
          <div className="flex justify-center items-center gap-5">
            <GiHamburgerMenu />
            <form>
              <input
                type="text"
                placeholder="Search for Products"
                className="absolute w-[600px] border-2 rounded-3xl border-[#FED700] placeholder-slate-400 focus:outline-none px-[33px] py-[10px]"
              />
              <button className="relative left-[350px]">
                <div className="flex justify-center items-center gap-10">
                  <p>All Categories</p>
                  <HiOutlineChevronUpDown />
                </div>
              </button>
              <button className="relative left-[400px] bg-[#FED700] px-[14px] py-[15px] border rounded-r-3xl">
                <BsSearch />
              </button>
            </form>
          </div>
        </div>
        <div className="flex gap-14">
          <MdOutlineFavoriteBorder />
          <IoIosGitCompare />
          <CgProfile />
          <HiOutlineShoppingBag />
        </div>
      </main>
    </section>
  );
};

export default Navbar;
