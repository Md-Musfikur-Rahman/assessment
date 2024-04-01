interface SectionProps {
  title: string;
  children: React.ReactNode;
}

interface TextSectionProps {
  text: string;
}

interface ButtonProps {
  backgroundColor: string;
  textColor: string;
  border?: boolean;
  children: React.ReactNode;
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

const Button = ({
  backgroundColor,
  textColor,
  border = false,
  children,
}: ButtonProps) => {
  const buttonStyle = `bg-[${backgroundColor}] ${textColor} capitalize py-3 px-4 text-center text-base rounded-full ${
    border ? "border border-[#BCBBCC]" : ""
  }`;

  return <div className={buttonStyle}>{children}</div>;
};

const Proceed = () => {
  return (
    <div className="bg-[#FCFCFC] border rounded-2xl shadow-sm px-4 py-[13px] flex flex-col gap-6">
      <div className="flex justify-between items-center text-[#26235B] ">
        <div className="uppercase text-2xl font-bold ">Proceed</div>
        <div className="capitalize font-light">Total 2 products</div>
      </div>
      <div className="flex flex-col items-start justify-end h-full relative">
        <div className="absolute bg-[#FFB606] w-[40%] h-1 z-10"></div>
        <div className="bg-[#BCBBCC] w-full h-[2px] z-0"></div>
      </div>

      <Section title="Price">1,000 BDT</Section>
      <Section title="Coupon Discount">200 BDT</Section>
      <TextSection text="This is for using the platform and get support lifetime!" />
      <Divider />
      <Section title="Total">800 BDT</Section>
      <TextSection text="I agree to Terms & Conditions, Privacy & Policy and Refund Policy" />

      <Button backgroundColor="#26235B" textColor="text-white">
        Checkout Now
      </Button>
      <Button backgroundColor="#FBB306" textColor="text-[#565656]">
        Continue Shopping
      </Button>
      <Button backgroundColor="transparent" textColor="text-[#163649]" border>
        Cancel
      </Button>
    </div>
  );
};

export default Proceed;
