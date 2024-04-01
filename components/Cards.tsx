import React from "react";
import Image from "next/image";

interface CardsProps {
  imageSrc: string;
  category: string;
  title: string;
  instructor: string;
  time: string;
  played: string;
  price: string;
}

const Cards = ({
  imageSrc,
  category,
  title,
  instructor,
  time,
  played,
  price,
}: CardsProps) => {
  return (
    <div className="bg-[#FCFCFC] border rounded-2xl shadow-sm p-4 mb-5">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <Image src={imageSrc} alt={title} height={285} width={440} />
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="text-base font-extralight">{category}</div>
                <div className="flex gap-8">
                  <Image
                    src="/img/Group.svg"
                    alt="share"
                    height={16}
                    width={16}
                  />
                  <Image
                    src="/img/Bin.svg"
                    alt="share"
                    height={16}
                    width={16}
                  />
                </div>
              </div>
              <div className="text-base font-bold">{title}</div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-base font-extralight">
                Instructor : {instructor}
              </div>
              <div className="flex gap-6">
                <div className="flex gap-2">
                  <Image
                    src="/img/Hourglass.svg"
                    alt="hour"
                    height={16}
                    width={16}
                  />
                  <div className="text-base font-extralight">{time}</div>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/img/Playbutton.svg"
                    alt="play"
                    height={16}
                    width={16}
                  />
                  <div className="text-base font-extralight">{played}</div>
                </div>
              </div>
            </div>

            <div className="text-3xl">{price} BDT</div>

            <div className="flex gap-2">
              <div className="text-base font-light">Have a Coupon Code</div>
              <Image
                src="/img/arrow 2.svg"
                alt="arrow"
                height={16}
                width={16}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src="/img/Group-2.svg" alt="group" height={16} width={16} />
          <div className="text-[14px] font-extralight">Course Details</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
