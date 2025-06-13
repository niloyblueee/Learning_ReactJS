

function List(){

    const fruits = [{name: 'Apple',calories: 52},
                 {name: 'Banana', calories: 89},
                 {name: 'Cherry', calories: 50},
                 {name: 'Date', calories: 282},
                 {name: 'Elderberry', calories: 73}];
    
    const vegetables = [{name: 'Carrot', calories: 41},
                        {name: 'Broccoli', calories: 55},
                        {name: 'Spinach', calories: 23},
                        {name: 'Potato', calories: 77},
                        {name: 'Cabbage', calories: 25}];
    const fish = [];


    fruits.sort((a, b) => a.calories - b.calories); //sort by calories in ascending order
    //fruits.reverse(); <= to sort in descending order

    fruits.sort((a,b)=> a.name.localeCompare(b.name)); //sort by name in alphabetical order
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); //sort by name in reverse alphabetical order


    // The fruits array contains objects with name and calories properties
    // Using map to create a list of items
    // Each item in the list is a <li> element with a key prop
    const ListItems = fruits.map(fruit => <li key={fruit.name}> {fruit.name} - <b>{fruit.calories}</b> calories</li>);
    const VeggiesItems = vegetables.map(veg => <li key={veg.name}> {veg.name} - <b>{veg.calories}</b> calories</li>);
    // There is another approach to create a list by passing the fruits array in to the app.jsx 
    //https://youtu.be/CgkZ7MvWUAA?si=h-YLkKtFgjxHznAs&t=4633

    

    return ( <>
            {/*using conditional rendering to render only when the list is not empty*/}
             {fruits.length > 0 ? <ol>{ListItems}</ol> : <p>No fruits available</p>}
             {/*Same thing can be written like this with &&  */} 
             {vegetables.length > 0 && <ol>{VeggiesItems}</ol> }
             {fish.length > 0 ? <ol>{FishItems}</ol> : null }

            </>
            );
}
// The List component renders a list of fruits and vegetables

export default List;