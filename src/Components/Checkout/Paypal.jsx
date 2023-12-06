import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Paypal = (props) => {
  const paypal = useRef();
  
  useEffect(() => {
    async function getPaypal() {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Ezy Buy order",
                  amount: {
                    currency_code: "USD",
                    value: props.totalPrice,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            await axios.post(
              `${import.meta.env.VITE_URL}/customer/order`,
              {
                headers: {
                  authorization: localStorage.getItem("customerToken"),
                },
                amount: props.totalPrice * 100,
                value: props.credentials,
                cart: props.cart,
              },
              {}
            );
            props.emptyCart();
            // setProcessing(false);
            // setSuccess("Pay");
            navigate("/thanks");
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    }
    getPaypal();
  }, []);
  return <div ref={paypal}></div>;
};

export default Paypal;
