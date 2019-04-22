import {browser} from "protractor";

/**
 * Base class for all PageObjects
 */
export class WaitingObject {

    /**
     * Generic waiting method to ensure an element is present and displayed, before we use it
     * @param element
     */
    async waitUntilReady(element, timeout=100000) {
        await browser.wait(function () {
            return element.isPresent();
        }, timeout);
       await  browser.wait(function () {
            return element.isDisplayed();
        }, timeout);
    };
}
