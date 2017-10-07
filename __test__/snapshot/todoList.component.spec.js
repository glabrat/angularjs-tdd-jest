import TodoListTemplate from "components/todoList.component.html";

describe("Render todoList", () => {
    const todos = [
        {
            "name": "Learn Programming using component based approach",
            "completed": true
        }
    ];
    it("render a todo list with list of todos", () => {
        const componentDefinition = {
            template: TodoListTemplate,
            $ctrl: {
                todosList: todos
            }
        };
        expect(componentDefinition).toMatchSnapshot();
    });
    it("render a todo list without list", () => {
        const componentDefinition = {
            template: TodoListTemplate,
            $ctrl: {
                todosList: []
            }
        };
        expect(componentDefinition).toMatchSnapshot();
    });
});
