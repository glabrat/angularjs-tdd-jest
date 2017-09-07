export class TodoService {
    constructor($http, BASE_URL) {
        this.http = $http;
        this.url = `${BASE_URL}/todos`
    }
    getTodos() {
        return this.http.get(this.url)
            .then(res => res.data.todos)
            .catch(error => error.message)
    }
}
