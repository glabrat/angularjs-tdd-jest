import '@uirouter/angularjs'

export function routes($stateProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    })

    $stateProvider
        .state("home", {
            url: "/",
            component: "todoList",
            resolve: {
                todosList: TodoService => TodoService.getTodos()
            }
        })
}
