import angular from "angular";
import "angular-mocks";

export const jsdomUIRouterScenario = {
    build : () => inject(($compile, $rootScope) => {
        const componentDOMelement = angular.element("<div ui-view></div>");
        document.body.appendChild(componentDOMelement[0]);
        $compile(componentDOMelement)($rootScope.$new());
    }),
    clean: () => inject(() => {
        const bodyContent = document.body.querySelector("*");
        if(bodyContent) {
            bodyContent.remove();
        }
    }),
    //@TODO create a way to set a httpBackend with a well defined API
    loadState: (stateName) => inject(($rootScope, $state) => {
        if($state.href(stateName)) {
            $state.go(stateName);
            $rootScope.$digest();
        } else {
            throw new Error(`The given state "${stateName}" is not exists.`)
        }
    })
};
