
function Food(){

    const food1 = "Orange";
    const food2 = "Apple";
    const food3 = "Banana";
    const food4 = "Grapes";

    return (
        <ul>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3.toUpperCase()}</li>
            <li>{food4}</li>
            <li>Watermelon</li>
            <li>Strawberry</li>
        </ul> 
   );
}
export default Food;