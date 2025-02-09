import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loaders/Loader";

const PageWrapper = ({children})=>{
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect( () => {
      setIsLoading(true)
      const timeout = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timeout);
    }, [location]); 
  
    return isLoading ? <Loader /> : children;
}

export default PageWrapper;