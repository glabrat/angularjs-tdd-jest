import { defineSupportCode } from "cucumber"

defineSupportCode(({ Before, After }) => {
    After(function(done) {
        return this.driver.quit().then(done)
    })
})
