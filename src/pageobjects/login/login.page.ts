
import {$, $$} from 'protractor';
import {WaitingObject} from '../waitingobject';

/**
 * Login View Page Object
 *
 * This will abstract test code from View internals and selectors, allowing single point of change if the view changes
 */
export class LoginPage extends WaitingObject {

    userName;
    password;
    customerId;
    signInBtn;

    //All delayed proxy elements declared within the page object view
    constructor() {
        super();

        this.userName = $('input#idUser');
        this.password = $('input#idPassword');
        this.customerId = $('input#idServiceKey');
        this.signInBtn = $('button#btn_login');
    }

    /**
     * Utility method which will allow waiting until the Page Object View is rendered and visible
     */
    async waitUntilPageDisplayed() {
        await super.waitUntilReady(this.signInBtn, 150000);
    }

    /**
     */
    async getUserName() {
        return this.userName.getText();
    }

    /**
     * <p>Set user name</p>
     */
    async setUserName(userName) {
        await this.userName.sendKeys(userName);
    }

    /**
     * <p>Only setter for password to disable password access from PO</p>
     */
    async setPassword(pwd) {
        await this.password.sendKeys(pwd);
    }

    /**
     * <p>Set Customer Id</p>
     */
    async setCustomerId(custId) {
        await this.customerId.sendKeys(custId);
    }

    /**
     * <p>Get Customer Id</p>
     * @returns {Promise<*>}
     */
    async getCustomerId() {
        return this.customerId.getText();
    }

    /**
     * <p>Login to Data configuration</p>
     * @returns {Promise<void>}
     */
    async login() {
        await this.signInBtn.click();
        //TODO return homePage;
    }
}

