import React from 'react';
import './App.css';

function Content(props) {
    let name = 'Initianl';
    function clickButtonHandler(value) {
        props.bc(name + value);

        console.log("Clicked " + name)

    }
    const inputHandler = (e) => {
        name = e.target.value;
        console.log(e.target.value)
    }
    return (
        <main>
            <div className="container">
                <input type="text" onChange={inputHandler}/>
                <button onClick={() => clickButtonHandler(1)}>Add one</button>
                <button onClick={() => clickButtonHandler(2)}>Add two</button>
                <h3> What is Lorem Ipsum?</h3>
            </div>
        </main>

    );
}
export default Content;
