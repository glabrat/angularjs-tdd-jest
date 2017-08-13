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
    //Method that re-render the component when the state it's reloaded
    //Returns the newer state of the variables availables in the component HTML
    mapStateToController({ todos }) {
        return {
            todosList: todos
        }
    }
    //Method that define the methods availables in the component HTML
    //and provide the dispatch instance for deal with the redux store
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
