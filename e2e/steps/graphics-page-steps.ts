import {Page} from '@playwright/test';
import { FreeGraphicsPage } from '../pages/free-graphics-page';

export class FreeGraphicsSteps {
  readonly page: Page;
  readonly freePage: FreeGraphicsPage;
  readonly TESTED_PAGE = 'https://www.creativefabrica.com/product/christmas-tree-lantern-bundle/';

  constructor(page: Page) {
    this.page = page;
    this.freePage = new FreeGraphicsPage(page); 
  }

  async goto() {
    await this.page.goto(this.TESTED_PAGE);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async fillInputAndSubmit(query: string) {
    await this.freePage.searchInput.fill(query);
    await this.freePage.searchInput.press('Enter')
  }

  async closeNotificationAlert(){
    await this.freePage.notificationPanel.waitFor({ state: 'visible' });
    await this.freePage.cancelNotificationButton.click();
  }

  async clickDownloadButton(){
    await this.freePage.getForFreePanel.waitFor({ state: 'visible' });
    await this.freePage.DownloadButton.click();
  }

  async clickActivateTrialButton(){
    await this.freePage.activateTrialSection.waitFor({ state: 'visible' });
    await this.freePage.activateTrialButton.click();
  }

}
