export class TodoService {
    constructor($http, BASE_URL) {
        this.http = $http;
        this.url = `${BASE_URL}/todos`
    }
    //Interchange the comment on the getTodos method and run `npm run tdd` for see the problem:
    //When async/await doesn't used, the html associated to the resolve in the
    // "/" route that used this service, the promise was resolved that expected.
    //The idea for this branch it's research about the problem and propose a way
    //for we can use async/await on the production code and on the testing environment
    async getTodos() {
        const apiResponse = await this.http.get(this.url)
        return apiResponse.data.todos
    }
    // getTodos() {
    //     return this.http.get(this.url).then(res => res.data.todos)
    // }
}
