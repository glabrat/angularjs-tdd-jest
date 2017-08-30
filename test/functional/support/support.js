import SeleniumWebdriver from "selenium-webdriver"
import { defineSupportCode } from "cucumber"

function CustomWorld () {
    const headlessChrome = process.env.NODE_ENV === "staging"

    if(headlessChrome) {
        const chromeCapabilities = SeleniumWebdriver.Capabilities.chrome()
        chromeCapabilities.set("chromeOptions", { args: ["--headless"] })
        this.driver = new SeleniumWebdriver.Builder()
            .forBrowser("chrome")
            .withCapabilities(chromeCapabilities)
            .build()
    } else {
        this.driver = new SeleniumWebdriver.Builder()
            .forBrowser("chrome")
            .build()
    }
}
function beforeScenarioHook() {
    return this.driver.manage().window().maximize()
}
function afterScenarioHook() {
    return this.driver.quit()
}
defineSupportCode(({ setWorldConstructor, Before, After }) => {
  setWorldConstructor(CustomWorld)
  Before(beforeScenarioHook)
  After(afterScenarioHook)
})