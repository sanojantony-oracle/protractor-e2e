
import {$, $$, browser} from 'protractor';
import {PageObject} from "../base/pageobject";
import {BannerPage} from "./banner.page";
import {DataActivationPage} from "../dataactivation/data-activation.page";


/**
 * Home View Page Object
 *
 * This will abstract test code from View internals and selectors, allowing single point of change if the view changes
 */
export class HomePage extends PageObject {

    //Sub page objects available on home page
    //******************************************

    bannerPage:BannerPage;
    //This is the default page in Configuration manager. So let us keep a reference by default here
    dataActPage:DataActivationPage;

    homeContainer;

    //******************************************

    //All delayed proxy elements declared within the page object view
    constructor() {
        super();

        this.homeContainer = $('div.system-setup-container div#mainContainer');
    }

    /**
     *
     */
    async waitUntilPageDisplayed() {
       await super.waitUntilReady(this.homeContainer);
    }

    /**
     * Utility method which will allow waiting until the Page Object View is rendered and visible
     */
    // async waitUntilPageDisplayed() {
    //     await super.waitUntilReady(th, 150000);
    // }

     async getBannerPage(): Promise<BannerPage> {
        await this.waitUntilPageDisplayed();
        return new BannerPage();
     }

    /**
     *
     */
    async getDataActivationPage() : Promise<DataActivationPage> {
         await this.waitUntilPageDisplayed();
         return new DataActivationPage();
     }
}

