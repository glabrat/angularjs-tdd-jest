class TodoListController {
    todosList = []

    addTodo(todo){
        this.todosList.push(todo)
    }
    toggleCheckTodo(index){
        this.todosList[index].completed = !this.todosList[index].completed
    }
    deleteTodo(index){
        this.todosList.splice(index, 1)
    }
}

export const TodoListComponent = {
    controller: TodoListController
}
