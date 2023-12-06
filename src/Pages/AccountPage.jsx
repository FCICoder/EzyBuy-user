import React, { useCallback, useContext } from "react";
import AccNav from "../Components/Account/AccNav";
import { Outlet } from "react-router-dom";
import PurchaseHistory from "../Components/Account/PurchaseHistory";
import PersonalInfo from "../Components/Account/PersonalInfo";
import Addresses from "../Components/Account/Addresses";
import { LangContext } from "../context/LangContext";

const AccountPage = () => {
  const { lang,dir} = useContext(LangContext)
  return (
    <div className="container-fluid w-75 py-2" dir={dir}>
      <div className="row">
        <div style={{position:'sticky'}} className="col-3 d-none d-md-block">
          <AccNav />
        </div>
        <div className="col-12 col-md-9">
          <PurchaseHistory/>
          <PersonalInfo/>
          <Addresses/>
          
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
