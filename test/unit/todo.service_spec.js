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
            get(){
                return Promise.resolve(responseMock)
            }
        }
        TodoServiceInstance = new TodoService($http)
    })

    it("Should have defined", () => {
        expect(TodoServiceInstance).toBeDefined()
    })

    it("Should be response a data object from response on getTodos method", async () => {
        const serviceResponse = await TodoServiceInstance.getTodos()
        expect(serviceResponse).toEqual(responseMock.data.todos)
    })
})
