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
//defaultProps is used to set default values for the props
Student.defaultProps = {
    name: "Student Name",
    age: 0,
    cgpa: 4.00,
    tarc: false,
}

export default Student;