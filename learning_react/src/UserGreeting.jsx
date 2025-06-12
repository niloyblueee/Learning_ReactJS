import PropTypes from "prop-types";
 
function UserGreeting(props) {

    if(props.isLoggedIn) {
    // If the user is logged in, display a welcome message with their username
    // props.username is used to access the username passed as a prop
        return <h1>Welcome back, {props.username}!</h1>;
    } 
    else {
        return <h1>Please sign up, {props.username}!</h1>;
    }


{/*the above part can be done like this as well
    return (
        <h1>
            {props.isLoggedIn ? `Welcome back, ${props.username}!` : 
                                `Please sign up, ${props.username}!`}
        </h1>
    );

    */}
}

// PropTypes is used to validate the props passed to the component
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired, // isLoggedIn should be a boolean and is required
    username: PropTypes.string.isRequired, // username should be a string and is required
};
export default UserGreeting;