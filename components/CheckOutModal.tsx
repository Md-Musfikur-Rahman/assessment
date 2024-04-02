import Image from "next/image";
import PaymentInfo from "./PaymentInfo";

const CheckOutModal = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      {/* Modal */}
      <div className="w-[75%] md:w-[90%] md:p-4 tiny:w-[90%] tiny:p-2 sm:w-[90%] sm:p-2 bg-[#FCFCFC] rounded-[25px] shadow-lg relative z-50 flex justify-between gap-4 border-[#BCBBCC] border-4">
        <div className=" -ml-1 -my-1 relative md:hidden tiny:hidden sm:hidden">
          <Image src="/img/Maskgroup.svg" alt="mask" height={1} width={368} />{" "}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
            <div className="font-bold text-3xl">Pay Now!</div>
            <div className="font-thin text-2xl text-center mt-2 px-2">
              Pay from the earnings you have in your account.
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-3xl font-bold">PROCEED TO PAY</div>
          <div className=" w-full">
            <PaymentInfo />
          </div>
          <div className="flex flex-col gap-[60px] justify-center">
            <div className="flex flex-col gap-6">
              <div className=" text-xl font-extralight">PAYMENT TYPE</div>
              <div className="flex tiny:flex-col gap-16">
                {options.map((option) => (
                  <div className="flex  items-center gap-4" key={option.id}>
                    <input
                      type="radio"
                      id={option.id}
                      name="paymentMethod"
                      value={option.id}
                    />
                    <label htmlFor={option.id}>
                      <Image
                        src={option.src}
                        alt={option.alt}
                        height={option.height}
                        width={option.width}
                      />
                    </label>
                    <div className="text-base font-extralight">
                      {option.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="bg-[#26235B] w-fit mx-auto text-white px-[100px] py-[14px] rounded-full font-extralight text-base"
              onClick={onClose}
            >
              Confirm Payment
            </button>
          </div>
        </div>

        <div className="pr-4 pt-4">
          <div className=" w-12 h-12 bg-white rounded-full shadow-lg flex justify-center items-center ">
            <Image
              src="/img/Cancel.svg"
              alt="cancle"
              height={16}
              width={16}
              onClick={onClose}
            />
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-white opacity-55 cursor-pointer z-20"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default CheckOutModal;

const options = [
  {
    id: "bkash",
    src: "/img/Rectangle295.svg",
    alt: "bkash",
    height: 25,
    width: 25,
    label: "Bkash",
  },
  {
    id: "nagad",
    src: "/img/nagad.svg",
    alt: "nagad",
    height: 20,
    width: 20,
    label: "Nagad",
  },
  {
    id: "ssl",
    src: "/img/ssl.svg",
    alt: "ssl",
    height: 20,
    width: 20,
    label: "SSl Payment",
  },
];
