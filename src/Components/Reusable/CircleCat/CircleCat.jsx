import classes from "./CircleCat.module.css";
import { useNavigate } from 'react-router-dom';

export default function CircleCat(props) {
  let navigate = useNavigate();

  return (
    <>
      <div 
        className="col-lg-2 col-md-4 col-sm-4 col-xs-4 col mb-3" 
        style={{textAlign: "center"}}
      >
        <a className={classes.noDe} onClick={() => navigate(`/product/${props.id}`)}>
          <img
            src={props&&props.image?props.image:"https://i5.walmartimages.com/dfw/4ff9c6c9-6a9c/k2-_752a86d4-3dad-4536-a126-575ff0fdc50b.v1.jpg"}
            className={`rounded-circle  ${classes.widthImg}`}  
          />
        </a>
        <span >{props&&props.name}</span>
      </div>
    </>
  );
}
