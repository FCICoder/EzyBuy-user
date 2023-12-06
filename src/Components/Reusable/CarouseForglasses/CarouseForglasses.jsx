import React from "react";
import { Carousel } from "primereact/carousel";
import CarouselElem from "../CarouselElem/CarouselElem";
const CarouseForglasses = (props) => {
  const products = props.products;
const productTemplate = (product) => {
    return (
      <>
        <CarouselElem
          src={product.src}
          title={product.title}
          price={product.price}
        />
      </>
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
  return <>
  <Carousel 
  value={products}
  numVisible={props.count}
  numScroll={props.slideCount}
  responsiveOptions={responsiveOptions}
  itemTemplate={productTemplate}
  />
  </>;
};

export default CarouseForglasses;
