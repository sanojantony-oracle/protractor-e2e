import {LoginPage} from '../../pageobjects/login/login.page';
import {FAWConfig} from "../../utils/globals";
import {browser} from "protractor";

//Login Suite
describe('Login Suite for Fusion Analytics', function () {
    
    //Test Login
    it('should login to fusion analytics', async function () {

        //Protractor expects angular runtime to be loaded. As we are not Angular based,
        //simply disable wait for Angular and other frameworks can be tested.
        await browser.waitForAngularEnabled(false);

        let fawConfig = new FAWConfig();
        
        //Get login page for data configuration
        await browser.get(fawConfig.dataConfigURL);
        await browser.sleep(3000);

        //TODO is PageFactory required here?
        let loginPage = new LoginPage();
        //await loginPage.waitUntilPageDisplayed();



        //Interact and set view fields
        await loginPage.setUserName( fawConfig.userName);
        await loginPage.setPassword(fawConfig.pwd);
        await loginPage.setCustomerId(fawConfig.customerId);

        await loginPage.login();

        await browser.sleep(10000);
        //Login page should return the page it navigates to on successful login. 
        //let homePage =  await loginPage.login();

    });
});