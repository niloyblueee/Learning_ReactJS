import { element } from "prop-types";
import React, {useState} from "react";
//updating the state of arrays in react
function JunkFoods() {

    const [Foods, setFoods] = useState(["Burger","Pizza","Subway"])

    function handleFoods(){
        //getting the value from input field
        //and then clearing the input field

        const newFood = document.getElementById("FoodInput").value;
        document.getElementById("FoodInput").value = '';

        setFoods(F => [...Foods,newFood])
    }

    //using filter method to filter element by index
    function removeFoods(index){
        setFoods(Foods.filter(( _, idx) => idx !== index ))

    }

    return(
        <div>
            <h2>Some Junk Foods for react.js</h2>
             <ul>
                {/*using map method to iterate through the Foods array*/}
                {/*and then using onClick event to remove the food item*/}

                {Foods.map((food, index) => <li key={index} onClick = { () => removeFoods(index) } >
                                                {food}</li> )}
             </ul>
            <input type="text" id="FoodInput" placeholder="Add Food"/>
            <button onClick={handleFoods}>Add Food</button>

        </div>


    )



}

export default JunkFoods;