import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound=()=>{

    const navigate=useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/");
        },1000)
    },[])
    return (
        <>
        <h1>Page not found</h1>
        </>
    )
}

export default NotFound;