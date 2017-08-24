export class TodoService {
    constructor($http) {
        this.http = $http;
    }
    async getTodos() {
        const apiResponse = await this.http.get("http://localhost:5000/api/todos")
        return apiResponse.data.todos
    }
}
