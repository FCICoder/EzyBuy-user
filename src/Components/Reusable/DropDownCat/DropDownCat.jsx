// import style from './DropDownCat.module.css'
import React ,  {useContext, useState} from 'react'
import classes from './DropDownCat.module.css'
import { LangContext } from '../../../context/LangContext';

export default function DropDownCat(props) {
const [isDropdownOpen , setisDropdownOpen]=useState('none');

const [changeIcon , setChangeIcon] = useState('down')

const {lang,dir} = useContext(LangContext)
  const toggleDropdown =()=>{
    setisDropdownOpen(isDropdownOpen==='none'?'inline':'none');
    setChangeIcon(changeIcon==='down'?'up':'down');
  }
  
  return (
    <>
    <div>
      <div>
        <button
          className=" btn w-100"
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
        >
          <div className='d-flex justify-content-between gap-1 align-items-center'>
            <img
              src={props && props.image?props.image:"https://i5.walmartimages.com/dfw/4ff9c6c9-877b/k2-_17060cce-fa02-455e-a0be-eda182b82de2.v1.jpg"}
              className={`rounded-circle ${classes.widhtimageCat}`}
            />
            <span className=''>{props&&props.name?props.name:"popular product"}</span>
            <i className={`fa-solid fa-chevron-${changeIcon}`}></i>
          </div>
        </button>
        <ul className={` ${classes.c} border border-white`} style={{display:`${isDropdownOpen}`}}>
          {props.sections?.map(section =><li style={dir=='ltr'?{paddingLeft:'1rem'}:{paddingRight:'1rem'}}>
            <a className="dropdown-item " href="#" onClick={()=>props.filter(section.title)}>
              {lang ==='en'? (section.title): section.ar_title}
            </a>
          </li>)}
          
        </ul>
      </div>
      </div>
    </>
  );
}
