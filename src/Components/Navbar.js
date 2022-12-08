import React from "react";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const Navbar = ({ username, firstname, lastname, image }) => {
  return (
    <div className="flex justify-between  bg-orange-800 p-3">
      <div className="flex text-white items-center gap-2">
        <WidgetsOutlinedIcon />
        <Link to="/">
          <p>Project Name</p>
        </Link>
      </div>
      <div className="flex text-white items-center gap-3 text-xs ">
        <p>
          {firstname} {lastname}
        </p>
        <img
          className="rounded-full border-2 border-white w-10 h-10 object-cover"
          src={image}
          alt=""
        />
        <p>
          {username}
          <ArrowDropDownIcon />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
