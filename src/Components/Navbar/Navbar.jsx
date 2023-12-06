import { Link, NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import cart from "../../assets/cart.svg";
import MobNav from "./MobNav";
import logo from "../../assets/fav-05.svg";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useSelector } from "react-redux";
import { Trans, useTranslation } from "react-i18next";
import { LangContext } from "../../context/LangContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  let [products, setProducts] = useState([])
  let [isHidden, setIsHidden] = useState(false);
  let navigate = useNavigate();
  async function AllProducts() {
    try {
      await axios.get(`${import.meta.env.VITE_URL}/product/all`).then(res => {
        setProducts(res.data)
      }).catch(err => {
        console.log(err.message);
      })
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    AllProducts();
  }, []);
  const { lang, setLang, t, title, setTitle, dir, setDir } =
    useContext(LangContext);
  const totalPrice = useSelector((data) =>
    data.cart.items.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    )
  );

  let { customerToken, setCustomerToken } = useContext(LoginContext);
  let [path, setPath] = useState("myaccount");

  function setLanguage() {
    JSON.parse(localStorage.getItem("lang")) === "en"
      ? localStorage.setItem("lang", JSON.stringify("ar"))
      : localStorage.setItem("lang", JSON.stringify("en"));
    JSON.parse(localStorage.getItem("langtitle")) === "تصفح بالعربية"
      ? localStorage.setItem("langtitle", JSON.stringify("Browse in English"))
      : localStorage.setItem("langtitle", JSON.stringify("تصفح بالعربية"));
    JSON.parse(localStorage.getItem("dir")) === "ltr"
      ? localStorage.setItem("dir", JSON.stringify("rtl"))
      : localStorage.setItem("dir", JSON.stringify("ltr"));
    location.reload();
  }
  let [logState, setLogState] = useState(t("nav.myAccount"));

  function updateLogged() {
    if (localStorage.getItem("customerToken")) {
      setPath("myaccount");
      setLogState(t("nav.myAccount"));
    } else if (localStorage.getItem("customerToken") == null) {
      setPath("login");
      setLogState(t("nav.login"));
    }
  }

  useEffect(() => {
    updateLogged();
  }, [t]);

  useEffect(() => {
    updateLogged();
  }, [customerToken]);

  const [display, setDisplay] = useState(false);
  const [displayBck, setDisplayBck] = useState(false);
  const [displaySec, setDisplaySec] = useState("none");
  const Departments = [
    { title: t("departments.groceries"), link: "/groceries" },
    { title: t("departments.electronics"), link: "/electronics" },
    { title: t("departments.fashions"), link: "/fashion" },
    { title: t("departments.kids"), link: "/kids" },
    { title: t("departments.beauty"), link: "/beauty" },
    { title: t("departments.home"), link: "/" },
    // { title: t("departments.baby"), link: "/baby" },
    // { title: t("departments.Gifts"), link: "/gifts" },
    // { title: t("departments.patio"), link: "/gardens" },
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

  const DepartmentsDiv = () => {
    return (
      <>
        <div
          className={classes.dep}
          style={dir === "ltr" ? { left: "11rem" } : { right: "9rem" }}
        >
          <Link className={classes.dep_link} to="#">
            {t("nav.departments")}{" "}
          </Link>
          <ul>
            {Departments.map((dep, index) => (
              <li key={index}>
                <Link onClick={() => displaySecHandler()} to={dep.link}>
                  {dep.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  let i;
  let [newInfo2, setNewInfo2] = useState('')
  let [newInfo, setNewInfo] = useState([])

  function listProducts(e) {
    setNewInfo2(e.target.value)
    i = products?.filter((prod) => {
      if(lang=== 'en'){
        if (prod?.title.toLowerCase().includes(newInfo2)) {
          setIsHidden(false);
          setNewInfo(prod);
          return prod
        }
      }else if(lang==='ar' && prod.ar_title){
        if (prod?.ar_title.includes(newInfo2)) {
          setIsHidden(false);
          setNewInfo(prod);
          return prod
        }
      }
      
    })
    setNewInfo(i)
  }
  const ServicesDiv = () => {
    return (
      <>
        <div
          style={dir === "ltr" ? { left: "17rem" } : { right: "15rem" }}
          className={classes.dep}
        >
          <Link className={classes.dep_link} to="#">
            {t("nav.services")}
          </Link>
          <ul>
            {Services.map((dep, index) => (
              <li key={index}>
                <Link onClick={() => displaySecHandler()} to={dep.link}>
                  {dep.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  function displayHandler() {
    setDisplay(!display);
  }
  function displaySecHandler() {
    setDisplaySec("none");
    setDisplayBck(false);
  }
  return (
    <>
      <nav className={classes.nav} dir={JSON.parse(localStorage.getItem('dir')) || "ltr"}>
        <div className={classes.main_nav}>
          <div
            className={classes.bkdrop}
            style={{ display: display ? "block" : "none" }}
            onClick={() => displayHandler()}
          ></div>
          <div
            className={classes.bkdrop}
            style={{ display: displayBck ? "block" : "none" }}
            onClick={() => displaySecHandler()}
          ></div>
          <div className="d-flex align-items-center gap-2">
            <div className="show">
              <i
                className="fa-solid fa-bars"
                style={{ cursor: "pointer", fontSize: "1.6rem" }}
                onClick={() => displayHandler()}
              ></i>
            </div>
            <MobNav
              onclick={() => displayHandler()}
              display={display ? "flex" : "none"}
            />
            {displaySec === "none" ? (
              <></>
            ) : displaySec === "dep" ? (
              <DepartmentsDiv />
            ) : (
              <ServicesDiv />
            )}
            <Link to="/">
              <img
                className="show"
                src={logo}
                alt="logo"
                border="0"
                style={{ width: "35px", marginLeft: "1rem" }}
              />
            </Link>

            <Link to="/">
              <img
                className="hide"
                src="https://i.ibb.co/6X1M1bf/logo-04.png"
                alt="logo"
                border="0"
              />
            </Link>
          </div>
          <div className="hide  gap-3">
            <div
              className={classes.cat}
              onClick={() => {
                setDisplaySec("dep");
                setDisplayBck(true);
              }}
            >
              <i className="fa-solid fa-industry"></i>
              <p>{t("nav.departments")}</p>
            </div>
            <div
              className={classes.cat}
              onClick={() => {
                setDisplaySec("serv");
                setDisplayBck(true);
              }}
            >
              <i className="fa-solid fa-hand-holding-medical"></i>
              <p>{t("nav.services")}</p>
            </div>
          </div>

          <div className="d-flex flex-grow-1">
            <input type="search" placeholder={t("nav.search")} onChange={(e) => listProducts(e)} />
            {
              newInfo.length > 0 && newInfo2.length !== 0
                ?
                <div hidden={isHidden} className=" bg-light text-black rounded-3  row  mt-1  position-absolute translate-middle-x p-2" style={{width:'43%', height: '370px', zIndex: 99, left: '51%', top: '70%', overflowY: "scroll" }}>
                  {newInfo?.map((products) => <div key={products._id}  className="  mt-1 m-auto w-100"  >
                    <div className='fw-bold py-1   cursor-pointer text-black '
                    style={{cursor:'pointer'}}
                      onClick={() => {
                        setIsHidden(true)
                        navigate(`./product/${products._id}`)
                      }
                      }>
                      {/* <img className='img-fluid ' src={products.images[0]} alt={products.title} /> */}

                      <p dir={dir} className=' text-black ' style={{ fontSize: 10 }}>{lang==='en'?products.title:products.ar_title}</p>
                      {/* <p style={{ fontSize: 14 }} className="text-success text-center" > {products.price} $</p> */}

                    </div>
                  </div>
                  )}
                </div>
                : ''
            }
          </div>


          <div className={classes.wrap}>
            <Link to="myitems" className={`hide_sm ${classes.cat}`}>
              <i className="fa-regular fa-heart"></i>
              <p>{t("nav.myItems")}</p>
            </Link>
            <Link to={path} className={`hide_sm ${classes.cat}`}>
              <i className="fa-regular fa-user"></i>
              <p>{logState}</p>
            </Link>
            <Link className={classes.cart} to="/cart">
              <img src={cart} />
              <div className="d-flex flex-column">
                <p>{t("nav.myCart")}</p>
                <p>
                  $
                  {totalPrice == 0
                    ? "0.00"
                    : Math.round((totalPrice + Number.EPSILON) * 100) / 100}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.sec_nav}>
          <div className="d-flex gap-2 align-items-center">
          
            <div
            dir={dir}
              className="d-flex align-items-center gap-2 cursor-pointer"
              style={{ cursor: "pointer" }}
              onClick={() => setLanguage()}
            >
              <p>
                {JSON.parse(localStorage.getItem("langtitle")) ||
                  "تصفح بالعربية"}
              </p>
            </div>
          </div>
          <div className="d-none gap-3 d-lg-flex d-xl-flex">
            <Link to="/electronics">{t("departments.electronics")}</Link>
            <Link to="/beauty">{t("departments.beauty")}</Link>
            <Link to="/groceries">{t("departments.groceries")}</Link>
            <Link to="/kids">{t("departments.kids")}</Link>
            <Link to="/fashion">{t("departments.fashions")}</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
