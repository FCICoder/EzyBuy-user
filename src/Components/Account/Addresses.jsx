import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { LangContext } from '../../context/LangContext';

const Addresses = () => {
  const [info, setInfo] = useState({});
  const {lang,dir} = useContext(LangContext)
  useEffect(() => {
    async function getPersonalInfo() {
      try {
        const res = await axios({
          method: "get",
          url: `${import.meta.env.VITE_URL}/customer/info`,
          headers: {
            authorization: `${localStorage.getItem("customerToken")}`,
          },
        });
        setInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getPersonalInfo();
  }, []);
  return (
    <div id='addresses' dir={dir}>
        <h5>{lang =='en' ? 'Addresses ':' العناوين'}:</h5>
        <div className='p-3 border rounded'>

        <p>{info?.address} - {info?.city}</p>
        </div>
    </div>
  )
}

export default Addresses