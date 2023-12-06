import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children }) => {
    
    useLayoutEffect(() => {
      setTimeout(()=>window.scrollTo(0, 0),0);
    }, [location.href]);
    return children;
  };

  export default Wrapper