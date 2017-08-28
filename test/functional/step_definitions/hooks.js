import { defineSupportCode } from "cucumber"

defineSupportCode(({ After }) => {
    After(function() {
        return this.driver.quit()
    })
})
