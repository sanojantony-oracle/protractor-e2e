import {browser} from "protractor";

/**
 * Base class for all PageObjects
 */
export class WaitingObject {


    /**
     * Generic waiting method to ensure an element is present and displayed, before we use it
     * @param element
     */
    waitUntilReady(element, timeout=10000) {
        browser.wait(function () {
            return element.isPresent();
        }, timeout);
        browser.wait(function () {
            return element.isDisplayed();
        }, timeout);
    };
    
    /**
     * To be implemented by each PageObject
     * Utility method which will allow waiting until the Page Object View is rendered and visible
     */
    waitUntilPageDisplayed() {
        throw new Error("All page objects should implement this based on a local visible element");
    }
}
exports.WaitingObject = WaitingObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdGluZ29iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndhaXRpbmdvYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUM7QUFFbkM7O0dBRUc7QUFDSCxNQUFhLGFBQWE7SUFBMUI7UUFFSTs7O1dBR0c7UUFDSCxtQkFBYyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDekIsb0JBQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDL0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ1Ysb0JBQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDO0lBVU4sQ0FBQztJQVJHOztPQUVHO0lBQ0gsZUFBZTtRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztJQUM5RixDQUFDO0NBR0o7QUF2QkQsc0NBdUJDIn0=