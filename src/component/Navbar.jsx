import React from "react";
import navbarData from "./../data/navbarData.json";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 rounded-tr-[20px] rounded-bl-[20px] border-b  border-l border-border_primary text-white bg-background_ternary bg-opacity-60">
      <div className="flex px-6">
        {navbarData.map((item) => (
          <NavLink to={item.navLink} className={({isActive})=> isActive ? "text-text_yellow" :""}><p className="px-6 py-5 opacity-90 hover:opacity-60 transition-opacity duration-200 ease-in-out" >{item.navItem}</p></NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
