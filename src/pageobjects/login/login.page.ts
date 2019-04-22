
import {$, $$, browser} from 'protractor';
import {PageObject} from "../base/pageobject";
import {HomePage} from "../home/home.page";

/**
 * Login View Page Object
 */
export class LoginPage extends PageObject {

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
        //TODO handle error conditions
        await browser.sleep(10000);
        let homePage = new HomePage();
        homePage.waitUntilPageDisplayed();
        return homePage;
    }
}

