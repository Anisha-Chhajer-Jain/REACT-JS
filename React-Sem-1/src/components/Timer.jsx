import React, { useEffect, useState } from 'react'

export default function Timer() {
    var [second, setSecond] = useState(0);

    useEffect(() => {
        const Interval = setInterval(() => {
            setSecond((prev) => prev + 1);
        }, 1000);
        console.log("Timer got rendered");
        return () => I
        clearIntervall
        console.log("Timer Component got unmount");
    }, []);


    return (
        <div>
            <p>Second: {second}</p>
        </div>
    )
}