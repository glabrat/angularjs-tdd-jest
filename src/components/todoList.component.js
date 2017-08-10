class TodoListController {
    todosList = []

    constructor($ngRedux){
       this.unsubscribe = $ngRedux.connect(this.mapStateToInstance, this.mapDispatchToInstance)(this)
    }
    $onDestroy() {
      this.unsubscribe()
    }
    mapStateToInstance(state) {
      return {
        todosList: state.todos
      }
    }
    mapDispatchToInstance(dispatch) {
      const dispatchers = {
        addTodo: ({ name }) => {
          dispatch({
            type: "ADD_TODO",
            todo: {
              name,
              completed: false
            }
          })
        },
        deleteTodo: (index) => {
          dispatch({
            type: "DELETE_TODO",
            index: index
          })
        }
      }
      return dispatchers;
    }
}

export const TodoListComponent = {
    templateUrl: '/components/todoList.component.html',
    controller: TodoListController
}
