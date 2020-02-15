import React, {useState} from 'react';

function State(props) {

    const [count, setCount] = useState(3)

    const countChangeMinusHandler = () => {
        setCount(count - 1);
        console.log('change -')
    }
    const countChangePlusHandler = () => {
        setCount(count + 1);
        console.log('change +')
    }
    return (
     <div>
         <button onClick={countChangeMinusHandler}>-</button>
         {count}
         <button onClick={countChangePlusHandler}>+</button>

     </div>

    );
}
export default State;
