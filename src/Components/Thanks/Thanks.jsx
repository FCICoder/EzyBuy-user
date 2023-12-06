import React from 'react'
import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='container-fluid gap-4 p-5 d-flex flex-column align-items-center justify-content-center'>
      <h3>Thanks for you purchase.</h3>
      <i class={`fa-solid fa-check `}></i>
      <p>your order will be shipped to you soon</p>
      <Link to="/myitems">
      <button className='btn btn-dark rounded-5 '>Track your orders</button>
      </Link>
    </div>
  )
}

export default Thanks