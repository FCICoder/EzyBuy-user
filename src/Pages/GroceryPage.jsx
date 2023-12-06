import React, { useContext, useEffect, useState } from "react";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import CardCont from "../Components/Reusable/CardCont/CardCont";
import instance from "../axiosConfig/instance";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/slices/productsSlice";
import { ColorRing } from "react-loader-spinner";
import CircleCat from "../Components/Reusable/CircleCat/CircleCat";
import { LangContext } from "../context/LangContext";
import DropDownCat from "../Components/Reusable/DropDownCat/DropDownCat";
const GroceryPage = () => {
  const allProducts = useSelector((data) => data.products.products);
  const [products, setProducts] = useState([]);
  const { dir, lang } = useContext(LangContext);
  const categories = [
    {
      title: "fresh food",
      ar_title: "طعام طازج",
      sections: [
        { title: "Dile", ar_title: "بقوليات" },
        { title: "fresh produce", ar_title: "منتج طازج" },
        { title: "meat and seafood ", ar_title: " لحوم وطعام بحري" },
      ],
      img: "https://i5.walmartimages.com/dfw/4ff9c6c9-877b/k2-_17060cce-fa02-455e-a0be-eda182b82de2.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF",
    },
    {
      title: "frozen food",
      ar_title: "طعام مجمد",
      sections: [
        { title: "frozen breakfast", ar_title: "فطار مجمد" },
        { title: "frozen lunch", ar_title: "غذاء مجمد" },
        { title: "frozen dinner", ar_title: "عشاء مجمد" },
        
      ],
      img: "https://i5.walmartimages.com/dfw/4ff9c6c9-f754/k2-_ae5145df-fcf4-4bd2-9512-3e6078153722.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF",
    },
    {
      title: "Beverages ",
      ar_title: " مشاريب",
      sections: [
        { title: "soda pop ", ar_title: " صودا" },
        { title: "water ", ar_title: " مياه" },
        { title: "juice ", ar_title: " عصائر" },
        
      ],
      img: "https://i5.walmartimages.com/dfw/4ff9c6c9-2a8e/k2-_9de384d1-e00a-45db-b90e-d420ce543078.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF",
    },
    {
      title: "Grap and go ",
      ar_title: " مأكولات سريعة",
      sections: [
        { title: "sandwiches  ", ar_title: " ساندوتشات" },
        { title: "salads ", ar_title: " سلطة" },
        { title: "Gum ", ar_title: " علكة" },
        
      ],
      img: "https://i5.walmartimages.com/dfw/4ff9c6c9-98fc/k2-_38e060ca-3233-45ff-a84d-a10538dd85cd.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF",
    },
  ];
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch();
  function getProducts() {
    dispatch(productsAction("groceries"));
    // dispatch(productsAction("fashion"));
  }
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    if (allProducts) {
      setProducts(allProducts);
      console.log(allProducts[0]?.images[0]);
    }
  }, [isLoading]);

  let b1 = {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 5,
    },

    1700: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
  };
  return (
    <>
      <div dir={dir}>
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
          <div className="row">
            <div className="col-lg-3">
              {categories.map((cat) => (
                <DropDownCat
                  sections={cat.sections}
                  image={cat.img}
                  name={lang === "en" ? cat.title : cat.ar_title}
                />
              ))}
            </div>
            <div className="col-lg-9">
              <div className="container">
                <h5 className="ms-3 mb-5">
                  {lang == "en" ? "Shop groceries" : "تسوق البقالة"}
                </h5>
                <div className="row d-flex justify-content-evenly">
                  {products && products.length > 0 ? (
                    products
                      .slice(0, 6)
                      .map((product) => (
                        <CircleCat
                          key={product._id}
                          name={product.title.slice(0, 6)}
                          image={
                            product.images && product.images.length > 1
                              ? product.images[1]
                              : ""
                          }
                          id={product._id}
                        />
                      ))
                  ) : (
                    <p>No products available</p>
                  )}
                </div>
              </div>
              <hr />
              <div className="container">
                <h5 className="ms-3 mb-5">
                  {lang == "en" ? "Shop groceries" : "تسوق البقالة"}
                </h5>
                <div className="row d-flex justify-content-evenly">
                  {products && products.length > 0 ? (
                    products
                      .slice(5, 12)
                      .map((product) => (
                        <CircleCat
                          key={product._id}
                          name={product.title.slice(0, 6)}
                          image={
                            product.images && product.images.length > 1
                              ? product.images[1]
                              : ""
                          }
                          id={product._id}
                        />
                      ))
                  ) : (
                    <p>
                      {lang == "en"
                        ? "No products available"
                        : "لا يوجد منتجات"}
                    </p>
                  )}
                </div>
              </div>
              <hr />
              <CarouselCont
                products={products}
                breakpoints={b1}
                headline={lang == "en" ? "Fresh Vegetables" : "خضروات طازجة"}
                desc={lang == "en" ? "up to 50% off" : "خصم يصل إلى 50%"}
              />
              <hr />
              <CardCont />
              <hr />
              <CarouselCont
                products={products}
                breakpoints={b1}
                headline={lang == "en" ? "Beans" : "بقوليات"}
                desc={lang == "en" ? "up to 50% off" : "خصم يصل إلى 50%"}
              />
              <hr />
              <CarouselCont
                products={products}
                breakpoints={b1}
                headline={lang == "en" ? " Cheese" : "جبن"}
                desc={lang == "en" ? "up to 50% off" : "خصم يصل إلى 50%"}
              />
              <hr />
              <CardCont />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GroceryPage;
