export class TodoService {
    constructor($http, BASE_URL) {
        this.http = $http;
        this.url = `${BASE_URL}/todos`
    }
    async getTodos() {
        const apiResponse = await this.http.get(this.url)
        return apiResponse.data.todos
    }
}
