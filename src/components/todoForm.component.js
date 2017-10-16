import template from "./todoForm.component.html";

export class TodoFormController {
    constructor() {
        this.newTodo = {
            name: "",
            description: ""
        };
    }
}
export const TodoFormComponent = {
    template,
    controller: TodoFormController
}
