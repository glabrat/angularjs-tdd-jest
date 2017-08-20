import angular from 'angular';
import { routes } from './routes'
import { TodoListComponent } from "./components/todoList.component"

angular
    .module('App', ['ngRoute'])
    .config(routes)
    .component('todoList', TodoListComponent)


angular.bootstrap(document, ['App']);
