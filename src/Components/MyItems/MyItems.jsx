import React from 'react'
import style from './myitems.module.css'
import {NavLink, Link, Outlet } from 'react-router-dom'
const MyItems = () => {
  return (
    <div className={`container-fluid p-1 p-md-5 w-75 ${style.cont}`}>
        <h2 className='text-bold mb-3'>My Items</h2>
      
          <ul className='d-flex gap-4 list-unstyled'>
            <li><NavLink end to='' className={({isActive})=> isActive ? style.active : ''}>Reorder</NavLink></li>
            <li><NavLink to='lists' className={({isActive})=> isActive ? style.active : ''}>Lists</NavLink></li>
            {/* <li><NavLink to='registers' className={({isActive})=> isActive ? style.active : ''}>Registers</NavLink></li> */}
          </ul>
     <div>
      <Outlet />
     </div>
    </div>
  )
}

export default MyItems