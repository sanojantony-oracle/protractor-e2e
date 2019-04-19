"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const waitingobject_1 = require("../waitingobject");
/**
 * Login View Page Object
 *
 * This will abstract test code from View internals and selectors, allowing single point of change if the view changes
 */
class LoginPage extends waitingobject_1.WaitingObject {
    //All delayed proxy elements declared within the page object view
    constructor() {
        super();
        this.userName = protractor_1.$('input#idUser');
        this.password = protractor_1.$('input#idPassword');
        this.customerId = protractor_1.$('input#idServiceKey');
        this.signInBtn = protractor_1.$('button#btn_login');
    }
    /**
     * Utility method which will allow waiting until the Page Object View is rendered and visible
     */
    waitUntilPageDisplayed() {
        const _super = Object.create(null, {
            waitUntilReady: { get: () => super.waitUntilReady }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.waitUntilReady.call(this, this.signInBtn, 150000);
        });
    }
    /**
     */
    getUserName() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userName.getText();
        });
    }
    /**
     * <p>Set user name</p>
     */
    setUserName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userName.sendKeys(userName);
        });
    }
    /**
     * <p>Only setter for password to disable password access from PO</p>
     */
    setPassword(pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.password.sendKeys(pwd);
        });
    }
    /**
     * <p>Set Customer Id</p>
     */
    setCustomerId(custId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customerId.sendKeys(custId);
        });
    }
    /**
     * <p>Get Customer Id</p>
     * @returns {Promise<*>}
     */
    getCustomerId() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customerId.getText();
        });
    }
    /**
     * <p>Login to Data configuration</p>
     * @returns {Promise<void>}
     */
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.signInBtn.click();
            //TODO return homePage;
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDJDQUFpQztBQUNqQyxvREFBK0M7QUFFL0M7Ozs7R0FJRztBQUNILE1BQWEsU0FBVSxTQUFRLDZCQUFhO0lBT3hDLGlFQUFpRTtJQUNqRTtRQUNJLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0csc0JBQXNCOzs7OztZQUN4QixNQUFNLE9BQU0sY0FBYyxZQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBRUQ7T0FDRztJQUNHLFdBQVc7O1lBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0csV0FBVyxDQUFDLFFBQVE7O1lBQ3RCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDRyxXQUFXLENBQUMsR0FBRzs7WUFDakIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNHLGFBQWEsQ0FBQyxNQUFNOztZQUN0QixNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLGFBQWE7O1lBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLEtBQUs7O1lBQ1AsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLHVCQUF1QjtRQUMzQixDQUFDO0tBQUE7Q0FDSjtBQW5FRCw4QkFtRUMifQ==