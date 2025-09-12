import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const Default = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Default;
