import angular from "angular"
import { routes } from "./routes"
import { TodoListComponent } from "./components/todoList.component"
import { TodoService } from "./services/todo.service"

angular
    .module("App", [
        "ui.router"
    ])
    .config(routes)
    .constant("BASE_URL", "http://localhost:5000/api")
    .component("todoList", TodoListComponent)
    .service("TodoService", TodoService)

angular.bootstrap(document, ["App"])
