"use client";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={handleModalToggle}>Menu</button>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-1/2  text-black p-10 rounded-lg flex justify-between items-start gap-8 z-50">
            <ul className="flex flex-col gap-4">
              <li>Home</li>
              <li>About</li>
              <li>Courses</li>
              <li>Shop</li>
              <li>Events</li>
              <li>Contact</li>
            </ul>
            <button onClick={handleModalToggle}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
