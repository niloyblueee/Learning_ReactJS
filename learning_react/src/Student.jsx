import PropTypes from 'prop-types';
function Student(props){
    return(
        <div className="student">

        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>CGPA: {props.cgpa}</p>
        {/* <p>TARC: {props.tarc ? "Done": "Yet to be done" }</p> */}
                    {/* Ternary Operator */}
        <p>TARC: {props.tarc ? "Done": "Yet to be done" }</p>
        </div>
    )
}

// PropTypes is used to validate the props passed to the component
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    cgpa: PropTypes.number,
    tarc: PropTypes.bool,
}


export default Student;