import styles from './Button/Button.module.css';
import React, {useState} from "react";

function Counter(){
    const count = useState(0); // Using useState to create a state variable
    // 'count' is an array where the first element is the current state value
    const [countValue, setCountValue] = count; 
    // Using useState to create a state variable 'countValue' initialized to 0
    // 'setCountValue' is the function to update 'countValue'

    function increment() { // Increment the count value by 1
        setCountValue(countValue + 1);
    }
    function decrement() { // Decrement the count value by 1
        
        setCountValue(countValue - 1);
    }          
    function reset (){ // Reset the count value to 0
        setCountValue(0) 
    }

    return(
        <div className = "ShowCount" >
            <h1 >{countValue}</h1>
            <button className={styles.ButtonCssBroCode} onClick={decrement}>Decrement</button>
            <button className={styles.ButtonCssBroCode} onClick={reset}>Reset</button>
            <button className={styles.ButtonCssBroCode} onClick={increment}>Increment</button>
        </div>


    )

}
export default Counter;