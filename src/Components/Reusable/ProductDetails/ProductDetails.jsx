import { Link, useNavigate } from "react-router-dom";
import style from "./ProductDetails.module.css";
import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { LangContext } from "../../../context/LangContext";
export default function ProductDetails({ prd }) {
  const { lang, dir } = useContext(LangContext);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (prd?.price) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [prd]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function addToCartHandler(isBuy) {
    dispatch(
      addToCart({
        id: prd?._id,
        quantity: 1,
        price: prd?.price,
        img: prd?.images[0],
        title: prd?.title,
        retailer_id: prd?.retailer_id,
        status: "Pending",
      })
    );
    if (isBuy) {
      navigate("/cart");
    }
  }

  return (
    <>
      {isLoading ? (
        <div className=" w-100 py-5 fs-1 d-flex justify-content-center align-items-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["black", "black", "black", "black", "black"]}
          />
        </div>
      ) : (
        <div className={`border border-1 p-3 ${style.ps} `} dir={dir}>
          <Link to={"#"}>{prd?.brand}</Link>

          <h5>{lang === "en" ? prd?.title : prd?.ar_title}</h5>
          <div className="d-flex mt-3 gap-3">
            <p href="" className="ms-2">
              {prd?.rating.length || 1} {lang == "en" ? "ratings" : " التقييمات"}
            </p>
            <Rating
              readonly={true}
              initialRating={
                prd?.ratingQuantity > 1 ? prd?.ratingQuantity : prd?.rating
              }
              fullSymbol={<FontAwesomeIcon icon={faStar} color="goldenRod" />}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
            />
          </div>
          <div className="mt-3">
            <h2 className="text-success fw-bold">
              {lang == "en" ? "Now" : " الآن"}{" "}
              {Math.round(prd?.discountPercentage * prd?.price) - prd?.price} ${" "}
              <a
                className={`text-decoration-line-through h5 ms-2 text-dark-emphasis`}
              >
                {Math.round(prd?.discountPercentage * prd?.price)} $
              </a>{" "}
            </h2>
            <h5 className="text-success fw-bold">
              {lang == "en" ? "you save" : "ستوفر"} {prd?.price} $
            </h5>
          </div>

          <div className="mt-5 d-flex gap-3">
            <button
              className="btn btn-light border border-1 border-black rounded-4 me-3 "
              style={{ width: "45%" }}
              onClick={() => addToCartHandler(true)}
            >
              {lang == "en" ? "Buy Now" : " قم بشراءه الآن"}
            </button>
            <button
              className="btn btn-dark  rounded-4 "
              style={{ width: "45%" }}
              onClick={() => addToCartHandler(false)}
            >
              {lang == "en" ? "Add To Cart" : " اضف للسلة"}
            </button>
          </div>

          <div className="mt-3    ">
            <h5 className="mb-3 d-block">
              {lang == "en"
                ? "How do you want your item?"
                : " كيف تريد استلام منتجاتك؟"}
            </h5>
            <div className="row ">
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
                  <div>{lang == "en" ? "Not Available" : " غير متاح"}</div>
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
                  <div>{lang == "en" ? "Not Available" : " غير متاح"}</div>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-3">
              <div className="d-flex ">
                <img
                  src="https://i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg"
                  width="20"
                  height="20"
                  alt=""
                  className="mt-1 me-2"
                />
                <div className="return-label-container">
                  <div
                    className=""
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span className="h5">
                      {lang == "en"
                        ? "Extended holiday returns"
                        : " إعادة المنتجات المجاني"}
                    </span>
                  </div>
                  <span className="">
                    {lang == "en"
                      ? "Free Holiday returns until"
                      : " إعادة مجانية حتى"}
                    <strong>{lang == "en" ? " Jan 31" : " 31 يناير"}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
