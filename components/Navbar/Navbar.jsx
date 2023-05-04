import Link from "next/link";
import React, { useState } from "react";
import Home from "../Home/Home";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <section>
      <header className="w-full h-[37px] px-[46px] flex justify-between items-center bg-white   border-b border-b-[#e6ebf4]">
        <p className="text-black tracking-wide text-[13px]">
          Welcome to Worldwide Electronics Store
        </p>
        <Link
          href="/create-post"
          className="font-inter font-medium bg-[#6964ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <div>
          <Link href="/" element={<Home />} />
          {/* <Link path="/create-post" element={<CreatePost />} /> */}
        </div>
      </main>
    </section>
  );
};

export default Navbar;
