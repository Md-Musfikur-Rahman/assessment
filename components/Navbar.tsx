import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src="/img/assessment-logo 1.png"
        alt="logo"
        height={67}
        width={191}
      />
    </div>
  );
};

const NavigationLinks = () => {
  return (
    <ul className="flex space-x-4 uppercase">
      <li>Home</li>
      <li>About</li>
      <li>Courses</li>
      <li>Shop</li>
      <li>Events</li>
      <li>Contact</li>
    </ul>
  );
};

const Search = () => {
  return (
    <div className="p-2 rounded-full">
      <Image
        src="/img/Magnifiying Glass.png"
        alt="search"
        height={15}
        width={15}
      />
    </div>
  );
};

const Badge = () => {
  return (
    <div className="rounded-full">
      <Image src="/img/Ellipse 16.png" alt="search" height={50} width={50} />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white ">
      <div className=" w-4/5 mx-auto py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Logo />
        </div>
        <div>
          <NavigationLinks />
        </div>
        <div className="flex items-center space-x-4">
          <Search />
          <Badge />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
