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
const login_page_1 = require("../../pageobjects/login/login.page");
const globals_1 = require("../../utils/globals");
const protractor_1 = require("protractor");
//Login Suite
describe('Login Suite for Fusion Analytics', function () {
    //Test Login
    it('should login to fusion analytics', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Protractor expects angular runtime to be loaded. As we are not Angular based,
            //simply disable wait for Angular and other frameworks can be tested.
            yield protractor_1.browser.waitForAngularEnabled(false);
            let fawConfig = new globals_1.FAWConfig();
            //Get login page for data configuration
            yield protractor_1.browser.get(fawConfig.dataConfigURL);
            yield protractor_1.browser.sleep(3000);
            //TODO is PageFactory required here?
            let loginPage = new login_page_1.LoginPage();
            //await loginPage.waitUntilPageDisplayed();
            //Interact and set view fields
            yield loginPage.setUserName(fawConfig.userName);
            yield loginPage.setPassword(fawConfig.pwd);
            yield loginPage.setCustomerId(fawConfig.customerId);
            yield loginPage.login();
            yield protractor_1.browser.sleep(10000);
            //Login page should return the page it navigates to on successful login. 
            //let homePage =  await loginPage.login();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tc3VpdGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLXN1aXRlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1FQUE2RDtBQUM3RCxpREFBOEM7QUFDOUMsMkNBQW1DO0FBRW5DLGFBQWE7QUFDYixRQUFRLENBQUMsa0NBQWtDLEVBQUU7SUFFekMsWUFBWTtJQUNaLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTs7WUFFbkMsK0VBQStFO1lBQy9FLHFFQUFxRTtZQUNyRSxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQkFBUyxFQUFFLENBQUM7WUFFaEMsdUNBQXVDO1lBQ3ZDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUIsb0NBQW9DO1lBQ3BDLElBQUksU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO1lBQ2hDLDJDQUEyQztZQUkzQyw4QkFBOEI7WUFDOUIsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFcEQsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFeEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQix5RUFBeUU7WUFDekUsMENBQTBDO1FBRTlDLENBQUM7S0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9