import { useContext, useEffect, useState } from "react";

import style from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LangContext } from "../../context/LangContext";

export default function Cart() {
  let navigate = useNavigate();
  const [isDropdownOpen, setisDropdownOpen] = useState("none");
  const cart = useSelector((data) => data.cart.items);
  const dispatch = useDispatch();
  const [changeIcon, setChangeIcon] = useState("down");
  let [counter, setCounter] = useState(0);
  let [disabled, setDisabled] = useState(true);
  const { lang, dir } = useContext(LangContext);
  const toggleDropdown = () => {
    setisDropdownOpen(isDropdownOpen === "none" ? "inline" : "none");
    setChangeIcon(changeIcon === "down" ? "up" : "down");
  };

  function increaseQuantityHandler(productID) {
    dispatch(addToCart({ id: productID }));
  }

  function dereaseQuantityHandler(productID) {
    dispatch(removeFromCart({ id: productID }));
  }
  function handleCheckout() {
    if (localStorage.getItem("customerToken")) {
      navigate("/checkout");
    } else {
      toast.warn("you Have to login first!");
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    }
  }
  useEffect(() => {
    if (cart.length == 0 || !cart) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [cart]);
  return (
    <div className="p-3" dir={dir}>
      <h4>
        {lang == "en" ? "Cart" : "السلة"}
        <span className="ms-1 text-body-secondary ">
          ({cart.length} {lang == "en" ? "item" : "عنصر"})
        </span>
      </h4>
      <section>
        <ToastContainer />
        <div className="row d-flex justify-content-between position-relative">
          <div className="col-md-8 ">
            <div className="mt-4">
              <div>
                <span style={{ fontSize: "22px" }} className="d-flex ">
                  <p className="mt-2">
                    <span className="me-2">
                      <img
                        src="https://i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg"
                        alt="icon image"
                      />
                    </span>
                    {lang == "en"
                      ? "Pickup and delivery option"
                      : "خيارات الشحن والاستلام"}
                  </p>
                  <i
                    className={`fas fa-chevron-${changeIcon} mt-3 ms-3 `}
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                  ></i>
                </span>
                <ul
                  className={` ${style.c} border border-white`}
                  style={{ display: `${isDropdownOpen}` }}
                >
                  <li className="">
                    <div className="row">
                      <div className="col-md-4 ">
                        <button
                          className=" w-100 btn border border-2 border-black py-3 "
                          type="button"
                        >
                          <div>
                            <img
                              alt="intent image for Shipping"
                              src="https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div className="fw-bold fs-6">
                            {lang == "en" ? "Shipping" : " الشحن"}
                          </div>
                          <div className=" text-body-secondary">
                            {lang == "en" ? "Available" : " متاح"}
                          </div>
                        </button>
                      </div>

                      <div className="col-md-4">
                        <button
                          disabled="true"
                          className="w-100 btn border border-1 border-black  py-3  "
                          type="button"
                        >
                          <div>
                            <img
                              alt="intent image for Pickup"
                              src="https://i5.walmartimages.com/dfw/4ff9c6c9-d610/k2-_d157e508-3c5c-4c97-b344-51406648661e.v1.svg"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div>{lang == "en" ? "Pickup" : "استلام"}</div>
                          <div>
                            {lang == "en" ? "Not Available" : " غير متاح"}
                          </div>
                        </button>
                      </div>

                      <div className="col-md-4">
                        <button
                          disabled="true"
                          className="w-100 btn border border-1 border-black  py-3"
                          type="button"
                        >
                          <div>
                            <img
                              alt="intent image for Delivery"
                              src="https://i5.walmartimages.com/dfw/4ff9c6c9-db63/k2-_08c72d67-7046-4b24-919e-7b5c945ba85d.v1.svg"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div className="">
                            {lang == "en" ? "Delivery" : " التوصيل "}
                          </div>
                          <div>
                            {lang == "en" ? "Not Available" : " غير متاح"}
                          </div>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-column p-4 ">
              {cart.map((item) => (
                <div className="row border py-3 mb-2 rounded d-flex align-items-center">
                  <div className="col-12 col-md-6 d-flex align-items-center gap-3">
                    <img
                      src={item.img}
                      className="img-fluid rounded-5"
                      style={{ height: "100px", width: "100px" }}
                    />
                    <h6 className={style.title}>{item.title}</h6>
                  </div>
                  <div className="col-6 col-md-3 d-flex flex-column gap-2">
                    <p>
                      unit price :{" "}
                      <span className={style.price}>${item.price}</span>
                    </p>
                    <p>
                      total price :{" "}
                      <span className={style.price}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                    <h6 className="pb-2">Quantity</h6>
                    <div className="d-flex overflow-hidden  justify-content-center align-items-center gap-4">
                      <i
                        onClick={() => increaseQuantityHandler(item.id)}
                        class="fa-solid fa-plus"
                      ></i>
                      <p className={style.quantity}>{item.quantity}</p>
                      <i
                        onClick={() => dereaseQuantityHandler(item.id)}
                        class="fa-solid fa-minus"
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`col-md-4 px-4  py-4 shadow  border border-1 rounded-4 mt-5   ${style.col_4}`}
          >
            <div className="ms-2 ">
              <div className="d-flex justify-content-between">
                <h6>
                  {lang == "en" ? "Subtotal" : "الإجمالي"}

                  <span className="text-body-secondary ms-1">
                    (
                    {cart.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue.quantity,
                      0
                    )}{" "}
                    {lang == "en" ? "item" : "منتج"}) 
                  </span>
                </h6>
                <p>
                  $
                  {cart.reduce((accumulator, currentValue) => {
                    let total =
                      accumulator + currentValue.price * currentValue.quantity;
                    return Math.round((total + Number.EPSILON) * 100) / 100;
                  }, 0)}
                </p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="text-body-secondary" style={{ fontSize: 13 }}>
                {lang == 'en' ? 'Shipping':'مصاريف الشحن'}

                </p>
                <span className="text-success">{lang == 'en'? 'Free':'مجاني'}</span>
              </div>

              <div className="mt-4 d-flex justify-content-between ">
                <h6>{lang=='en'?'Taxes':'الضرائب'}</h6>
                <p>0.00</p>
              </div>

              <hr className="text-body-secondary " />

              <div className="mt-5 d-flex justify-content-between">
                <h6>{lang == 'en'?'Estimated total':'إجمالي الفاتورة'}</h6>
                <h6>
                  $
                  {cart.reduce((accumulator, currentValue) => {
                    let total =
                      accumulator + currentValue.price * currentValue.quantity;
                    return Math.round((total + Number.EPSILON) * 100) / 100;
                  }, 0)}
                </h6>
              </div>

            
            </div>
            <hr className="text-body-secondary " />

            <div className="text-center mt-2">
              <button
                className="btn btn-dark rounded-4   "
                style={{ width: "100%" }}
                disabled={disabled}
                onClick={() => handleCheckout()}
              >
                {lang == 'en'?'Continue to checkout ':'انتقل إلى الدفع '}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
