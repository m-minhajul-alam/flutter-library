import { LuSettings2 } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

const screens = [
  {
    id: 1,
    img: "https://i.ibb.co/HGFH0bq/Phone-Mockup.jpg",
  },
  {
    id: 2,
    img: "https://i.ibb.co/k83yFqL/Phone-Mockup-1.jpg",
  },
  {
    id: 3,
    img: "https://i.ibb.co/JRk1cZH/Phone-Mockup-2.jpg",
  },
  {
    id: 4,
    img: "https://i.ibb.co/RNTvvTN/Phone-Mockup-3.jpg",
  },
  {
    id: 5,
    img: "https://i.ibb.co/4YKMYPp/Phone-Mockup-4.jpg",
  },
  {
    id: 6,
    img: "https://i.ibb.co/hmNdCYY/Phone-Mockup-5.jpg",
  },
  {
    id: 7,
    img: "https://i.ibb.co/DLKLmfK/Phone-Mockup-6.jpg",
  },
  {
    id: 8,
    img: "https://i.ibb.co/nDGsmt5/Phone-Mockup-7.jpg",
  },
  {
    id: 9,
    img: "https://i.ibb.co/kcnwc2n/Phone-Mockup-8.jpg",
  },
  {
    id: 10,
    img: "https://i.ibb.co/bsxTZwp/Phone-Mockup-9.jpg",
  },
];

const Screens = () => {
  return (
    <div className="max-w-7xl mx-auto mb-12">
      {/* TITLE */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl">Screens</h1>
        <button className="text-[#989898] text-sm">See all</button>
      </div>

      {/* MENUS */}
      <div className="flex items-center gap-3 mb-3">
        <button className="flex items-center gap-3 border py-1 px-3 rounded-full">
          <span>
            <LuSettings2 />
          </span>
          <span>Filters</span>
        </button>
        {/* <p className="text-[#989898]">|</p> */}
        <div className="bg-[#F0F0F0] w-[1px] h-6"></div>
        <button className="py-1 px-3 border rounded-full bg-black text-white">
          All
        </button>
        <button className="py-1 px-3 border rounded-full">New</button>
        <button className="py-1 px-3 border rounded-full">Popular</button>
        <button className="py-1 px-3 border rounded-full">Onboarding</button>
        <button className="py-1 px-3 border rounded-full">Auth</button>
        <button className="py-1 px-3 border rounded-full">Shop</button>
        <button className="py-1 px-3 border rounded-full">Chat</button>
        <button className="py-1 px-3 border rounded-full">
          TOP Verification
        </button>
        <button className="py-1 px-3 border rounded-full">Dashboard</button>
        <button className="py-1 px-3 border rounded-full">Food</button>
        <button className="py-1 px-3 border rounded-full">Restaurent</button>
        <button className="py-1 px-3 border rounded-full">Fitness</button>
        <button>
          <FaArrowRight />
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {screens?.map((screen) => (
          <div key={screen.id}>
            <img src={screen.img} className="rounded-lg" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screens;
