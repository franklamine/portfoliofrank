import React from 'react'
import Asidebar from "../components/Asidebar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

function RootLayout() {
    return (
            <div className=" md:flex md:flex-col">
                <Asidebar/>
                <Outlet/>
                <Footer/>
            </div>
        )
}

export default RootLayout
