import './App.css'
import {useState} from "react";

const App = () => {
    // eslint-disable-next-line prefer-const
    let [counter, setCounter] = useState<number>(0);

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={() => {
                setCounter(++counter);
            }}>increment
            </button>
            <button onClick={() => {
                setCounter(--counter);
            }}>decrement
            </button>
        </>
    )
}

export default App