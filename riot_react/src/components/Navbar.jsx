import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./Searchbox";
import { ACCESS_TOKEN } from "../constants";
import { getLogout } from "../util/ApiUtils";

const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    getLogout();
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-purple-600 text-3xl font-bold cursor-pointer">
          RIOT STREAMING SERVICE
        </h1>
      </Link>
      <div>
        <SearchBox handleSearch={props.handleSearch} />
      </div>
      <div>
        {isLoggedIn ? (
          <button className="bg-purple-600 font-bold px-3 py-2 rounded cursor-pointer text-black" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/auth/login">
              <button className="text-white font-bold pr-4">Sign In</button>
            </Link>
            <Link to="/auth/register">
              <button className="bg-purple-600 font-bold px-3 py-2 rounded cursor-pointer text-black">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
