import { Cards, Proceed } from "@/components";

export default function Home() {
  return (
    <div className="w-[85%] mx-auto mt-16">
      <div className="flex gap-4">
        <div className="w-[70%]">
          <Cards />
        </div>
        <div className="w-[25%]">
          <Proceed />
        </div>
      </div>
    </div>
  );
}
