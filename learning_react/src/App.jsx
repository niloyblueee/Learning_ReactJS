{/*import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx'; 
*/}
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';
function App() {
    return (
        <>
       {/*<Header />
          <Food />
          <Footer /> */}
        <Card/>
        <Button />
        <Student name="Niloy Blueee" age = {23} cgpa = {3.71} tarc = {true}/> {/*props*/}
        <Student name="Anika Lisa" age = {25} cgpa = {3.5} tarc = {false}/>
        

        </>
    );
}

export default App;
