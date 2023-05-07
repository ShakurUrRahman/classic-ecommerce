import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import hero1 from "../../public/assets/hero/hero1.png";
import logo from "../../public/assets/hero/logo.jpg";

const Hero = () => {
  const slides = [
    {
      url: "https://i.ibb.co/ZSyVBzk/hero1.png",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
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
    <section className="bg-gray-500 mt-8">
      <div className="px-[42px] flex flex-row gap-10">
        <menu className="-mt-10 bg-[#FED700] py-3 border rounded-lg basis-1/4">
          <ul className="flex px-5 flex-col gap-[10px]">
            <li className="flex items-center gap-2">
              <p className="text-lg">
                <AiOutlineMenuUnfold />
              </p>
              <p className="font-semibold">All Departments</p>
            </li>
            <li>Value of the Day</li>
            <li>Top 100 Offers</li>
            <li>New Arrivals</li>
            <li className="flex justify-between gap-12 items-baseline">
              <p>Computers & Accessories</p>
              <p className="text-xs">
                <AiOutlineRight />
              </p>
            </li>
            <li>Cameras, Audio & Video</li>
            <li>Mobiles & Tablets</li>
            <li>Movies, Music & Video Games</li>
            <li>TV & Audio</li>
            <li>Watches & Eyewear</li>
            <li>Car, Motorbike & Industrial</li>
            <li>Accessories</li>
          </ul>
        </menu>
        <nav className="-mt-8 flex basis-1/2 gap-7 text-sm font-bold">
          <div className="flex justify-center gap-2 text-red-700">
            <p>All Pages</p>
            <p className="mt-[5px] text-[12px]">
              <FaChevronDown />
            </p>
          </div>
          <p>Featured Brands</p>
          <p>Trending Styles</p>
          <p>Gift Cards</p>
        </nav>
        <p className="-mt-8 ml-5 text-sm">Free Shipping on Orders $50+</p>
      </div>

      <div className="-mt-[448px] h-[480px] py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="ml-[700px] w-[530px] h-[415px] bg-right bg-no-repeat  duration-500"
          alt=""
        />
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              {/* <RxDotFilled /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
