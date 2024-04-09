import logo from "../../assets/flutter-logo.png";
import { CiGrid42 } from "react-icons/ci";
import { HiOutlineDevicePhoneMobile, HiOutlineUsers } from "react-icons/hi2";
import { PiScreencastThin } from "react-icons/pi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { GoSponsorTiers } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="w-full border-r">
      <div className="p-5 mb-5">
        <img src={logo} className="h-8" alt="" />
      </div>
      <div>
        <ul className="space-y-1">
          <li className="flex items-center gap-2 px-5 py-2 text-lg bg-[#F0F0F0]">
            <CiGrid42 /> Discover
          </li>
          <li className="flex items-center gap-2 px-5 py-2 text-lg text-[#989898]">
            <HiOutlineDevicePhoneMobile /> UI Kits
          </li>
          <li className="flex items-center gap-2 px-5 py-2 text-lg text-[#989898]">
            <PiScreencastThin /> Screens
          </li>
          <li className="flex items-center gap-2 px-5 py-2 text-lg text-[#989898]">
            <IoCodeSlashSharp /> Articles
          </li>
          <li className="flex items-center gap-2 px-5 py-2 text-lg text-[#989898]">
            <GoSponsorTiers /> Become Sponsor
          </li>
          <li className="flex items-center gap-2 px-5 py-2 text-lg text-[#989898]">
            <HiOutlineUsers /> Hire Flutter Dev
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h1 className="font-bold px-4 mb-2">All Screens</h1>
        <ul className="space-y-1">
          <li className="flex items-center justify-between px-5 py-1 text-[#989898]">
            <span>Sign in</span>
            <span>10</span>
          </li>
          <li className="flex items-center justify-between px-5 py-1 text-[#989898]">
            <span>Chat</span>
            <span>5</span>
          </li>
          <li className="flex items-center justify-between px-5 py-1 text-[#989898]">
            <span>Onboarding</span>
            <span>18</span>
          </li>
          <li className="flex items-center justify-between px-5 py-1 text-[#989898]">
            <span>E-commerce</span>
            <span>9</span>
          </li>
          <li className="flex items-center justify-between px-5 py-1 text-[#989898]">
            <span>Checkout</span>
            <span>10</span>
          </li>
          <li className="flex items-center justify-between px-5 py-1 text-[#989898]">
            <span>Error</span>
            <span>16</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
