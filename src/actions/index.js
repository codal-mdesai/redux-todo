export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload:{
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteTodo = (data) => {
    return {
        type: 'DELETE_TODO',
        payload: {
            data: data
        }
    } 
}
export const removeTodo = () => { return {type: 'REMOVE_TODO'} }
