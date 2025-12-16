import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const RightBranchA = () => {

    const {counterValue, increment} = useContext(MyContext);

    return (
        <div>
            right branch A
            <button onClick={() => {
                increment(counterValue);
            }}>click me to increment in LBA</button>
        </div>
    );
};