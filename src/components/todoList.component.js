import {
    createAddTodoAction,
    createToggleSelectedAction,
    createDeleteTodoAction
} from "./actions"

class TodoListController {
    constructor($ngRedux){
        this.unsubscribe = $ngRedux.connect(this.mapStateToController, this.mapDispatchersToController)(this)
    }
    $onDestroy() {
        this.unsubscribe()
    }
    mapStateToController({ todos }) {
        return {
            todosList: todos
        }
    }
    mapDispatchersToController(dispatch) {
        return {
            addTodo: (todo) => {
                dispatch(createAddTodoAction(todo))
            },
            toggleSelected: (index) => {
                dispatch(createToggleSelectedAction(index))
            },
            deleteTodo: (index) => {
                dispatch(createDeleteTodoAction(index))
            }
        }
    }
}

export const TodoListComponent = {
    name: 'todoList',
    templateUrl: '/components/todoList.component.html',
    controller: TodoListController
}
