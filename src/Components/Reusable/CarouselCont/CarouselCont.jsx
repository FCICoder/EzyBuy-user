// import style from './CarouselCont.module.css'
import { Carousel } from "primereact/carousel";
import CarouselElem from "../CarouselElem/CarouselElem";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LangContext } from "../../../context/LangContext";
import { useContext } from "react";
export default function CarouselCont(props) {
  const {dir, lang} = useContext(LangContext)

  const productTemplate = (product) => {
    return (
      <CarouselElem
        src={product.images[0]}
        title={product.title}
        arTitle={product.ar_title}
        price={product.price}
        rating={
          product.ratingQuantity > 1 ? product.ratingQuantity : product.rating
        }
        id={product._id}
        retailer_id={product.retailer_id}
        status="pending"
      />
    );
  };
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: props.lgCount,
      numScroll: 2,
    },
    {
      breakpoint: "991px",
      numVisible: props.mdCount,
      numScroll: 2,
    },
    {
      breakpoint: "767px",
      numVisible: props.smCount,
      numScroll: 2,
    },
  ];
  return (
    <>
      <ToastContainer theme="colored" autoClose={3000} />
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h5>{props.headline}</h5>
        </div>
        <p className="col-12" style={{ color: "gray", fontSize: ".7rem", paddingBottom: "1rem" }}>
          {props.desc}
        </p>

        {/* <Carousel
          value={props.products}
          numVisible={props.count}
          numScroll={props.slideCount}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        /> */}
        <div className="col-12" style={{maxWidth:'100vw'}}>
        <Swiper 
          modules={[ Navigation, Autoplay, A11y]}
          navigation
          spaceBetween={10}
          initialSlide={1}
          breakpoints= {props.breakpoints}
          
        >
          {props.products?.map((product) => (
            <SwiperSlide>
              {productTemplate(product)}
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

      </div>
    </>
  );
}
