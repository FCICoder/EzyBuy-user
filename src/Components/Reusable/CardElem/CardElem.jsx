import classNamees from './CardElem.module.css'
import {Link} from 'react-router-dom'
export default function CardElem(props) {
  return <>

  <div className={`card p-0 ${classNamees.cardE}`}>
  <img src={props.image} className="card-img-top img-responsive " style={{height:'220px'}} alt="..."/>
  <div className="card-body d-flex flex-column gap-1">
    <p className="card-title fs-5 ">{props.h}</p>
    <p className="card-text mb-5 text-muted">{props.p}</p>
    <Link to="/product/656b799bf1fd74b92ad5ee0b" className={classNamees.shop}>Shop now</Link>
  </div>
</div>
  </>
}
