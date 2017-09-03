import { TodoListController } from "components/todoList.component"

describe("TodoListController", () => {
    let controller

    beforeEach(() => {
        controller = new TodoListController()
    })

    it("Should have a defined controller", () => {
        expect(controller).toBeDefined()
    })

    it("Should add a todo item", () => {
        const todo = {
            name: "Learn Programming using component based approach",
            completed: false
        }
        controller.todosList = []

        controller.addTodo(todo)

        expect(controller.todosList.length).toBe(1)
        expect(controller.todosList[0]).toEqual(todo)
    })

    it("Should be mark/unmark as completed a certain todo", () => {
        const index = 1
        controller.todosList = [
            {
                name: "Learn Programming using component based approach",
                completed: false
            },
            {
                name: "Learn Machine Learning",
                completed: false
            },
            {
                name: "Finish Medium article",
                completed: false
            }
        ]

        controller.toggleCheckTodo(index)
        expect(controller.todosList[index].completed).toBe(true)

        controller.toggleCheckTodo(index)
        expect(controller.todosList[index].completed).toBe(false)
    })

    it("Should be delete a todo", () => {
        const index = 0
        controller.todosList = [
            {
                name: "Learn Programming using component based approach",
                completed: false
            },
            {
                name: "Learn Machine Learning",
                completed: false
            },
            {
                name: "Finish Medium article",
                completed: false
            }
        ]
        const todosListOriginalSize = controller.todosList.length
        const todoTargetName = controller.todosList[index].name
        const todoFinder = (todo) => todo.name === todoTargetName

        expect(controller.todosList.some(todoFinder)).toBe(true)

        controller.deleteTodo(index)

        expect(controller.todosList.length).toEqual(todosListOriginalSize - 1)
        expect(controller.todosList.some(todoFinder)).toBe(false)
    })
})
