import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";


interface GuestRouteProps extends RouteProps {}


export const GuestRoute = (props : GuestRouteProps) => {

    const token = localStorage.getItem("tkn");
    
    if(token){
        return <Redirect to={{pathname: "/"}} />
    }

    return <Route {...props} />


}