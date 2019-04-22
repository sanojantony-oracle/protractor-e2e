import {$,browser} from 'protractor';
import {PageObject} from "../base/pageobject";
import {DomainAdminPage} from "../domainadmin/domain-admin.page";
import {ContentSelectorPage} from "./content-selector.page";

/**
 *
 */
export class BannerPage extends PageObject{

    panCakeButton;
    brandingName;
    notificationLauncher;
    notificationCount;
    userMenu;
    userName;


    constructor() {
        super();

        this.panCakeButton = $('oj-button#drawerToggleButton');
        this.brandingName = $('div.biapps-branding-area-logo-name>span');
        this.notificationLauncher = $('span#myLauncher');
        this.notificationCount = $('div#notification-arrow>span.notification-count');
        this.userMenu = $('oj-menu-button#mainToolbaruserMenuButton');
        this.userName = $('span#userName');
    }


    waitUntilPageDisplayed() {
        super.waitUntilReady(this.userName);
    }

    /**
     * Open the pancake menu to toggle between the content views
     */
    async openContentSelection():Promise<ContentSelectorPage>{
       await this.panCakeButton.click();
       return new ContentSelectorPage();
    }

    async getBrandingName() {
        return this.brandingName.getText();
    }

    async openNotifications() {
        await this.notificationLauncher.click();
    }

    async getNotificationCount() :Promise<number> {
        return Number.parseInt(await this.notificationCount.getText());
    }

    async openUserMenu() {
        await this.userMenu.click();
        //Should return MenuPageObject
    }

    async getUserName() {
        await this.waitUntilPageDisplayed();
        await browser.sleep(10000);
        return await this.userName.getText();
    }

    async signOut() {
        await this.openUserMenu();
    }
}