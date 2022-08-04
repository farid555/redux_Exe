const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

const GET_TODOS_REQUEST = "GET_TODO_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODO_REQUEST";
const GET_TODOS_ERROR = "GET_TODOS_ERROR";
const API_URL = "https://jsonplaceholder.typicode.com/todo";

//state
const initialTodoState = {
    todos: [],
    isLoading: false,
    error: null,
};

//Action

const getTodoRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    };
};
const getTodoSuccess = (todoData) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todoData,
    };
};
const getTodoError = (error) => {
    return {
        type: GET_TODOS_ERROR,
        payload: error,
    };
};

//Reducer
const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            };
        case GET_TODOS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

//async action creator

const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodoRequest());
        axios
            .get(API_URL)
            .then((res) => {
                const todos = res.data;
                const titles = todos.map((todo) => todo.title);
                dispatch(getTodoSuccess(titles));
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(getTodoError(errorMessage));
            });
    };
};

//store

const store = createStore(todoReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchData());
