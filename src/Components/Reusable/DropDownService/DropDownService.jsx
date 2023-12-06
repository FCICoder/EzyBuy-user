import React ,{useState} from 'react';
import classes from '../DropDownCat/DropDownCat.module.css'
import { FaPrescriptionBottleMedical } from 'react-icons/fa6';
// import { BsEye } from 'react-bootstrap-icons';

const iconComponents = {
  FaPrescriptionBottleMedical: FaPrescriptionBottleMedical,
  // BsEye:BsEye,
};
const DropDownService = (props) => {
const [isDropdownOpen , setisDropdownOpen]=useState('none');
const [changeIcon , setChangeIcon] = useState('down')

  const toggleDropdown =()=>{
    setisDropdownOpen(isDropdownOpen==='none'?'inline':'none');
    setChangeIcon(changeIcon==='down'?'up':'down');
  }
  const IconComponent = iconComponents[props.icon];
  // console.log("props.icon:", props.icon);
  // console.log("IconComponent:", IconComponent);

  return (
    <>
     <div>
      <div>
        <button
          className=" btn border border-white w-100"
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
        >
          <div className='d-flex justify-content-between'>
              {IconComponent && <IconComponent className=" mt-2 text-primary rounded fs-3"/>}
            <span className='mt-3'>{props.name}</span>
            <i className={`fa-solid fa-chevron-${changeIcon} mt-3`}></i>
          </div>
        </button>
        <ul className={`${classes.c} border border-white`} style={{display:`${isDropdownOpen}`}}>
          <li>
            <a className="dropdown-item " href="#">
              Home
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Fresh Produce
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Meat & Seafood
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Deil
            </a>
            
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Dairy & Eggs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Bakery & Bread
            </a>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default DropDownService;
