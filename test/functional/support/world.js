import chromedriver from 'chromedriver';
import seleniumWebdriver from 'selenium-webdriver';
import { defineSupportCode } from 'cucumber';

function CustomWorld () {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();
}

defineSupportCode(({ setWorldConstructor }) => {
  setWorldConstructor(CustomWorld)
})
