import React, { useContext, useEffect,useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

import style from "./AccNav.module.css";
import { LoginContext } from "../../context/LoginContext";
import { LangContext } from "../../context/LangContext";
const AccNav = () => {
  let { customerToken, setCustomerToken } = useContext(LoginContext);
  const [info,setInfo]= useState({})
  const {dir,lang} = useContext(LangContext)
  let navigate = useNavigate();
  function logout() {
    localStorage.removeItem("customerToken");
    setCustomerToken(null);
    navigate("/login");
  }
  useEffect(()=>{
    async function getPersonalInfo(){
      try {
        const res = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_URL}/customer/info`,
          headers: { authorization: `${localStorage.getItem("customerToken")}`,}, 
        });
        console.log(res.data);
        setInfo(res.data)
      } catch (err) {
        console.log(err);
      }
    }

    getPersonalInfo()
  },[])
  return (
    <div dir={dir}
      style={lang == 'en'? { borderRight: "1px solid rgb(209, 209, 209)" } : { borderLeft: "1px solid rgb(209, 209, 209)" }}
      className={`d-flex flex-column ${style.links}`}
    >
      <div>
        <h5>Hi, {info.name}</h5>
        <hr />
      </div>
      <a
        href="#purchase"
      >
        <i class="fa-regular fa-newspaper"></i> &nbsp; {lang =='en' ? 'Purchase History':'سجل المدفوعات'}
      </a>
    
      
      <hr />
      <h6>{lang == 'en' ? 'Manage Account':'إدارة الحساب'}</h6>
      <a
        href="#personalinfo"
      >
        <i class="fa-solid fa-user"></i> &nbsp; {lang =='en' ? 'Personal info':' المعلومات الشخصية'}
      </a>
      <a
        href="#addresses"
      >
        <i class="fa-solid fa-location-crosshairs"></i> &nbsp;{lang =='en' ? 'Addresses ':' العناوين'}
      </a>
   
     
      <hr />
      <NavLink to="/login" onClick={logout}>
        <i class="fa-solid fa-right-from-bracket"></i> &nbsp;{lang =='en' ? 'Sign out':' تسجيل الخروج'}
      </NavLink>
    </div>
  );
};

export default AccNav;
