import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import State from "./State";
import Logo from "./Logo";


function App(props) {
    function buttonClicked(name){
        console.log("Clicked" + name)
    }
    const items = [
        {
            text: 'Home',
            link: 'home-link'
        },
        {
            text: 'Products',
            link: 'prod-link'
        },

        {
            text: 'Contacts',
            link: 'contact-link'
        },
        {
            text: 'About',
            link: 'about-link'
        }
    ]


    const itemsSecond = [
        {
            text: 'About',
            link: 'about-link'
        },
        {
            text: 'Address',
            link: 'address-link'
        },

        {
            text: 'News',
            link: 'news-link'
        },
        {
            text: 'Jobs',
            link: 'jobs-link'
        }
    ]
    const item3 = "FooterMenu";
    console.log(item3)
    return (
        <div className="App">
            <Header menuItems={items} />
            <Content bc={buttonClicked}/>
            <hr/>
            <State />
            <Footer menuItems={items} menuItemsTwo={itemsSecond} text={item3}/>
        </div>
    );
}

export default App;

