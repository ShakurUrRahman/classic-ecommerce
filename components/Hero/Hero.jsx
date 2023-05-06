import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Hero = () => {
  return (
    <section>
      <div className="px-[46px] flex justify-between">
        <menu className="bg-[#FED700] py-3  border rounded-lg ">
          <ul className="flex px-5 flex-col gap-[10px]">
            <li className="flex items-center gap-2 ">
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
        <nav className="flex">
          <p>All Pages</p>
          <p>Featured Brands</p>
          <p>Trending Styles</p>
          <p>Gift Cards</p>
        </nav>
        <p>Free Shipping on Orders $50+</p>
      </div>
    </section>
  );
};

export default Hero;
