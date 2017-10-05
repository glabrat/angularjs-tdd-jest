import TodoListTemplate from "components/todoList.component.html";

describe("Snapshot Testing on AngularJS", () => {
    const { angularjsSnapshotFormat } = require(`${__dirname}/angularjsSnapshotFormat`)
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
    let scope;

    beforeEach(inject(($rootScope) => {
        scope = $rootScope.$new();
    }))

    it("should be render a todo list", () => {
        scope.$ctrl = {
            todosList : todos
        };
        const renderedElement = angularjsSnapshotFormat(TodoListTemplate, scope);

        expect(renderedElement).toMatchSnapshot();
    });
});
