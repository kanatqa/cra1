import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Footer(props) {
    console.log(props.text);
    return (
        <footer>
            <div className="container">
                <Logo/>
                <Menu items={props.menuItems} />
                <Menu items={props.menuItemsTwo} />
                {props.text}
            </div>
        </footer>
    );
}

export default Footer;
