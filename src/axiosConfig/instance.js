import axios from "axios";

// ? create instance 
 let instance = axios.create({
    baseURL:`${import.meta.env.VITE_URL}`,
});

export default  instance;