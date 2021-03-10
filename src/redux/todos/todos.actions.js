import {TodosActionsTypes} from './todos.types';

export const setCompleted = todoId => ({
    type:TodosActionsTypes.SET_COMPLETED,
    payload: todoId
}); 

export const addTodo = todo => ({
    type: TodosActionsTypes.ADD_TODO,
    payload:todo
})

export const deleteTodo = todo => ({
    type: TodosActionsTypes.DELETE_TODO,
    payload: todo,
})
