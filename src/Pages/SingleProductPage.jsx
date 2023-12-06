import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactStarRating from "react-star-ratings-component";
import ProductImgs from "../Components/Reusable/ProductImgs/ProductImgs";
import ProdSpecs from "../Components/Reusable/ProdSpecs/ProdSpecs";
import CustomerReview from "../Components/Reusable/CustomerReview/CustomerReview";
import ProductDetails from "../Components/Reusable/ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";
import instance from "../axiosConfig/instance";
import { useQuery } from "react-query";
import { ColorRing } from "react-loader-spinner";
import { LangContext } from "../context/LangContext";
import { Toaster, toast } from "react-hot-toast";

const SingleProductPage = () => {
  let [rating, setRating] = useState();
  const { lang, dir } = useContext(LangContext);
  const [product, setProduct] = useState([]);

  let { id } = useParams();
  async function getProductDetails(id) {
    try {
      let { data } = await instance.get(`product/details/${id}`);
      setProduct(data?.data);

      return data;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }
  let { isLoading } = useQuery(
    "getProductDetails",
    () => getProductDetails(id),
    {
      cacheTime: 50000,
      refetchOnMount: true,
      staleTime: 30000,
      refetchInterval: 10000,
      // enabled:=true
    }
  );

  const addReview = (e) => {
    e.preventDefault();
    if (localStorage.getItem("customerToken")) {
      if (rating != undefined && rating != null) {
        instance
          .patch(
            "product/rating/user",
            { productId: product._id, newRating: rating },
            {
              headers: {
                authorization: localStorage.getItem("customerToken"),
              },
            }
          )
          .then((res) => {
            if (res.data.message === "success") {
              toast.success(res.data.message);
            } else {
              setReloadData(!reloadData);
            }
          });
      }
    }
  };
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
        <div className="row m-auto " style={{ width: "93%" }} dir={dir}>
          <div className="col-md-8 ">
            <ProductImgs img={product?.images} id={product?._id} />
          </div>
          <div className="col-md-4">
            <div>
              <ProductDetails prd={product} />
              <form className="d-flex gap-2  align-items-center mt-4">
                <p>rate this product</p>
                <ReactStarRating
                  numberOfStar={5}
                  numberOfSelectedStar={0}
                  colorFilledStar="#ff9900"
                  colorEmptyStar="#5e5c5c"
                  starSize="25px"
                  spaceBetweenStar="5px"
                  disableOnSelect={false}
                  onSelectStar={(val) => {
                    setRating(val);
                  }}
                />

                <button
                  className="btn btn-dark"
                  type="submit"
                  onClick={(e) => {
                    addReview(e);
                  }}
                >
                  submit{" "}
                </button>
              <Toaster />
              </form>
            </div>
          </div>
          <div className="col-md-8 px-2">
            <ProdSpecs
              dis={lang === "en" ? product?.description : product?.ar_description}
            />
            {/* <CustomerReview rate={product.rating} /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProductPage;
