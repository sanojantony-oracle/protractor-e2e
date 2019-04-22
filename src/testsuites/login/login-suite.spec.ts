import {LoginPage} from '../../pageobjects/login/login.page';
import {FAWConfig} from "../../utils/globals";
import {browser} from "protractor";
import {LifeCycle} from "../../utils/life.cycle";

//Login Suite
describe('Login Suite for Fusion Analytics', function () {

    let homePage;
    //Boiler plate for each Suite.
    //***************************************
    beforeAll(async (done)=> {
        homePage = await LifeCycle.setup();
        done();
    });

    afterAll(async () => {
        //await LifeCycle.teardown();
    });

    beforeEach(async () => {});
    afterEach(async () => {});

    //***************************************

    //Test Login
    it('should login to fusion analytics', async function () {
        let bannerPage = await homePage.getBannerPage();
        expect(await bannerPage.getUserName()).toBe(FAWConfig.userName);
    });

});