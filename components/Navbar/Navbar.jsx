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
      <main className="w-full h-[125px] px-[54px] flex justify-between items-center">
        <div className="flex justify-center items-center gap-24">
          <Image src={logo} alt="" className="w-[155px] h-[45px]" />
          <div className="flex justify-center items-center gap-8">
            <p className="text-2xl">
              <GiHamburgerMenu />
            </p>
            <form>
              <div className="text-clip overflow-hidden ">
                <input
                  type="text"
                  placeholder="Search for Products"
                  className="absolute w-[520px] border-2 rounded-3xl border-[#FED700] placeholder-slate-400 focus:outline-none px-[30px] py-[7px]"
                />
              </div>
              <button className="relative left-[315px] bottom-1">
                <div className="flex justify-center items-center gap-2">
                  <p>All Categories</p>
                  <p className="font-bold">
                    <HiOutlineChevronUpDown />
                  </p>
                </div>
              </button>
              <button className="relative text-xl left-[333px] bg-[#FED700] px-[22px] py-[10px] border rounded-r-3xl">
                <BsSearch />
              </button>
            </form>
          </div>
        </div>
        <div className="flex gap-10 text-xl mr-2">
          <IoIosGitCompare />
          <MdOutlineFavoriteBorder />
          <CgProfile />
          <div className="flex gap-1">
            <div>
              <div className="relative rounded-lg">
                <HiOutlineShoppingBag />
                <div class="absolute inline-flex bg-[#FED700] items-center justify-center w-6 h-6 text-xs font-bold border rounded-full -bottom-4 -right-2">
                  20
                </div>
              </div>
            </div>
            <div className="items-start text-sm font-bold">
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Navbar;
