const { createStore } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// state

const initialProductState = {
    numberOfProducts: 1,
    products: ["Asus"],
};

//action is an Object it has type and payload
//INCREMENT count

const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    };
};

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
};

// reducer for counter(state, action)
//action:- (type and payload)

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            };
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
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

const store = createStore(productReducer);

store.subscribe(() => {
    console.log(store.getState());
});

//dispatch action

store.dispatch(addProduct("MAC BOOK"));
store.dispatch(addProduct("RESBERRY-PI"));
store.dispatch(getProducts());
