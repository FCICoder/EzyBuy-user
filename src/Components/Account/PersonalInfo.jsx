import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LangContext } from "../../context/LangContext";
const PersonalInfo = () => {
  const [info, setInfo] = useState({});
  const [updatedInfo, setUpdatedInfo] = useState({});
  const {dir,lang} = useContext(LangContext)
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
        console.log(res.data);
        setInfo(res.data);
        setUpdatedInfo(res.data)
      } catch (err) {
        console.log(err);
      }
    }

    getPersonalInfo();
  }, []);

  async function submitHandler(e) {
    try {
      const res = await axios({
        method: "patch",
        url: `${import.meta.env.VITE_URL}/customer/update`,
        headers: {
          authorization: `${localStorage.getItem("customerToken")}`,
        },
        data: {
          data: updatedInfo
        },
      });
      // console.log(res.data);
      // setInfo(res.data);
    } catch (err) {
      console.log('asd');
      console.log(err);
    }
  }
  return (
    <div dir={dir} className="px-2" id="personalinfo">
      <h3>{lang =='en' ? 'Personal info':' المعلومات الشخصية'}</h3>
      <form onSubmit={(e) => submitHandler(e)}>
        <div class="form-group mb-2">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            defaultValue={info.name}
            value={updatedInfo.name}
            onChange={(e)=>setUpdatedInfo({...updatedInfo,name:e.target.value})}
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div class="form-group mb-2">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            defaultValue={info.email}
            value={updatedInfo.email}
            onChange={(e)=>setUpdatedInfo({...updatedInfo,email:e.target.value})}

            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group mb-2">
          <label for="number">mobile number</label>
          <input
            type="tel"
            class="form-control"
            defaultValue={info.phone}
            value={updatedInfo.phone}
            onChange={(e)=>setUpdatedInfo({...updatedInfo,phone:e.target.value})}

            name="tel"
            id="number"
            placeholder="Enter your mobile number"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your mobile number with anyone else.
          </small>
        </div>
        <div class="form-group mb-2">
          <label for="city">City</label>
          <input
            type="text"
            class="form-control"
            defaultValue={info.city}
            value={updatedInfo.city}
            onChange={(e)=>setUpdatedInfo({...updatedInfo,city:e.target.value})}

            name="city"
            id="city"
            placeholder="Enter your City Name"
          />
        </div>
        <div class="form-group mb-2">
          <label for="city">Address</label>
          <input
            type="text"
            class="form-control"
            defaultValue={info.address}
            value={updatedInfo.address}
            onChange={(e)=>setUpdatedInfo({...updatedInfo,address:e.target.value})}

            name="Address"
            id="Address"
            placeholder="Enter your Address "
          />
        </div>
        <button type="submit" class="btn btn-dark">
          Submit
        </button>
        <p>you'll always be able to change these information</p>
      </form>
      <hr />
    </div>
  );
};

export default PersonalInfo;
