
import {WaitingObject} from "./waitingobject";

/**
 * <p>
 *     <ul>
 *         <li>This is the base object for all page objects.</li>
 *        <li>This will abstract test code from View internals and selectors, allowing single point of change
 *        if the view changes.</li>
 *     </ul>
 * </p>
 */

export class PageObject extends WaitingObject {

    constructor() {
        super();
    }

    /**
     * IMPORTANT: To be implemented by each PageObject
     * Utility method which will allow waiting until the Page Object View is rendered and visible
     */
    waitUntilPageDisplayed() {
        throw new Error("All page objects should implement this based on a local visible element");
    }
}