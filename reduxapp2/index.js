const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

// state

const initialCounterState = {
    count: 1,
    users: ["farid"],
};

//action is an Object it has type and payload
//INCREMENT count

const addUser = (name) => {
    return {
        type: ADD_USER,
        payload: name,
    };
};

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

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    };
};

// reducer for counter(state, action)
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
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                count: state.count + 1,
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

store.dispatch(addUser("Mohammad"));
