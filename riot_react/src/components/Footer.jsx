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
      style={{
        backgroundColor: "black",
        color: "lightgrey",
        padding: "20px",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
        fontFamily: "Helvetica",
      }}
    >
      <p>
        Stream all your favorite movies with ease on our app. Stay up to date
        with the latest releases and never run out of things to watch!
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="#">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ color: "white", margin: "10px" }}
            size="2x"
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "white", margin: "10px" }}
            size="2x"
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faTwitterSquare}
            style={{ color: "white", margin: "10px" }}
            size="2x"
          />
        </a>
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <b className="text-purple-600">RIOT STREAMING SERVICE</b>
      </p>
    </footer>
  );
};

export default Footer;
