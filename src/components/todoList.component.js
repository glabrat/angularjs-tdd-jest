import template from "./todoList.component.html"

export class TodoListController {
    constructor() {
        this.todosList = [];
    }
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
    template,
    controller: TodoListController,
    bindings: {
        todosList: "<"
    }
}
