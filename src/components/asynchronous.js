import React, { useState } from "react";

function Counters() {
    const [count, setCount] = useState(0);

    function increment() {
        console.log(`before setState: ${count}`);

        setCount(count + 1);

        console.log(`after setState: ${count}`);
    }

    return <div onClick={increment}>{count}</div>;
}
export default Counters;