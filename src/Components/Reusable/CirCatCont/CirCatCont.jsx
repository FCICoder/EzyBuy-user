import { all } from "axios";
import CircleCat from "../CircleCat/CircleCat";
import React, { useEffect, useState } from "react";
import { productsAction } from "/src/store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
export default function CirCatCont(props) {
  return <>
  <div className="container">
  <h5 className="ms-3">{props.name}</h5>
    <div className="row d-flex justify-content-evenly">
      {/* {products.map((product)=>(
        <CirCatCont key={product._id} image={product.image} name={product.title
          }/>
      ))} */}
      {/* <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/> */}
    </div>
  </div>
  </>
}