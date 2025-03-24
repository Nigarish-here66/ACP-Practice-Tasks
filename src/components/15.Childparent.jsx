import React, { useState } from "react";

const Child = ({msg}) =>{
    return(
        <button onClick={()=>msg("I am a child")}>Click</button>
    )
}

const Parent = () => {
    const [msg, setMsg] = useState("I am a parent");
    return (
        <div>
            <p>{msg}</p>
            <Child msg={setMsg}/>
        </div>
    )
}

export default Parent;


