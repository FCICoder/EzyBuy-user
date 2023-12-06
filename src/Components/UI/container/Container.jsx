import React from 'react'
import classes from './container.module.css'
const Container = ({children}) => {
  return (
    <div className={`container-fluid px-1 px-md-5 ${classes.cont}`}>{children}</div>
  )
}

export default Container