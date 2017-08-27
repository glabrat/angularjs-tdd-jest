import { expect } from "jest-jasmine2"
import { defineSupportCode } from "cucumber"
import { By, Key } from "selenium-webdriver"

defineSupportCode( ({ Given, When, Then }) => {

    Given(/^que estoy en "(.*)"$/, function(url) {
        this.driver.get(url)
    })
    When(/^escriba "(.*)"$/, function(text) {
        // this.driver
        //     .findElement({ name: "q" })
        //     .sendKeys(text)
    })
    Then(/^debería aparecer el titulo "(.*)"$/, function(expected_title) {
        this.driver
            .getTitle()
            .then((title) => {
                expect(title).to.equals(expected_title)
            })
    })
})
