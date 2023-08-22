import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-[#f5d7db] dark:bg-[#473e66] lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
