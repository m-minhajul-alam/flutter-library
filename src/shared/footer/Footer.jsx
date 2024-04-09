import logo from "../../assets/flutter-logo.png";
import { RiTwitterXLine } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      {/* FOOTER TOP */}
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-5 mb-8">
        {/* FOOTER START */}
        <div className="space-y-4">
          <img src={logo} alt="" className="h-6" />
          <p className="text-[#989898] text-sm">
            Beautifully designed, expertly crafted Flutter components and
            templates, to jumpstart <br />
            your projects and speed up your development process.
          </p>
          <div className="flex items-center gap-2">
            <button className="bg-black text- text-white p-1.5 rounded-full">
              <RiTwitterXLine />
            </button>
            <button className="bg-black text- text-white p-1.5 rounded-full">
              <ImLinkedin />
            </button>
            <button className="bg-black text- text-white p-1.5 rounded-full">
              <FaInstagram />
            </button>
            <button className="bg-black text- text-white p-1.5 rounded-full">
              <FaFacebookSquare />
            </button>
          </div>
        </div>

        {/* FOOTER END */}
        <div className="flex gap-8 text-sm">
          <ul className="space-y-1.5">
            <li className="font-bold">Explore</li>
            <li>Blog</li>
            <li>Templates</li>
            <li>Screens</li>
          </ul>
          <ul className="space-y-1.5">
            <li className="font-bold">Support</li>
            <li>Pricing</li>
            <li>Become a sponsor</li>
            <li>Hire top Flutter Devs</li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-between py-3 border-t text-[#989898] text-xs lg:text-sm">
        <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
        <p>
          <span>Privacy Policy | </span> <span>Terms & Conditions | </span>
          <span>Cookie Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
