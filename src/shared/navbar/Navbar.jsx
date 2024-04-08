import { CiSearch } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 flex items-center justify-between">
      {/* SEARCH SECTION */}

      <div className="bg-[#F0F0F0] flex items-center rounded-full">
        <button className="pl-3">
          <CiSearch className="text-2xl" />
        </button>
        <input
          type="text"
          className="bg-transparent py-2.5 px-3 w-full rounded-r-full focus:outline-none"
          placeholder="Search..."
        />
      </div>

      {/* BUTTONS SECTION */}
      <div className="flex items-center gap-3">
        <button>
          <IoSunnyOutline className="text-3xl"/>
        </button>
        <button className="p-3 border rounded-xl font-bold">Log in</button>
        <button className="p-3 border rounded-xl font-bold bg-black text-white">Get Pro</button>
      </div>
    </div>
  );
};

export default Navbar;
