import React from 'react';
import './App.css';

function Content(props) {
    let name = 'Initianl';
    function clickButtonHandler(value) {
        props.bc(name + value);

        console.log("Clicked " + value)

    }
    const inputHandler = (e) => {
        console.log(e.target.value)
    }
    return (
        <main>
            <div className="container">
                <input type="text" onChange={inputHandler}/>
                <button onClick={() => clickButtonHandler(1)}>Add one</button>
                <button onClick={() => clickButtonHandler(2)}>Add two</button>
                <h3> What is Lorem Ipsum?</h3>
                <p>

                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                    </p>

            </div>
        </main>

    );
}
export default Content;
