import styles from './Button.module.css'; // Importing CSS Module styles
// This import statement brings in the styles defined in Button.module.css

function Button(){
   return (
    // Using CSS Modules for styling
    // The className is dynamically assigned from the imported styles object
    // This allows for scoped CSS, preventing conflicts with other styles
    // The className is set to styles.ButtonCssBroCode, which refers to a specific style defined in Button.module.css
   <button className={styles.ButtonCssBroCode}>Click Me</button>
    );
}

export default Button;