import React from "react";
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";
import Footer from "../components/Footer";

function HomeLayout({ props, children }) {
  return (
    <>
      <div>
        <Navbar />
        <FoodTab />{" "}
      </div>
      <div className="container mx-auto px-4 lg:px-10 bg-#f8f8f8">{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default HomeLayout;
