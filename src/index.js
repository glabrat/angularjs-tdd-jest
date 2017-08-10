import angular from 'angular';
import { config } from './config'
import { TodoListComponent } from "./components/todoList.component"

angular
    .module('App', ['ngRoute', 'ngRedux'])
    .config(config)
    .component('todoList', TodoListComponent)


angular.bootstrap(document, ['App']);
