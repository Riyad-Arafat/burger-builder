import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";


interface PrivetRoutesProps extends RouteProps {}


export const PrivetRoutes = (props : PrivetRoutesProps) => {

    const token = localStorage.getItem("tkn");
    
    if(!token){
        return <Redirect to={{pathname: "/login"}} />
    }

    return <Route {...props} />


}