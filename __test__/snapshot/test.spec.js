import TodoListTemplate from "components/todoList.component.html";

describe("Snapshot Testing on AngularJS", () => {
    const todos = [
        {
            "name": "Learn Programming using component based approach",
            "completed": true
        },
        {
            "name": "Learn Machine Learning",
            "completed": false
        }
    ];

    it("should be render a todo list", () => {
        const componentDefinition = {
            template: TodoListTemplate,
            $ctrl: {
                todosList: todos
            }
        };
        expect(componentDefinition).toMatchSnapshot();
    });
});
