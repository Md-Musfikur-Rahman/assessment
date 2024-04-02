"use client";

import { useState } from "react";
import { Cards, CheckOutModal, Proceed } from "@/components";

export default function Home() {
  const Infos = [
    {
      imageSrc: "/img/Rectangle 33.png",
      category: "Street Fight",
      title: "MUAY THAI",
      instructor: "Adil Rashid",
      time: "06:50:50",
      played: "12",
      price: "500",
    },
    {
      imageSrc: "/img/Rectangle 32.png",
      category: "Street Fight",
      title: "BOXING",
      instructor: "Adil Rashid",
      time: "06:50:50",
      played: "12",
      price: "500",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-[85%] md:w-full tiny:w-full mx-auto mt-16">
        <div className="flex gap-4 md:gap-2 tiny:flex-col sm:flex-col">
          <div className="w-[70%] md:w-2/3 tiny:w-full tiny:px-3 sm:w-full sm:px-3">
            {Infos.map((info, index) => (
              <Cards
                key={index}
                imageSrc={info.imageSrc}
                category={info.category}
                title={info.title}
                instructor={info.instructor}
                time={info.time}
                played={info.played}
                price={info.price}
              />
            ))}
          </div>
          <div className="w-[25%] md:w-[30%] tiny:w-full sm:w-full">
            <Proceed onCheckoutClick={() => setIsModalOpen(true)} />
          </div>
        </div>
      </div>
      {isModalOpen && <CheckOutModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
