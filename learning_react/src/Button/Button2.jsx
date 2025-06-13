import React, { useState } from 'react';
import styles from './Button.module.css';
function Button2() {

    // The function that will be called when the button is clicked
    // This function shows an alert message
    const handleClick = () => {
        alert('Button2 clicked!');
    };

    // Using useState to manage the count state
    // useState is a React Hook that lets you add state to functional components
    // The initial value of count is set to 0
    // setCount is the function to update the count state
    // The handleClick2 function increments the count by 1 each time the button is clicked
    //Without using useState, the count would not persist between renders
    // and the button would always show 0
    const [count, setCount] = useState(0);
    const handleClick2 = () => {
        setCount(count + 1);
    };

    

    return (
        <>
        {/*onclick = {() => function(arguments)} onclick was the event handler*/}
        <button className={styles.ButtonCssBroCode} onClick={() => handleClick2()}>{count}</button>
        </>
    );
};

export default Button2;
// This is a simple button component that shows an alert when clicked.