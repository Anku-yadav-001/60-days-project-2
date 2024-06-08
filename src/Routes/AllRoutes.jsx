import { Route, Routes } from "react-router-dom";
import { Signin } from "../Components/Signin";
import { UserInfo } from "../Components/UserInfo";
import Home from "../Components/Home"

export function AllRoutes(){

    return <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/sign-in-user" element={<UserInfo/>}/>
     </Routes>
    </>
}