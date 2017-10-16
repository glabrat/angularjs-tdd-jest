import template from "./todoForm.component.html";

export class TodoFormController {
    constructor() {
        this.newTodo = {
            name: "",
            description: ""
        };
        this.errorMessages = {
            name: { required: "El campo nombre es obligatorio" }
        };
    }
}
export const TodoFormComponent = {
    template,
    controller: TodoFormController
}
