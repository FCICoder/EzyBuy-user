import React, { useContext, useEffect, useState } from "react";
import CircleCat from "../Components/Reusable/CircleCat/CircleCat";
import { useDispatch, useSelector } from "react-redux";
import { categoriesAction } from "../store/slices/categoriesSlice";
import { LangContext } from "../context/LangContext";
import DropDownCat from "../Components/Reusable/DropDownCat/DropDownCat";
import { productsAction } from "../store/slices/productsSlice";
import CarouselElem from "../Components/Reusable/CarouselElem/CarouselElem";
import { ColorRing } from "react-loader-spinner";

const ElectronicsPage = () => {
  const [electronics, setElectronics] = useState({});
  const data = useSelector((data) => data.category.category);
  const isLoading = useSelector((state) => state.products.isLoading);
  const [filter, setFilter] = useState("");
  let prds = useSelector((data) =>
    filter
      ? data.products.products.filter((product) =>
          product.sub_category?.includes(filter)
        )
      : data.products.products
  );
  const { lang, dir } = useContext(LangContext);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoriesAction("electronics"));
    setElectronics(data);
  }, [data]);
  useEffect(() => {
    dispatch(productsAction("electronics"));
  }, []);
  function filterHandler(t) {
    setFilter(t);
  }
  return (
    <div className="container-fluid p-1 p-md-4" dir={dir}>
      <div className="row">
        <h3 onClick={() => setFilter("")} style={{ cursor: "pointer" }}>
          {lang === "en"
            ? electronics?.cat_title?.toUpperCase()
            : electronics?.ar_title}
        </h3>
        <div className="row d-flex">
          <div
            style={
              dir == "rtl"
                ? { borderLeft: "1px solid gray" }
                : { borderRight: "1px solid gray" }
            }
            className={`col-12 col-md-3 mb-5 mt-4  border-${
              dir == "rtl" ? "left" : "right"
            }`}
          >
            {electronics?.sub_categories?.map((category) => (
              <DropDownCat
                filter={filterHandler}
                sections={category.sections}
                image={category.icon}
                name={lang === "en" ? category.title : category.ar_title}
              />
            ))}
          </div>

          {isLoading ? (
            <div className=" col-9 d-flex flex-wrap gap-3 justify-content-center">
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
            <div className="col-12 col-md-9 d-flex flex-wrap gap-3 justify-content-center">
              {prds.length > 0 ? (
                prds.map((product) => (
                  <CarouselElem
                    src={product.images[0]}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    arTitle={product.ar_title}
                    id={product._id}
                    retailer_id={product.retailer_id}
                    status="pending"
                  />
                ))
              ) : (
                <h3>
                  {lang === "en"
                    ? "There's no Products Here"
                    : "لا يوجد منتجات في هذا القسم"}
                </h3>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsPage;
