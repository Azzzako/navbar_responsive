import React from "react";
import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi"
import { DiRuby } from "react-icons/di"
import { IconContext } from "react-icons/lib";
import "./Navbar.css"

export const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    const carrito = ["1", "2", "3"]
    const carritoLength = carrito.length

    return (
        <nav className="container">
            <div className="wrapper">

                <IconContext.Provider value={{style: {fontSize: "2em"}}}>
                    <div className="logo_container">
                        <DiRuby />
                        <p>
                            Gaming Palace
                        </p>
                    </div>

                <div className="mobile_icon"
                onClick={() => setShowNavbar(!showNavbar)}
                >
                    <TfiAlignJustify/>
                </div>

                    <div className="menu" style={showNavbar ? {left: "0"} : {left: "-100%"}}>
                        <div className="menu_item">
                            <div className="item">Home</div>
                        </div>

                        <div className="menu_item">
                            <div className="item">My Profile</div>
                        </div>

                        <div className="menu_item">
                            <div className="item">Settings</div>
                        </div>

                        <div className="menu_item">
                            <div className="item">About Us</div>
                        </div>

                        <div className="shopping_cart">
                            <FiShoppingCart />
                        <span className="length_cart">{carritoLength}</span>
                        </div>
                    </div>

                </IconContext.Provider>
            </div>
        </nav>
    )
}
