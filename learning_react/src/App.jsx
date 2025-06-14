{/*import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx'; 
*/}
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';

import UserGreeting from './UserGreeting.jsx';

import List from './List.jsx';

import Button2 from './Button/Button2.jsx';

import Counter from './Counter.jsx';

import OnChange from './OnChange.jsx';

import CounterUp from './CounterUpdaterFunc.jsx';

import DynamicCar from './DynamicCar.jsx';
import JunkFoods from './JunkFoods.jsx';
function App() {
    return (
        <>
       {/*<Header />
          <Food />
          <Footer /> */}
        <Card/>
        <Button />

        {/*LEARNING WHAT props ARE*/}
        <Student name="Niloy Blueee" age = {23} cgpa = {3.71} tarc = {true}/> 
        <Student name="Anika Lisa" age = {25} cgpa = {3.5} tarc = {false}/>

        {/*/Learning Conditional Rendering*/}
        <UserGreeting isLoggedIn={true} username="Blueee"/>
        <UserGreeting isLoggedIn={false} username="Shoshi"/>
        
        {/*Learning Rendering List*/}
        <List/>

        {/*Click events*/}

        <Button2 Classname="button-class2" />

        {/*lEARNING USE STATE*/}
        <Counter />

        {/*Learning Onchange*/}

        <OnChange />

        {/*lEARNING updater function*/}
        
        <CounterUp/>

        {/*Learning  updating objects in state*/}

        <DynamicCar />
        
        {/*Learning to update arrays in state */}

        <JunkFoods/>




        </>

    );
}

export default App;
