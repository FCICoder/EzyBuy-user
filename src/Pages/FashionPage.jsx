import React, { useContext, useEffect, useState } from "react";
import instance from "../axiosConfig/instance";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import ImgsTextCard from "../Components/Reusable/ImgsTextCard/ImgsTextCard";
import CardElem from "../Components/Reusable/CardElem/CardElem";
import { ColorRing } from "react-loader-spinner";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/slices/productsSlice";
import CircleCat from "../Components/Reusable/CircleCat/CircleCat";
import { LangContext } from "../context/LangContext";
import DropDownCat from "../Components/Reusable/DropDownCat/DropDownCat";
const FashionPage = () => {
  const allProducts = useSelector((data) => data.products.products);
  const [products, setProducts] = useState([]);
  const isLoading = useSelector((state) => state.products.isLoading);
  const {dir, lang} = useContext(LangContext)
  const categories = [
    {
      title: "Women",
      ar_title:"نساء",
      sections:[{title:'Activewear',ar_title:'ملابس رياضية'},{title:"Dresses",ar_title:"فساتين"},{title:"Jeans" , ar_title:"جينز"}],
      img: "https://i5.walmartimages.com/dfw/4ff9c6c9-9022/k2-_a0ae7752-69ef-4f3f-8a9a-6292478fc0ae.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF",
    },
    {
      title: "men",
      ar_title:"رجال",
      sections:[{title:'Pants',ar_title:'بنطال'},{title:"Shirts",ar_title:"قمصان"},{title:"Suits" , ar_title:"بدلة"}],
      img: "https://i5.walmartimages.com/dfw/4ff9c6c9-fd31/k2-_0ebc7d7e-949b-447b-9b60-3b80bdbff9b5.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF",
    },
    {
      title: "shoes",
      ar_title:"أحذية",
      sections:[{title:'Men',ar_title:'رجال'},{title:"Toddler",ar_title:"طفل صغير"},{title:"Girls" , ar_title:"فتيات"}],
      img: "https://i5.walmartimages.com/dfw/4ff9c6c9-b0ef/k2-_8bef63fa-afd1-4d7c-8ff0-1a8baffcb6e2.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF",
    },
    {
      title: "Bags",
      ar_title:"حقائب",
      sections:[{title:'Women',ar_title:'نساء'},{title:"Kids",ar_title:"أطفال"},{title:"Designer Handbags" , ar_title:"حقائب مصمم"}],
      img: "https://i5.walmartimages.com/dfw/4ff9c6c9-7ac9/k2-_5caeb5f6-c04e-477d-a9a8-4531dbf404aa.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF",
    },
    {
      title: "Jewelry & Watches",
      ar_title:"المجوهرات والساعات",
      sections:[{title:'Women',ar_title:'نساء'},{title:"Kids",ar_title:"أطفال"},{title:"Pre-Owned Jewelry" , ar_title:"المجوهرات المستعملة"}],
      img: "https://i5.walmartimages.com/dfw/4ff9c6c9-bc67/k2-_03b43923-4991-45fe-ab47-bc4d3caada43.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF",
    },
  ];
  const dispatch = useDispatch();
  function getProducts() {
    dispatch(productsAction("fashion"));
  }
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    if (allProducts) {
      setProducts(allProducts);
      console.log(allProducts);
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
  }
  return (
    <>
      <div>
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
          <div className="container">
            <ImgsTextCard />
            <div className="container">
              <h5 className="ms-3 mt-3">Shop</h5>
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
            </div>{" "}
            <hr className="mb-5 text-muted " />
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
                <ImgsTextCard />
                <ImgsTextCard />
                <div className="d-flex flex-column flex-md-row  justify-content-evenly">
                  <div className="col-lg-4 mt-5">
                    <CardElem
                      image="https://i5.walmartimages.com/dfw/4ff9c6c9-b4eb/k2-_15bec48b-7d03-4932-8970-b7901626b2a0.v1.jpg"
                      h="Gifts under $15"
                      p="Holiday pro tip: one for them, one for you."
                    />
                  </div>
                  <div className="col-lg-4 mt-5">
                    <CardElem
                      image="https://i5.walmartimages.com/dfw/4ff9c6c9-f786/k2-_3327339d-111f-4b98-b6cc-c16dc1f169f3.v1.jpg"
                      h="Gifts under $25"
                      p="Get what they really want, for way less."
                    />
                  </div>
                </div>
                <ImgsTextCard />
                <div className="container">
                  <h5 className="ms-3">Shop groceries</h5>
                  <div className="row d-flex justify-content-evenly">
                    {products && products.length > 0 ? (
                      products
                        .slice(9, 13)
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
                <CarouselCont
                  products={products}
                  breakpoints={b1}
                  headline="Top Deals"
                  desc="Up to 65% off"
                />{" "}
                <ImgsTextCard />
                <hr />
                <div className="container">
                  <h5 className="ms-3">Shop groceries</h5>
                  <div className="row d-flex justify-content-evenly">
                    {products && products.length > 0 ? (
                      products
                        .slice(13, 19)
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
                </div>{" "}
                <hr />
                <div className="container">
                  <h5 className="ms-3">Shop groceries</h5>
                  <div className="row d-flex justify-content-evenly">
                    {products && products.length > 0 ? (
                      products
                        .slice(19, 25)
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
                </div>{" "}
                <hr/>
                <div className="container">
                <h5 className="ms-3">Shop groceries</h5>
                <div className="row d-flex justify-content-evenly">
                  {products && products.length > 0 ? (
                    products
                      .slice(25, 31)
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
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FashionPage;