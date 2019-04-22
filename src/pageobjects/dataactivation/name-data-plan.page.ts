import {$, $$, browser} from 'protractor';
import {PageObject} from "../base/pageobject";


/**
 *
 */
export class NameDataPlanPage extends PageObject {

    wizardSteps;
    dataPlanName;

    nextBtn;
    cancelBtn;

    constructor() {
        super();

        this.wizardSteps = $('div.train-container');
        this.dataPlanName  = $('oj-input-text#plan-name');//.ojInputText( "getNodeBySubId", {'subId': 'oj-inputtext-input'} );
        this.nextBtn = $('oj-button[on-click*="nextClickEventHandler"]');
        this.cancelBtn = $('oj-button[on-click*="cancelClickEventHandler"]');
    }

    async isPageDisplayed():Promise<boolean>{
        return await browser.isElementPresent(this.wizardSteps);
    }

    async waitUntilPageDisplayed() {
        await browser.isElementPresent(this.wizardSteps);
    }

    async setName(name) {
        //oj.Components.getSubIdByNode
        await this.dataPlanName.sendKeys(name);
    }

    async cancelWizard() {
        await this.cancelBtn.click();
    }
}