import { TodoService } from "services/todo.service"

describe("TodoService", () => {
    let TodoServiceInstance
    const responseMock = {
        status: 200,
        data: {
            todos: [
                {
                    name: "Learn Programming using component based approach",
                    completed: true
                },
                {
                    name: "Learn Machine Learning",
                    completed: false
                }
            ]
        }
    }
    beforeEach(() => {
        const $http = {
            get: jest.fn()
        }
        const BASE_URL = "http://localhost:5000/todos"
        TodoServiceInstance = new TodoService($http, BASE_URL)
    })

    it("Should have defined", () => {
        expect(TodoServiceInstance).toBeDefined()
    })

    it("Should be response a data object from response on getTodos method", async () => {
        TodoServiceInstance.http.get
            .mockImplementation(() => Promise.resolve(responseMock))

        const serviceResponse = await TodoServiceInstance.getTodos()

        expect(serviceResponse).toEqual(responseMock.data.todos)
    })
})
