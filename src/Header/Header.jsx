import React from "react";
import logo from '../assets/images/logo.png';
import '../css/Header.css';

const Header = (props) => {
    return (
        <header className={'header'}>
            <div className="header__wrapper">
                <div className="logo__block">
                    <img src={logo} className="logo__img"/>
                    <span className="logo__name">
                        SocialV
                    </span>
                    <div className="burger__btn">

                    </div>
                </div>
                <div className="search__block">

                </div>
                <div className="user__block">

                </div>
            </div>
        </header>
    )
}

export default Header;