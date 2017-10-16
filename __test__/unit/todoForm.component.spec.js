import { TodoFormController } from "../../src/components/todoForm.component";

describe("TodoFormController", () => {
    let controller;

    beforeEach(() => {
        controller = new TodoFormController();
    });

    it("Should have a defined controller and default values for new todo", () => {
        expect(controller).toBeInstanceOf(TodoFormController);
        expect(controller.newTodo.name).toEqual("");
        expect(controller.newTodo.description).toEqual("")
    });
});
