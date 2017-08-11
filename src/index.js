import angular from 'angular';
import { config, ngModules } from "./config"
import { TodoListComponent } from "./components/todoList.component"

const APP_NAME = 'App'

angular
    .module(APP_NAME, ngModules)
    .config(config)
    .component(TodoListComponent.name, TodoListComponent)

angular.bootstrap(document, [APP_NAME]);
