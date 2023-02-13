import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { navigate } from '@reach/router';
import SearchBox from "./Searchbox";
import {getLogout} from "../util/ApiUtils";
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ifCurrentUser from "../components/useCurrentUser"

const Navbar = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isLoggedIn = ifCurrentUser();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    getLogout();
      window.location.reload();

  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-purple-600 hover:text-pink-500 font-sans font-semibold text-3xl">
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
              <div className="rounded-full text-black  ml-7 mb-0 mt-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 px-1.5 py-1.5 text-center mr-2">
                <IconButton
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
            <div>
                <SearchBox handleSearch={props.handleSearch}/>
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
                                    <AccountCircle/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Settings</MenuItem>
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
