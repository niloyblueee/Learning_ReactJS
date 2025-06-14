import React, {useState} from "react";
// This component demonstrates the use of the onChange event in a form input
function OnChange() {

    const [name, setName] = useState("Guest"); // State to hold the input value
    const [value, setValue] = useState(0); // State to hold the value of a number input
    const [comment, setComment] = useState(""); // State to hold the comment input value
    const [payment, setPayment] = useState("Visa"); // State to hold the payment input value
    const [shipping, setShipping] = useState(""); // State to hold the shipping input value 

    // Function to handle changes in the input field
    function handleChange(event) {
        setName(event.target.value); // Update the name state with the input value
    }
    // Function to handle changes in the number input field
    function handleValueChange(event) {
        setValue(event.target.value); // Update the value state with the input value
    }
    // Function to handle changes in the comment textarea
    function handleComment(event){
        setComment(event.target.value); // Update the comment state with the input value
    }
    // Function to handle changes in the payment input field
    function handlePayment(event){
        setPayment(event.target.value); // Update the payment state with the input value
    }
    // Function to handle changes in the shipping input field
    function handleShipping(event){
        setShipping(event.target.value); // Update the shipping state with the input value
    }



    return (
            <div>

                <input type="text" value={name} onChange={handleChange} />
                <p>Your name is: {name}</p>
                
                <input type="number" value={value} onChange={handleValueChange} />
                <p>Your age is: {value}</p>
                
                <textarea value={comment} onChange={handleComment} placeholder="Type Comment here"/>
                <p>Your comment is: {comment}</p>

                <select value={payment} onChange={handlePayment}>
                    <option value="">Select Payment Method</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank">Bank Transfer</option>
                </select>
                <p>Your payment method is: {payment}</p>
                <br />
                <label >
                    <input type="radio" value="Pick up" 
                    checked={shipping === "Pick up"} onChange={handleShipping}/>    PickUp
                </label>
                
                <label>
                    <input type="radio" name="shipping" value="Delivery" 
                    checked={shipping === "Delivery"} onChange={handleShipping}/>
                    Delivery
                </label>
                <p>Your shipping method is: {shipping}</p>
            </div>
    );
}

export default OnChange;