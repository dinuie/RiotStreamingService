import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Welcome = () => {
  return (
    <div className="h-screen">
      <Navbar showSearchBox={false} />
      <div className="h-screen flex items-center justify-center">
        <div className="text-white text-center py-10">
          <Link to="/">
            <button className="mt-20 text-black font-sans bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center">
              Go to Home Page
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
