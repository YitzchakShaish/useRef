import React, { useRef, useState } from 'react'

export default function Timer() {
    const idRef = useRef(0);
    const [seconds, setSeconds] = useState(0);

    const startTimer = (s) => {
        if (idRef.current) clearInterval(idRef.current);

        let count = Number(s);
        setSeconds(count);

        idRef.current = setInterval(() => {
            count = count - 1;
            setSeconds(count);

            if (count <= 0) {
                clearInterval(idRef.current);
                idRef.current = 0;
                console.log('timer stopped');
            }
        }, 1000);
    };

    const stopTimer = () => {
        if (idRef.current) {
            clearInterval(idRef.current);
            idRef.current = 0;
            console.log('timer stopped');
        }
    };

    return (
        <>
            <h1>Timer: {seconds}</h1>
            <input type="number"
                placeholder="how many seconds"
                defaultValue={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
            />
            <button onClick={() => startTimer(seconds)}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </>
    );
}
