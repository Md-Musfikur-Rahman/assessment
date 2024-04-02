"use client";
import Image from "next/image";
import { useState } from "react";
import { HamburgerMenu } from ".";

const Logo = () => {
  return (
    <div>
      <Image
        src="/img/assessment-logo 1.svg"
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
        src="/img/Magnifiying Glass.svg"
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
      <Image src="/img/Ellipse 16.svg" alt="search" height={50} width={50} />
    </div>
  );
};

const Navbar = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div className="bg-[#26235B] text-white ">
      <div className="w-4/5 mx-auto py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Logo />
        </div>

        <div className="md:hidden tiny:hidden sm:hidden">
          <NavigationLinks />
        </div>
        <div className="hidden md:block tiny:block sm:block">
          <HamburgerMenu />
        </div>

        {!isModalActive && (
          <div
            className="flex items-center space-x-4 md:hidden tiny:hidden sm:hidden"
            onClick={() => setIsModalActive(true)}
          >
            <Search />
            <Badge />
          </div>
        )}

        {isModalActive && (
          <div
            className="flex gap-8 border rounded-full md:hidde tiny:hidden sm:hidden"
            onClick={() => setIsModalActive(false)}
          >
            <div className="py-3 pl-6">Login</div>
            <div className="bg-[#FFB606] text-[#26235B] py-3  px-6 rounded-full">
              Register
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
