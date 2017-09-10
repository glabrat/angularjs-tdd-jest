import TodoListTemplate from "./todoList.component.html"

export class TodoListController {
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
    template: TodoListTemplate,
    controller: TodoListController,
    bindings: {
        todosList: "<"
    }
}
