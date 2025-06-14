import styles from './Button/Button.module.css';
import React, {useState} from "react";

function CounterUp(){
    const count = useState(0); // Using useState to create a state variable
    // 'count' is an array where the first element is the current state value
    const [countValue, setCountValue] = count; 
    // Using useState to create a state variable 'countValue' initialized to 0
    // 'setCountValue' is the function to update 'countValue'

    function increment() {
        setCountValue(c => c + 1); // Using updater function to increment the count
    }
    function decrement() { // using updater function to decrement the count
        setCountValue(c => c - 1);
    }          
    function reset (){ // using updater function to reset the count
        setCountValue(c => 0); 
    }
    //react puts the updater function into a queue and executes it later
    // This is useful when you want to ensure that the state updates are based on the previous state value
    return(
        <div className = "ShowCount" >
            <h1 >{countValue} UpdatedVersion</h1>
            <button className={styles.ButtonCssBroCode} onClick={decrement}>Decrement</button>
            <button className={styles.ButtonCssBroCode} onClick={reset}>Reset</button>
            <button className={styles.ButtonCssBroCode} onClick={increment}>Increment</button>
        </div>


    )

}
export default CounterUp;