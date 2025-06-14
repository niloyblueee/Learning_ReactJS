import React,{useState} from 'react';
import styles from './CPApp.module.css'; // Assuming you have a CSS module for styles

function ColorPicker() {
    const [color, setColor] = useState('#000000');

    function handlecolorchange(event) {
        setColor(event.target.value);
       
    }

    // Initial background color
    return (
        <div className={styles.colorPickerContainer}>
            <h1 className={styles.title}> Color Picker </h1>
            <div className={styles.colordisplay} style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>

            <label className={styles.label}> Select A Color </label>
            <input className={styles.colorInput} type='color' value={color} onChange={handlecolorchange} />
        </div>
    )
}
export default ColorPicker;