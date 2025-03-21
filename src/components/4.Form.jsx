// Controlled Input Form 
import { useState } from "react";
import styles from "../styles/form.module.css"

function FormInput(){
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className={styles.container}>
            <input type="text" 
                    value={inputValue} 
                    onChange={handleChange} 
                    placeholder="Enter your name"
                    className={styles.input}/>
            <p className={styles.text}>Input: {inputValue}</p>
        </div>
    );
}

export default FormInput;