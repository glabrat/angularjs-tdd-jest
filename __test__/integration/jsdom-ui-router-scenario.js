import angular from "angular";
import "angular-mocks";

export const jsdomUIRouterScenario = {
    build : inject(($compile, $rootScope) => {
        const componentDOMelement = angular.element("<div ui-view></div>");
        document.body.appendChild(componentDOMelement[0]);
        $compile(componentDOMelement)($rootScope.$new());
    }),
    clean: () => {
        const bodyContent = document.body.querySelector("*")
        if(bodyContent) {
            bodyContent.remove();
        }
    }
};
