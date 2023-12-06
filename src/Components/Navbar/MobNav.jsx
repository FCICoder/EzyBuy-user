import React, { useContext, useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from '../../assets/fav-05.svg'
import { LangContext } from "../../context/LangContext";
import { right } from "@popperjs/core";

const MobNav = (props) => {
  const {t,dir} = useContext(LangContext)

  const Departments = [
    { title: t("departments.groceries"), link: "/groceries" },
    { title: t("departments.electronics"), link: "/electronics" },
    { title: t("departments.fashions"), link: "/fashion" },
    { title: t("departments.kids"), link: "/kids" },
    { title: t("departments.beauty"), link: "/beauty" },
    { title: t("departments.home"), link: "/home" },
    { title: t("departments.baby"), link: "/baby" },
    { title: t("departments.Gifts"), link: "/gifts" },
    { title: t("departments.patio"), link: "/gardens" },
  ];
  const Services = [
    { title: t("services.health"), link: "/health" },
    { title: t("services.auto"), link: "/auto" },
    { title: t("services.protection"), link: "/protection" },
    { title: t("services.pay"), link: "/ezybuypay" },
    { title: t("services.customCakes"), link: "/cakes" },
    { title: t("services.photo"), link: "/photo" },
    { title: t("services.money"), link: "/money" },
    { title: t("services.community"), link: "/community" },
  ];
  const [section, setSection] = useState(Departments);
  const [subMenu, setSubMenu] = useState(false);
  return (
    <div className={classes.mobNav} style={dir ==="rtl"?{display: props.display,right:"0",marginRight: "-600px"}:{display: props.display,left:"0",marginLeft: "-600px"}}>
      <div className="d-flex gap-1 justify-content-center align-items-center">
      <Link to="/">
          <img
         
            src={logo}
            alt="logo"
            border="0"
            style={{width:'35px'}}
            />
        </Link>
        <h3 style={{margin:'0'}}>{t("mobNav.welcome")}</h3>
      </div>
      {/* Main menu */}
      {!subMenu ? (
        <div className="overflow-auto p-3 ">
          <Link onClick={props.onclick} href="#" className="d-flex gap-2">
            <img
              className="logo"
              style={{ height: "25px" ,width:'auto'}}
              src="https://i.ibb.co/6X1M1bf/logo-04.png"
            />
            <p style={{fontSize:'1rem'}}> +</p>
          </Link>
          <hr />
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-solid fa-receipt"></i>
            <p>{t("mobNav.purchaseHistory")}</p>
          </Link>
          <Link
            onClick={props.onclick}
            to='myitems'
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-solid fa-box"></i>
            <p>{t("mobNav.myItems")}</p>
          </Link>
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-regular fa-user"></i>
            <p>{t("mobNav.account")}</p>
          </Link>
          <hr />
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-regular fa-circle-question"></i>
            <p>{t("mobNav.help")}</p>
          </Link>
          <hr />
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-regular fa-heart"></i>
            <p>{t("mobNav.lists")}</p>
          </Link>
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-solid fa-gift"></i>
            <p>{t("mobNav.registries")}</p>
          </Link>
          <hr />
          <Link
            className="d-flex justify-content-between align-items-center"
            onClick={() => {
              setSubMenu(true);
              setSection(Departments);
            }}
          >
            <div href="#" className="d-flex gap-3 align-items-center mb-2">
              <i className="fa-solid fa-industry"></i>
              <p>{t("mobNav.departments")}</p>
            </div>
            <i className={`fa-solid ${dir === "ltr"?'fa-chevron-right':"fa-chevron-left"}`}></i>
          </Link>
          <Link
            className="d-flex justify-content-between align-items-center"
            onClick={() => {
              setSubMenu(true);
              setSection(Services);
            }}
          >
            <div href="#" className="d-flex gap-3 align-items-center mb-2">
              <i className="fa-solid fa-hand-holding-medical"></i>
              <p>{t("mobNav.services")}</p>
            </div>
            <i className={`fa-solid ${dir === "ltr"?'fa-chevron-right':"fa-chevron-left"}`}></i>
          </Link>
          <hr />
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center "
          >
            <i className="fa-regular fa-comment"></i>
            <p>{t("mobNav.giveFeedback")}</p>
          </Link>
          <hr />
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center "
          >
            <i className="fa-solid fa-right-to-bracket"></i>
            <p>{t("mobNav.signout")}</p>
          </Link>
        </div>
      ) : (
        <div className="overflow-auto p-3 d-flex flex-column gap-2">
          <Link
            onClick={() => {
              setSubMenu(false);
            }}
          >
            {t("mobNav.backToMenu")}
          </Link>
          <hr />
          <div className="overflow-auto p-1 d-flex flex-column gap-2">
            {section.map((item) => (
              <Link onClick={props.onclick} to={item.link}>{item.title}</Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobNav;
