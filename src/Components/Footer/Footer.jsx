import Classes from "./Footer.module.css";
import React, { useState } from "react";
export default function Footer() {
  const [isDropdownOpen, setisDropdownOpen] = useState("none");
  const [changeIcon, setChangeIcon] = useState("down");

  const toggleDropdown = () => {
    setisDropdownOpen(isDropdownOpen === "none" ? "inline" : "none");
    setChangeIcon(changeIcon === "down" ? "up" : "down");
  };
  return (
    <>
      <footer className="mt-5">
        <div className="overflow-hidden ">
          

          <div
            className={`d-flex row justify-content-around ${Classes.footerPart2}`}>
            {/* <div className={`col-lg-2 mt-5 mb-5 col-md-4 col-sm-4 ms-2 mb-5`}>
              <div className="">
                <button
                  className={`btn w-75 border border-light ${Classes.h}`}
                  type="button"
                  onClick={toggleDropdown}
                  
                   
                >
                  <div className="d-flex justify-content-between">
                    <span className=" text-light">language</span>
                    <i className={`fa-solid fa-chevron-${changeIcon} text-light`}></i>
                  </div>
                </button>
                <ul
                  className={` ${Classes.c}`}
                  style={{ display: `${isDropdownOpen}` }}
                >
                  <li>
                    <a className="dropdown-item ms-3 mb-2 mt-1" href="#">
                    English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item  ms-3 mb-2 " href="#">
                    Arabic
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className={`col-lg-3 mt-5 mb-5 col-md-4 col-sm-4 ms-4` }>
              <a href="">All Departments</a>
              <br />
              <a href="">Store Directory</a>
              <br />
              <a href="">Careers</a>
              <br />
              <a href="">Our Company</a>
              <br />
              <a href="">Sell on Walmart.com</a>
              <br />
              <a href="">Help</a>
              <br />
              <a href="">COVID-19 Vaccine Scheduler</a>
            </div>
            <div className={`col-lg-3 mt-5 mb-5 col-md-4 col-sm-4 ms-4`}>
              <a href="">Product Recalls</a>
              <br />
              <a href="">Accessibility</a>
              <br />
              <a href="">Tax Exempt Program</a>
              <br />
              <a href="">Get the Walmart App</a>
              <br />
              <a href="">Sign-up for Email</a>
              <br />
              <a href="">Safety Data Sheet</a>
              <br />
              <a href="">Terms of Use</a>
            </div>
            <div className={`col-lg-3 mt-5 mb-5 col-md-4 col-sm-4 ms-4`}>
              <a href="">Privacy & Security</a>
              <br />
              <a href="">California Supply Chain Act</a>
              <br />
              <a href="">Privacy choices iconYour </a>
              <br />
              <a href="">Notice at Collection</a>
              <br />
              <a href="">Request My Personal </a>
              <br />
              <a href="">Brand Shop Directory</a>
              <br />
              <a href="">IYWYK</a>
            </div>
          </div>
          <div>
            <div className={`${Classes.footerPart3}`}>
            <p>&copy; 2023 Walmart. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
