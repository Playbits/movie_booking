import React from "react";
import logo_img from "../../../storage/images/logo.png"

const Header = (props) => {
    const menu = props.menu;
    return [
        <Logo key='0' />,
        <Menu key='1' menu={menu} />
    ];
};

const Menu = (props) => {
    const menuData = props.menu.map((value, i) => {
        return <li key={i}> {value} </li>;
    })
    return <ul className="menu col-lg-10"> {menuData} </ul>
};

const Logo = () => {
    const logo_container = (
        <div className="logo-container col-lg-2">
            <img src={logo_img}  alt="Movie_booking_logo" />
        </div>
    );
    return logo_container;
}
export default Header;