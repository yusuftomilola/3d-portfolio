import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
          }}
        >
          <img
            src={logo}
            alt="my-logo"
            className="w-[10px] h-[10px] object-contain"
          />
        </Link>

        <Link to="https://google.com">About</Link>

        <Link to="https://naijabuzz300.net/biography">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
