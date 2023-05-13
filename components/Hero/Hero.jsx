import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import hero1 from "../../public/assets/hero/hero1.png";
import logo from "../../public/assets/hero/logo.jpg";

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

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section>
      <nav className="h-[47px] px-[65px] bg-[#FED700] flex items-center justify-between">
        <div className="flex justify-between gap-[100px]">
          <div className="flex gap-4 items-center">
            <p className="font-bold text-sm">Shop By Department</p>
            <p className="mt-[5px] text-[10px] text-gray-500">
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
      <div className="px-[42px] flex flex-row">
        <menu className="py-2 border-t-0 border-2 border-[#FED700] rounded-t-none rounded-md basis-[22%]">
          <ul className="flex py-1 px-4 flex-col gap-[8px] text-[14px] content-center">
            {menuList?.map((menu, index) => (
              <li
                key={index}
                className={`border-t-0 border-b-2 pb-1 border-gray-100 flex justify-between items-center ${
                  menu.bold === "yes" ? "font-bold" : "font-normal"
                }`}
              >
                {menu.list}
                {menu.bold ? (
                  ""
                ) : (
                  <AiOutlineRight className="text-gray-500 text-xs" />
                )}
              </li>
            ))}
          </ul>
        </menu>
      </div>
      <div className="-mt-[712px] h-[480px] py-16 px-4 relative group duration-300">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="ml-[700px] w-[520px] h-[415px] bg-right bg-no-repeat duration-500"
          alt=""
        />
        <div className="flex top-4 justify-center -mt-10">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
