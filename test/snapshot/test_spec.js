import "angular";
import "angular-mocks"
import TodoListTemplate from "components/todoList.component.html";

describe.only("Snapshot Testing on AngularJS", () => {
    const todosHttpResponse = require(`${__dirname}/../../stubs/todos_get.json`)
    let mainFragment;
    let scope;

    beforeEach(inject(($rootScope) =>{
        scope = $rootScope.$new();
        mainFragment = document.createDocumentFragment();
    }))

    it("should be render a todo", inject(($compile, $injector) => {
        scope.$ctrl = {
            todosList : todosHttpResponse.todos
        };
        const el = $compile(TodoListTemplate)(scope);
        const attributesArray = new Set();
        scope.$digest();

        const allChildrensNodes = el[0].childNodes;
        const allChildrensElements = el[0].getElementsByTagName("*");

        //replace directive values for placeholder
        Array.from(allChildrensElements)
            .map((child) => Array.from(child.attributes))
            .forEach((attrs) => {
                attrs.forEach((attr) => {
                    const name = attr.name.replace(/-(.)/g, function(match, group1) {
                        return group1.toUpperCase();
                    });
                    if($injector.has(`${name}Directive`)) {
                        attr.value = "[ngExpression]";
                    }
                })
            });

        for(let i = 0; i < allChildrensNodes.length ; i++) {
            if(allChildrensNodes[i].nodeType === 8) {
                allChildrensNodes[i].parentNode.removeChild(allChildrensNodes[i]);
            }
        }

        expect(el[0].outerHTML).toMatchSnapshot();
    }));

});
