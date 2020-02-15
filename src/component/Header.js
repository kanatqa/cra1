import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {

    return (
        <header>
            <div className="container">

                <Logo/>
                <Menu items={props.menuItems}/>

            </div>
        </header>

    );
}

export default Header;
