import 'angular-route'
import 'ng-redux'
import reducer from './reducer'

export function config($ngReduxProvider, $routeProvider, $locationProvider) {
    $ngReduxProvider.createStoreWith(reducer, [])

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
        .when('/', {
            template: '<todo-list></todo-list>'
        })
}
