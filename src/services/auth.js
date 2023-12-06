import instance from "../axiosConfig/instance"
import {  } from "react-icons/fa";

export const register = ( data )=>{
   return instance.post('/customer/signup',data)
}

export const check = (data)=>{
    return instance.post('/customer/check',data)
}

export const login = (data)=>{
    return instance.post('/customer/login',data)
}