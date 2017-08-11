export function createAddTodoAction({ name }) {
    return {
        type: "ADD_TODO",
        todo: {
            name,
            completed: false
        }
    }
}
export function createToggleSelectedAction(index) {
    return {
        type: "TOGGLE_SELECTED",
        index
    }
}

export function createDeleteTodoAction(index) {
    return {
        type: "DELETE_TODO",
        index
    }
}
