import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementValue, decrementValue } from "./counterSlice";

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    console.log(count);

    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(incrementValue())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrementValue())}
            >
                Decrement
            </button>
        </div>
    );
}
