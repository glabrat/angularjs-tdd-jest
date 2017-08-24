import { TodoService } from "services/todo.service"

describe("TodoService", () => {
    let TodoServiceInstance

    beforeAll(() => {
        angular
            .module("Test", [])
            .service("TodoService", TodoService)
    })

    beforeEach(angular.mock.module("Test"))

    beforeEach(inject((TodoService) => {
        TodoServiceInstance = TodoService
    }))

    it("Should have defined", () => {
        expect(TodoServiceInstance).toBeDefined()
    })

    it("Should be response a data object from response on getTodos method", async () => {
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
        jest.spyOn(TodoServiceInstance.http, 'get').mockReturnValueOnce(Promise.resolve(responseMock))

        const serviceResponse = await TodoServiceInstance.getTodos()

        expect(serviceResponse).toEqual(responseMock.data.todos)
    })

})
