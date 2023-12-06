import classes from "./CarouselElem.module.css";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";
export default function CarouselElem(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {lang,dir} = useContext(LangContext)
  function addToCartHandler(id) {
    dispatch(
      addToCart({
        id,
        quantity: 1,
        price: Math.round((props.price + Number.EPSILON) * 100) / 100,
        img: props.src,
        title: props.title,
        arTitle: props.arTitle,
        retailer_id: props.retailer_id,
        status: props.status
      })
    );
  }

  return (
    <>
      <div className={`${classes.item} col-6 col-md-2`}  dir={dir}>
        <img className="img-fluid" src={props.src} style={{cursor:'pointer'}} onClick={() => navigate(`/product/${props.id}`)} />
        <h6>
          ${props.price} <span>{lang==='en'?'each':'لكل قطعة'}</span>
        </h6>
        <div className="d-flex gap-1">
          <Rating
            readonly={true}
            initialRating={props.rating}
            fullSymbol={<FontAwesomeIcon icon={faStar} color="goldenRod" />}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
          />
          <p style={{ color: "gray", fontSize: ".7rem" }}>{props.rating}</p>
        </div>
        <p className={classes.title}>{lang ==='en'? props.title: props.arTitle}</p>
        <div className={classes.tags}>
          <p>{lang==='en'?'Pickup':'استلم بنفسك'}</p>
          <p>{lang==='en'?'Delivery':'متوفر الشحن'}</p>
        </div>
        <button onClick={() => addToCartHandler(props.id)}>{lang==='en'?'Add':' إضافة'} +</button>
      </div>
    </>
  );
}
