import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import classes from "../DropDownCat/DropDownCat.module.css";

const DropDownList = (props) => {
  const [isDropdownOpen, setisDropdownOpen] = useState("none");
  const [changeIcon, setChangeIcon] = useState("down");

  const toggleDropdown = () => {
    setisDropdownOpen(isDropdownOpen === "none" ? "inline" : "none");
    setChangeIcon(changeIcon === "down" ? "up" : "down");
  };
  return (
    <>
      <div>
        <div>
          <button
            className=" btn border border-white w-100"
            type="button"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
          >
            <div className="d-flex justify-content-between">
              <p className="mt-3 fs-6 text-muted ">{props.h}</p>
              <i className={`fa-solid fa-chevron-${changeIcon} mt-3`}></i>
            </div>
          </button>
          <ul
            className={` ${classes.c} border border-white`}
            style={{ display: `${isDropdownOpen}` }}
          >
            <li className="text-muted">{props.p}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropDownList;
