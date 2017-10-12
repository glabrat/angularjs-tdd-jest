import template from "../../src/components/todoForm.component.html";

describe("Render todoForm", () => {
    it("newTodo form with name data filled and submit enabled", () => {
        const componentDefinition = {
            template,
            $ctrl: {
                newTodo: {
                    name: "data"
                }
            }
        };
        expect(componentDefinition).toMatchSnapshot();
    });
    it("newTodo form with name data empty and submit disabled", () => {
        const componentDefinition = {
            template,
            $ctrl: {
                newTodo: {
                    name: ""
                }
            }
        };
        expect(componentDefinition).toMatchSnapshot();
    });
});
