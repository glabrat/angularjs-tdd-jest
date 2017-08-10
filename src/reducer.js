const initialState = {
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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [ ...state.todos, action.todo]
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.index )
      }
    default:
      return state
  }
}
