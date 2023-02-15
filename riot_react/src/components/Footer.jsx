import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="bg-black bg-opacity-50 text-lightgrey py-5 text-center font-sans"
      style={{
        position: "relative",
        top: "33rem",
        width: "100%",
      }}
    >
      <div className="flex justify-center">
        <a href="#">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="text-white m-2 text-2xl"
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white m-2 text-2xl"
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className="text-white m-2 text-2xl"
          />
        </a>
      </div>
      <p className="text-white">Copyright &copy; {new Date().getFullYear()} </p>
      <b className="text-purple-600">RIOT STREAMING SERVICE</b>
    </footer>
  );
};

export default Footer;
