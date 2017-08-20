export class TodoService {
    constructor($http) {
        this.http = $http;
    }
    async getTodos() {
        const apiResponse = await this.http.get("http://localhost:3000/api/todos")
        return apiResponse.data
    }
}
