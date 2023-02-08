import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./Searchbox";
import { ACCESS_TOKEN } from "../constants";
import { getLogout } from "../util/ApiUtils";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "black !important",
    color: "white !important",
    marginTop: "45px",
    marginLeft: "1px",
    borderRadius: "25% 0 !important",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <Toolbar>
            {isLoggedIn && (
              <div className="bg-purple-600 rounded-2xl">
                <IconButton
                  size="inherit"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  classes={{
                    paper: classes.menu,
                  }}
                >
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
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
