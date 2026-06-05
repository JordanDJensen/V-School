import { useState } from "react"

export default function Counter(){

    let [count, setCount] = useState(0);

    function increaseCount(){

        setCount((currentCount) => currentCount + 1)
    }

    function decreaseCount(){

        setCount((currentCount) => currentCount -1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )
}