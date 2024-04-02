const CouponModal = ({ onClose }: any) => {
  return (
    <div className=" bg-[#F6F6F6] rounded-full w-64 pl-6 py-[6px] pr-[6px] flex gap-6 items-center lg:absolute -bottom-12">
      <div className="text-[#B9B9B9] text-[12px] font-extralight">
        Enter Coupon if Any
      </div>
      <div
        className=" bg-[#FBB306] text-[#163649] px-5 py-3 rounded-full"
        onClick={onClose}
      >
        Apply
      </div>
    </div>
  );
};

export default CouponModal;
