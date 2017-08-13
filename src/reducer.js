const INITIAL_STATE = {
  todos: [
      {
          name: "Learn Programming using component based approach",
          completed: true
      },
      {
          name: "Learn Machine Learning",
          completed: false
      },
      {
          name: "Get experience using immutable Programming approach",
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
}

const toggleSelectedTodo = (todos, selectedIndex) => {
    return todos.map((todo, index) => (
        index === selectedIndex ? { ...todo, completed: !todo.completed } : todo
    ))
}
const deleteTodo = (todos, selectedIndex) => {
    return todos.filter((todo, index) => index !== selectedIndex )
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [ ...state.todos, action.todo]
            }
        case "TOGGLE_SELECTED":
            return {
                ...state,
                todos: toggleSelectedTodo(state.todos, action.index)
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: deleteTodo(state.todos, action.index)
            }
        default:
              return state
    }
}
