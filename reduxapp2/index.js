const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// state

const initialCounterState = {
    count: 0,
};

//action is an Object it has type and payload
//INCREMENT count

const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

const resetCounter = () => {
    return {
        type: RESET,
    };
};

// reducer for counter
//action:- (type and payload)

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
};

// 1. state
// 2. dispatch action
// 3. reducer
// 4. store  ---getState(), dispatch(), subscribe()...

//create store

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

//dispatch action

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
