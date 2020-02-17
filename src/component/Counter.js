import React, {useState} from 'react';



function Counter(props) {

    const [count, setCount] = useState(props.startCount);

    const countChangeMinusHandler = () => {
        setCount(count - 1);
        console.log('change -')
        props.countChanges(count - 1);
    }
    const countChangePlusHandler = () => {
        setCount(count + 1);
        console.log('change +')
        props.countChanges(count + 1);
    }
    return (
     <div>
         <button onClick={countChangeMinusHandler}>-</button>
         {count}
         <button onClick={countChangePlusHandler}>+</button>

     </div>

    );
}
export default Counter;
