import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { FavPrdContext } from "../context/FavPrdContext";
import { LangContext } from "../context/LangContext";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const BeautyPage = () => {
  const { lang, dir } = useContext(LangContext);

  let {
    addtoFavorite,
    getWishList1,
    getBeauty1,
    removeFromWishList1,
    favItems,
  } = useContext(FavPrdContext);
  let navigate = useNavigate();
  const AllProducts = useSelector((data) => data.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const [products, setProducts] = useState([]);
  function getBeauty() {
    getBeauty1("Beauty");
  }
  useEffect(() => {
    getBeauty();
  }, []);

  useEffect(() => {
    if (AllProducts) {
      setProducts(AllProducts);
    }
    if (isLoading == false) {
      getWishList();
    }
  }, [isLoading]);

  async function addtoFavorite1(id) {
    addtoFavorite(id);
  }

  async function getWishList() {
    getWishList1();
  }
  const dispatch = useDispatch();
  function addToCartHandler(prd) {
    dispatch(
      addToCart({
        id: prd._id,
        quantity: 1,
        price: prd.price,
        img: prd.images[0],
        title: prd.title,
        retailer_id: prd.retailer_id,
        status: "Pending",
      })
    );
  }
  let x = [];
  let y = [];
  products?.map((prods) => {
    y.push(JSON.parse(JSON.stringify(prods)));
    favItems?.map((prd) => {
      if (prd._id == prods._id) {
        x.push(JSON.parse(JSON.stringify(prods)));
        x.isFavorite = true;
      }
    });
  });

  y?.map((prod) => {
    x?.map((prd) => {
      if (prd._id == prod._id) {
        prod.isFavorite = true;
      }
    });
  });

  async function removeFromWishList(id) {
    removeFromWishList1(id);
  }

  return (
    <>
      <div className="container-fluid">
        <h5>
          Beauty & Grooming deals
          <span className="text-black-50 ">(1000+)</span>
        </h5>

        <p className="mt-3">
          Price when purchased online
          <span>
            <button className="border-0 ">
              <i class=" ms-1 fas fa-info-circle " aria-hidden="true"></i>
            </button>
          </span>
        </p>

        {isLoading ? (
          <div
            className=" w-100 py-5 fs-1 d-flex justify-content-center align-items-center"
            style={{}}
          >
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
          <div className="row g-5 mt-3">
            {y?.map((prd) => (
              <div key={prd} className="col-md-3 " dir={dir}>
                <span
                  className=" fw-bold text-primary p-1 rounded-2 bg-body-secondary"
                  style={{ fontSize: "12px" }}
                >
                  {lang=='en'?"Best seller":'الأفضل مبيعاً'}
                </span>
                <div className="text-end ">
                  {prd.isFavorite ? (
                    <i
                      key={prd._id}
                      class="fas fa-heart fs-4 text-danger"
                      aria-hidden="true"
                      onClick={() => removeFromWishList(prd._id)}
                    ></i>
                  ) : (
                    <i
                      key={prd._id}
                      class="fa-regular fa-heart fs-4  "
                      aria-hidden="true"
                      style={{cursor:'pointer'}}
                      onClick={() => addtoFavorite1(prd._id)}
                    ></i>
                  )}
                </div>
                <div>
                  <div>
                    <img
                      src={prd.images[0]}
                      style={{ cursor: "pointer", height: "300px" }}
                      onClick={() => navigate(`/product/${prd._id}`)}
                      alt="Perfume"
                      className="img-fluid "
                    />
                  </div>
                  <button
                    onClick={() => addToCartHandler(prd)}
                    className="btn btn-primary rounded-5 fw-bold mt-3"
                  >
                    {
                      lang === 'en' ? '+ Add' : 'اضف +'
                    }
                  </button>
                  <div className="mt-1">
                    <span
                      className="text-success  fs-5"
                      style={{ fontWeight: "700" }}
                    >
                      {lang=='en' ? 'Now':'الآن'}
                    </span>
                    <span
                      className="text-success fw-bold ms-1 me-1 position-relative"
                      style={{ top: "-8px" }}
                    >
                      $
                    </span>
                    <span
                      className="text-success  fs-4"
                      style={{ fontWeight: "700" }}
                    >
                      {prd.price.toString().split(".").splice(0, 1)}
                    </span>
                    <span
                      className="text-success fw-bolder position-relative"
                      style={{ top: "-8px" }}
                    >
                      {prd.price.toString().split(".").splice(1)}
                    </span>
                    <span className="ms-2 fs-5 text-body-secondary text-decoration-line-through ">
                      ${Math.round(prd.discountPercentage * prd.price)}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span
                      className="bg-body-secondary text-success me-1 p-1 rounded-3 "
                      style={{ fontWeight: "600" }}
                    >
                      {" "}
                      {lang=='en' ? 'You save':'ستوفر'}

                    </span>
                    <span
                      className="text-success"
                      style={{ fontWeight: "700" }}
                    >
                      {Math.round(prd.discountPercentage * prd.price) -
                        prd.price}
                    </span>
                    <p
                      onClick={() => navigate(`/product/${prd._id}`)}
                      className="mt-1"
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        cursor: "pointer",
                      }}
                    >
                      {lang == 'en' ? prd.title : prd.ar_title}{" "}
                    </p>
                  </div>
                  <div className="mt-2">
                    <Rating
                      readonly={true}
                      initialRating={
                        prd.ratingQuantity > 1 ? prd.ratingQuantity : prd.rating
                      }
                      fullSymbol={<FontAwesomeIcon icon={faStar} color="goldenRod" />}
                      emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    />
                    {/* <i
                      class="fa fa-star  "
                      style={{ fontSize: "11px" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-star  "
                      style={{ fontSize: "11px" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-star  "
                      style={{ fontSize: "11px" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-star  "
                      style={{ fontSize: "11px" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-star-half-alt  "
                      style={{ fontSize: "11px" }}
                      aria-hidden="true"
                    ></i> */}

                    <span
                      className="text-body-secondary"
                      style={{ fontSize: "11px" }}
                    >
                      {" "}
                      {prd.ratingQuantity > 1 ? prd.ratingQuantity : prd.rating}
                    </span>
                    <p className="mt-2" style={{ fontSize: "11px" }}>
                      {lang === 'en' ? 'Free shipping, arrives' : 'شحن مجاني خلال '}
                      <strong>
                        {lang === 'en' ? 'in +3 day' : '3 ايام'}

                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Toaster />
    </>
  );
};

export default BeautyPage;
