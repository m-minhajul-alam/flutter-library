import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import Sidebar from "../shared/sidabar/Sidebar";

const Root = () => {
  return (
    <div className="max-w-[1550px] mx-auto flex">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6 mx-3">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
