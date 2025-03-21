// React useState Counter 
import { useState } from "react";
import styles from '../styles/counter.module.css';

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    return (
        <div className={styles.container}>  
         <div className={styles.content}>
            <h1>Counter</h1>
                <h1 className={styles.heading}>{count}</h1>
                <button onClick = {increment} className={styles.button}>Increment</button>
            </div>
         </div>
    )
}

export default Counter;