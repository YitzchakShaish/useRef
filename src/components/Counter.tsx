import React, { useRef, useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const refCounter = useRef(0);

    const plus_1 = () => {
        refCounter.current = counter;
        setCounter(counter + 1)
    }

    const minus_1 = () => {
        refCounter.current = counter;
        setCounter(counter - 1)
    }

    return (
        <div><h1>Counter</h1>
            <button onClick={plus_1}>+1</button>
            <br />
            <button onClick={minus_1}>-1</button>
            <br /><br />
            {counter && <p>Current: {counter} (Previous: {refCounter.current})</p>}


        </div>
    )
}
