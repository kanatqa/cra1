import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Counter from "./Counter";
import Logo from "./Logo";



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


function App() {
    const c1=2, c2=5;
    const tc = c1 + c2;
    const [totalCount, setTotalCount] = useState(tc);
    function countChanges(value){
        console.log("Clicked" + value)
        setTotalCount(value + tc);
    }

    return (
        <div className="App">
            <Header menuItems={items} />
            <Content bc={countChanges}/>
            TOTAL: {totalCount}
            <hr/>
            <Counter startCount={c1} countChanges={countChanges}/>
            <hr/>
            <Counter startCount={c2} countChanges={countChanges}/>
            <Footer menuItems={items} menuItemsTwo={itemsSecond} text={item3}/>
        </div>
    );
}

export default App;

