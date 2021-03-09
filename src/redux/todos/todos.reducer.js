import TODOS_DATA from './todos.data';

const INITIAL_DATA = {
    todos: TODOS_DATA
}

const todosReducer = ( state = INITIAL_DATA, action ) => {
    switch (action.type) {
        default:
            return state
    }
}

export default todosReducer;