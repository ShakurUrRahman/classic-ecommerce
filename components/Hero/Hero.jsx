import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";

const Hero = () => {
  const menuList = [
    { list: "Value of the Day", bold: "yes" },
    { list: "Top 100 Offers", bold: "yes" },
    { list: "New Arrivals", bold: "yes" },
    { list: "Laptops & Computers" },
    { list: "Cameras & Photography" },
    { list: "Smart Phones & Tablets" },
    { list: "Video Games & Consoles" },
    { list: "TV & Audio" },
    { list: "Gadgets" },
    { list: "Car Electronic & GPS" },
    { list: "Printers & Ink" },
    { list: "Software" },
    { list: "Office Supplies" },
    { list: "Computer Components" },
    { list: "PC Gaming Headsets" },
    { list: "Smart TVs" },
    { list: "Software" },
    { list: "Smartwatches" },
  ];
  const slides = [
    {
      url: "https://i.ibb.co/ZSyVBzk/hero1.png",
    },
    {
      url: "https://i.ibb.co/zHSY87P/hero2.png",
    },
    {
      url: "https://i.ibb.co/nspy8fJ/hero3.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleCombinedClick = (slideIndex) => {
    handleClick();
    goToSlide(slideIndex);
  };

  return (
    <section className="bg-gray-200">
      <nav className="h-[47px] px-[65px] bg-[#FED700] flex items-center justify-between">
        <div className="flex justify-between gap-[100px]">
          <div className="flex gap-4 items-center">
            <p className="font-bold text-sm">Shop By Department</p>
            <p className="mt-[5px] text-[10px]">
              <FaChevronDown />
            </p>
          </div>
          <form className="mt-[0.5px]">
            <input
              type="text"
              placeholder="Search for Products"
              className="absolute w-[565px] rounded-3xl placeholder-slate-400 focus:outline-none px-[30px] py-[7px]"
            />
            <button className="relative left-[355px] bottom-1">
              <div className="flex justify-center items-center gap-2">
                <p>All Categories</p>
                <p>
                  <HiOutlineChevronUpDown />
                </p>
              </div>
            </button>
            <button className="relative text-xl text-gray-200 left-[380px] top-0 bottom-0 bg-[#333E48] px-[22px] py-[9px] border rounded-r-3xl">
              <BsSearch />
            </button>
          </form>
        </div>
        <div className="flex justify-between items-center gap-10 text-2xl">
          <div className="flex justify-between gap-10">
            <IoIosGitCompare />
            <MdOutlineFavoriteBorder />
            <CgProfile />
          </div>
          <div className="flex gap-[5px] items-center">
            <div className="relative rounded-lg">
              <HiOutlineShoppingBag />
              <div className="text-white absolute inline-flex bg-[#333E48] items-center justify-center w-5 h-5 text-xs font-bold border rounded-full -bottom-2 left-2">
                0
              </div>
            </div>
            <div className="items-start text-base font-bold">
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="px-[42px] flex justify-between">
        <menu className="pt-3 px-2 bg-white flex flex-col gap-[8px] text-[14px] basis-[23%] border-t-0 border-2 border-[#FED700] rounded-t-none rounded-md">
          {menuList?.map((menu, index) => (
            <Link
              key={index}
              href="#"
              className={`hover:bg-gray-100 border-t-0 border-b-2 border-gray-100 ${
                menu.bold === "yes" ? "font-bold" : "font-normal"
              }`}
            >
              <div className="px-3 flex justify-between items-center hover:font-bold py-[1.5px]">
                {menu.list}
                {menu.bold ? (
                  ""
                ) : (
                  <AiOutlineRight className="text-gray-500 text-xs hover:text-base" />
                )}
              </div>
            </Link>
          ))}
        </menu>
        <div className="basis-[74%]">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-[520px] h-[450px] bg-right bg-no-repeat duration-500 ml-[350px]"
            alt=""
          />
          <div className="flex">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => handleCombinedClick(slideIndex)}
                className="text-2xl cursor-pointer -mt-10 text-slate-300 hover:text-slate-500 inline-flex items-center transition-colors"
              >
                {isActive ? <RxDotFilled /> : <AiOutlineMinus />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
