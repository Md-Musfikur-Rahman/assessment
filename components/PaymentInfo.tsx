interface SectionProps {
  title: string;
  children: React.ReactNode;
}

interface TextSectionProps {
  text: string;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="flex justify-between items-center text-[#565656]">
      <div className="capitalize">{title}</div>
      <div className="capitalize font-light text-left">{children}</div>
    </div>
  );
};

const TextSection = ({ text }: TextSectionProps) => {
  return (
    <div className="flex justify-between items-center text-[#565656]">
      <div className="text-[10px] text-[#949494] font-light font">{text}</div>
    </div>
  );
};

const Divider = () => {
  return <div className="bg-[#BCBBCC] w-full h-[1px] z-0"></div>;
};

const PaymentInfo = () => {
  return (
    <div className="flex flex-col gap-6">
      <Section title="Price">: 1,000 BDT</Section>
      <Section title="Coupon Discount">: 200 BDT</Section>
      <TextSection text="This is for using the platform and get support lifetime!" />
      <Divider />
      <Section title="Total">: 800 BDT</Section>
      <TextSection text="I agree to Terms & Conditions, Privacy & Policy and Refund Policy" />
    </div>
  );
};

export default PaymentInfo;
