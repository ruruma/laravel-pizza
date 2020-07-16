import React from "react";
import SigninButton from "./SigninButton";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img
                            width="38"
                            src="/storage/assets/pizza-logo.svg"
                            alt="Pizza logo"
                        />
                        <div>
                            <h1>Laravel-React Pizza</h1>
                            <p>Best pizza</p>
                        </div>
                    </div>
                </Link>

                <div className="header__cart">
                    <Link to="/cart">
                        <SigninButton />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
