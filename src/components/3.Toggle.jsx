// Toggle Visibility Component 
import { useState } from "react";
import styles from "../styles/toggle.module.css";

function Toggle() {
    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <div className={styles.container}> 
            <button className={styles.button} onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
            {isVisible && <p className={styles.text}>Toggle Me!</p>}
        </div>
     );
}

export default Toggle;