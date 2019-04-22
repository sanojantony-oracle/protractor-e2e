import {$,browser, protractor} from 'protractor';
import {PageObject} from "../base/pageobject";
import {NameDataPlanPage} from "./name-data-plan.page";

export class DataActivationPage extends PageObject{
    createBtn;
    headerName;


    constructor() {
        super();

        this.createBtn = $('oj-button#createButton');
        //this.headerName = $('div#cfg-console span.biapps-area-page-title-text');
    }

    async waitUntilPageDisplayed() {
        await this.waitUntilReady(this.createBtn);
    }

    async openDataPlanWizard() : Promise<NameDataPlanPage> {
        await this.createBtn.click();
        let planPage = new NameDataPlanPage();
        await planPage.waitUntilPageDisplayed();
        return planPage;
    }

    async hasCreateButton() {
        return await this.createBtn.isPresent();
    }

}