import {browser} from 'protractor';
import {FAWConfig} from "./globals";
import {LoginPage} from "../pageobjects/login/login.page";
import {HomePage} from "../pageobjects/home/home.page";

export class LifeCycle {

    static homePage:HomePage=null;

    static isSetupDone:boolean=false;

    /**
     *
     */
    static async setup() {
        if(LifeCycle.isSetupDone) return LifeCycle.homePage;
        //Protractor expects angular runtime to be loaded. As we are not Angular based,
        //simply disable wait for Angular and other frameworks can be tested.
        await browser.waitForAngularEnabled(false);

        //Get login page for data configuration
        await browser.get(FAWConfig.dataConfigURL);

        //Maximize window to avert any bugs due to visibility
        //await browser.driver.manage().window().maximize();

        LifeCycle.isSetupDone = true;

        return LifeCycle.login();
    }

    /**
     *
     */
    static async teardown() {
        await LifeCycle.signout();
        await browser.close();
    }

    /**
     *
     */
    static async login():Promise<HomePage>{

        let loginPage = new LoginPage();
        //await loginPage.waitUntilPageDisplayed();

        //Interact and set view fields
        await loginPage.setUserName( FAWConfig.userName);
        await loginPage.setPassword(FAWConfig.pwd);
        await loginPage.setCustomerId(FAWConfig.customerId);

        LifeCycle.homePage = await loginPage.login();

        //TODO errors in login to be trapped and handled here.

        //browser.sleep(10000);

        //Login page should return the page it navigates to on successful login.
        return LifeCycle.homePage;
    }

    /**
     *
     */
    static async signout() {

        if(LifeCycle.homePage != null) {
            let bannerPage = await LifeCycle.homePage.getBannerPage();
            await bannerPage.signOut();
        }
    }
}