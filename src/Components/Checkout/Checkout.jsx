import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useFormik } from "formik/dist";
import React, { useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../axiosConfig/instance";
import toast, { Toaster } from "react-hot-toast";
import { cartAction } from "../../store/slices/cartSlice";
import { LangContext } from "../../context/LangContext";
import Paypal from "./Paypal";
const Checkout = () => {
  let dispatch = useDispatch();
  const {lang,dir}= useContext(LangContext)
  let paypal = useRef()
  let navigate = useNavigate();
  const cart = useSelector((data) => data.cart.items);
  const stripe = useStripe();
  const element = useElements();
  const [paymentMethod, setPayment] = useState('on delivery');
  const [isProcessing, setProcessing] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("Pay");

  async function emptyCart() {
    try {
      await axios.delete(`${import.meta.env.VITE_URL}/customer/cart`, {
        headers: {
          authorization: localStorage.getItem("customerToken"),
        },
      });
      dispatch(cartAction());
    } catch (err) {
      toast.error(err.message);
    }
  }
  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleCardChange = (e) => {
    if (e.error) return setError(e.error.message);
    setError("");
  };

  let totalPrice = cart.reduce((accumulator, currentValue) => {
    let total = accumulator + currentValue.price * currentValue.quantity;
    return Math.round((total + Number.EPSILON) * 100) / 100;
  }, 0);

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setSuccess("Processing...");

    const cardElement = element.getElement("card");
    const { name, phone, email } = credentials;
    const billingInfo = {
      name,
      phone,
      email,
    };
    if (paymentMethod == 'card') {
    try {
      const paymentIntent = await axios.post(
        `${import.meta.env.VITE_URL}/customer/order`,
        {
          headers: {
            authorization: localStorage.getItem("customerToken"),
          },
          amount: totalPrice * 100,
          value: credentials,
          cart: cart,
        },
        {}
      );

      const paymentMethodObj = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingInfo,
      });

      if (paymentMethodObj.error) {
        setError(paymentMethodObj.error.message);
        setProcessing(false);
        setSuccess("Pay");
        return;
      }

      const confirmedPayment = await stripe.confirmCardPayment(
        paymentIntent.data,
        {
          payment_method: paymentMethodObj.paymentMethod.id,
        }
      );
      if (confirmedPayment.error) {
        setError(confirmedPayment.error.message);
        setProcessing(false);
        setSuccess("Pay");
        return;
      }

      setSuccess("Success! Payment is Complete");

      setTimeout(() => {
        setSuccess("Pay");
        setProcessing(false);
        setCredentials({
          name: "",
          email: "",
          phone: "",
          address: "",
        });
        cardElement.clear();
      }, 2000);
      emptyCart();
      navigate("/thanks");
      // location.reload()
    } catch (error) {
      setError(error.message);
      setProcessing(false);
      setSuccess("Pay");
    }
  }else if (paymentMethod == 'on delivery') {
    try{
      await axios.post(
        `${import.meta.env.VITE_URL}/customer/order`,
        {
          headers: {
            authorization: localStorage.getItem("customerToken"),
          },
          amount: totalPrice * 100,
          value: credentials,
          cart: cart,
        },
        {}
      );
      emptyCart();
      setProcessing(false);
      setSuccess("Pay");
      navigate("/thanks");
    }catch(error){
        
    }
  }
  else if(paymentMethod == 'paypal'){
    // navigate('/paypal')
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
                value: totalPrice,
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
            amount: totalPrice * 100,
            value: credentials,
            cart: cart,
          },
          {}
        );
        emptyCart();
        setProcessing(false);
        setSuccess("Pay");
        navigate("/thanks");
      },
      onError: (err) => {
        console.log(err);
      },
    })
    .render(paypal.current);
  }

  };

  return (
    <div className="container-fluid row pt-5 m-auto" dir={dir}>
      <div className="col-12 col-md-6 container-fluid py-3">
        <h3>{lang =='en' ? 'Payment':'وسائل الدفع'}</h3>
        <div className="container-fluid p-4 border ">
          <label htmlFor="delivery" className="d-flex gap-2 mb-3">
            <input
              id="delivery"
              type="radio"
              name="payment"
              
              onChange={(e) => setPayment('on delivery')}
            />
            {lang == 'en'?'Pay on Delivery':'الدفع عند الاستلام'}
          </label>
          <label htmlFor="visa" className="d-flex gap-2">
            <input
              id="visa"
              type="radio"
              name="payment"
              onChange={(e) => setPayment('card')}
            />
            {lang == 'en' ? 'Pay With your Card':'ادفع عن طريق البطاقة'}
          </label>
          <label htmlFor="paypal" className="d-flex gap-2 my-3">
            <input
              id="paypal"
              type="radio"
              name="payment"
              onChange={(e) => setPayment('paypal')}
            />
            {lang == 'en' ? 'Pay With PayPal':'ادفع عن طريق باي بال'}
          </label>
        </div>
        {paymentMethod == 'card' && (
          <div className="container">
            <form className="form border-bottom" onSubmit={handlePayment}>
              <input
                className="form-control mt-4"
                type="text"
                placeholder="Name on Card"
                name="name"
                required
                value={credentials.name}
                onChange={handleChange}
              />
              <input
                className="form-control mt-4"
                type="text"
                placeholder="Phone Number"
                name="phone"
                required
                value={credentials.phone}
                onChange={handleChange}
              />
              <input
                className="form-control my-4"
                type="email"
                placeholder="Email"
                name="email"
                required
                value={credentials.email}
                onChange={handleChange}
              />
              <p>{error}</p>
              <CardElement
                options={{
                  hidePostalCode: true,
                  style: {
                    base: {
                      fontSize: "18px",
                      color: "blue",
                    },
                    invalid: {
                      color: "red",
                    },
                  },
                }}
                onChange={handleCardChange}
              />
            </form>
          </div>
        )}
        <div  ref={paypal}></div>
        {/* <Paypal totalPrice={totalPrice} credentials={credentials} cart={cart} emptyCart={()=>emptyCart()}/>  */}
      </div>
      <div className="col-12 col-md-4 container-fluid border px-3 py-4 border-1 ">
        <h3 className="text-center ">{lang =='en' ? 'Order Details':'بيانات الطلب'}</h3>
        <hr />
        <div className="d-flex justify-content-between px-3">
          <h6>
            {lang =='en' ?'Subtotal':'الإجمالي'}
            <span className="text-body-secondary ms-1">
              (
              {cart.reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.quantity,
                0
              )}{" "}
              {lang =='en' ?'item':'منتج'})
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
        <div className="d-flex justify-content-between px-3">
          <p className="text-body-secondary" style={{ fontSize: 13 }}>
            {lang == 'en' ? 'Shipping':'مصاريف الشحن'}
          </p>
          <span className="text-success">{lang == 'en'? 'Free':'مجاني'}</span>
        </div>

        <div className="mt-2 d-flex justify-content-between  px-3">
          <h6>{lang=='en'?'Taxes':'الضرائب'}</h6>
          <p>0.00</p>
        </div>

        <hr className="text-body-secondary " />

        <div className="mt-2 d-flex justify-content-between px-3">
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
        <hr className="text-body-secondary " />
       

        <div className="text-center mt-3">
          <Link to="/checkout">
            <button
              onClick={handlePayment}
              className="btn btn-dark rounded-4   "
              style={{ width: "100%" }}
              disabled={isProcessing}
            >
              {success}
            </button>
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Checkout;
