import { Navigate, useNavigate } from "react-router-dom";

// import style from './ProtectedRoute.module.css'
export default function ProtectedRoute({children}) {
 
if(localStorage.getItem('customerToken')!== null){
  return children
}else{
 return <Navigate to='/login'/>  
}
}
