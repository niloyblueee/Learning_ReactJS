import React , {useState} from "react";
//This one was to show how to change the state of an object in React
//  using the updater function
function DynamicCar() {
    //this is the initial state of the car object
    //year, maker, model
    const [car, setCar] = useState({year: 2020, 
                                    maker: "Toyota",
                                     model: "Supra"});
    
    function handlecaryear(event) { //this function will handle the change of the year
        //event.target.value will give the value of the input field

        setCar(c => ({...c, year: event.target.value}));
    }

    function handlecarmaker(event) { //this function will handle the change of the maker
        //event.target.value will give the value of the input field
        setCar(c => ({...c, maker: event.target.value}));
    }

    function handlecarmodel(event) {//this function will handle the change of the model
        //event.target.value will give the value of the input field
        //we are using the updater function here to update the state of the car object
        //we are using the spread operator to copy the previous state of the car object
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <div>
            <p>Your Owned car is: {car.year} {car.maker} {car.model}</p>
        
        <input type="number" value={car.year} onChange={handlecaryear} />
        <input type="text" value={car.maker} onChange={handlecarmaker} />
        <input type="text" value={car.model} onChange={handlecarmodel} />

        </div>
    )
}

export default DynamicCar;  