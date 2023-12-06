import React from 'react'
import style from './myitems.module.css'
const Registers = () => {
  return (
    <div className='d-flex w-100 align-items-center flex-column gap-4'>
      <img style={{width:'300px'}} src='https://i5.walmartimages.com/dfw/4ff9c6c9-4047/k2-_20ee2089-a6f8-4200-8ec4-a8ad44742e4b.v1.svg' />
      <p>Make it easy for everyone to find the perfect gift</p>
      <div className={style.btns}>
        <button>Find a Registry</button>
        <button>Create a Registry</button>
      </div>
      <a style={{textDecoration:'underline'}} href='#'>learn more about registries</a>
    </div>
  )
}

export default Registers