import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import Sidebar from "../shared/sidabar/Sidebar";

const Root = () => {
  return (
    <div className="max-w-[1550px] mx-auto">
      <div className="flex gap-5 lg:mx-5">
        <div className="w-1/6 hidden lg:block">
          <Sidebar />
        </div>
        <div className="w-5/6 mx-auto">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Root;
