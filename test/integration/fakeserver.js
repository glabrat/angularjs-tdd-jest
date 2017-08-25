export class FakeServer{
    constructor(httpBackend, stubsPath){
        this.httpBackend = httpBackend
        this.stubsPath = stubsPath || `${__dirname}/../../stubs`
    }
    loadMockFile(filename){
        try {
            return require(`${this.stubsPath}/${filename}`)
        } catch(e) {
            console.log(e.message)
        }
    }
    register(options) {
        for(let method in options) {
            let methodEndpoints = options[method]
            let processMethods = (endpointUrl) => {
                let endpointUrlRegex = new RegExp(`.+${endpointUrl}`)
                let mockFilename = endpointUrl.replace(/[\/|\:]+/g, '_')
                let response = this.loadMockFile(`${mockFilename}_${method}.json`)

                if (response) {
                    this.httpBackend
                        .whenRoute(method.toUpperCase(), endpointUrlRegex)
                        .respond((method, url, data, headers, params) => [200, response])
                }
            }
            methodEndpoints.forEach(processMethods)
        }
    }
}
