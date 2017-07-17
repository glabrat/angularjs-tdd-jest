class TodoListController {
    todosList = [
        {
            name: "Learn Programming using component based approach",
            completed: true
        },
        {
            name: "Learn Machine Learning",
            completed: false
        },
        {
            name: "Finish Medium article",
            completed: true
        },
        {
            name: "Learn to play Jazz music",
            completed: false
        },
        {
            name: "Build a experimental app using google A.I.",
            completed: false
        }
    ]

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
    templateUrl: '/components/todoList.component.html',
    controller: TodoListController
}
