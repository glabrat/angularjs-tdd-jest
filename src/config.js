import ngRoute from 'angular-route'
import ngRedux from 'ng-redux'
import reducer from './reducer'

export const ngModules = [
    ngRoute,
    ngRedux
]

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
