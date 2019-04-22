
import {LifeCycle} from "../../utils/life.cycle";
import {browser} from 'protractor';

//Create Data Plan Test Suite
describe('Data Plan Creation Suite', function () {

    let homePage;

    //Boiler plate for each Suite.
    //***************************************
    beforeAll(async (done)=> {
        homePage = await LifeCycle.setup();
        done();
    });

    afterAll(async () => {
       // await LifeCycle.teardown();
    });

    beforeEach(async () => {});
    afterEach(async () => {
    });

    //***************************************

    //Create button is available and enabled
    it('should have create enabled ', async function () {
        let dataPage = await homePage.getDataActivationPage();
        await dataPage.waitUntilPageDisplayed();
        expect(await dataPage.hasCreateButton()).toBe(true);
    });

    //Create action should navigate to wizard
    it('should be able to click create and navigate to stepped wizard', async function () {
        let dataPage = await homePage.getDataActivationPage();
        console.log("Wait for Data Activation Page...");
        await dataPage.waitUntilPageDisplayed();

        console.log("Wait for Data Plan Wizard Page...");
        let namePlanPage = await dataPage.openDataPlanWizard();
        console.log("Check if the Data Plan Wizard Page exists...");
        expect(namePlanPage).toBeTruthy();
        console.log("Check if the Data Plan Wizard Page is visible...");
        expect(await namePlanPage.isPageDisplayed()).toBeTruthy();

        //await namePlanPage.setName("My New data plan");

        await browser.sleep(5000);
        console.log("Cancel Wizard..");
        await namePlanPage.cancelWizard();

    });

    it('just dummy wait', async () => {
        await browser.sleep(1000);
    });

    it('just dummy wait', async () => {
        await browser.sleep(1000);
    });

    it('just dummy wait', async () => {
        await browser.sleep(1000);
    });


});