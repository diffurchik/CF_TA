import { expect, type Locator, type Page } from '@playwright/test';

export class FreeGraphicsPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly notificationPanel: Locator;
  readonly cancelNotificationButton: Locator;
  readonly DownloadButton : Locator;
  readonly getForFreePanel: Locator;
  readonly carouselSection: Locator;
  readonly reviewSection: Locator;
  readonly activateTrialSection: Locator;
  readonly activateTrialButton: Locator;
  readonly searchFilterSection : Locator;
  readonly loginButton: Locator;
  readonly loginModal: Locator;


  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#desktop-header [data-testid="header-search"] input');
    this.cancelNotificationButton = page.locator('#onesignal-slidedown-cancel-button')
    this.notificationPanel = page.locator('#onesignal-slidedown-dialog')
    this.DownloadButton = page.locator('#js-show-modal-when-dissapear span:has-text("Download")')
    this.getForFreePanel = page.locator('#js-show-modal-when-dissapear')
    this.carouselSection =page.locator('.carousel-section')
    this.reviewSection = page.locator('#review-section')
    this.activateTrialSection = page.locator('.c-product-box--product-detail-box:has(span:text("Activate"))')
    this.activateTrialButton = page.locator('span:text(" Activate free trial")')
    this.searchFilterSection = page.locator('span:has-text("Search and Filter")')
    this.loginButton = page.locator('button:has-text("Login")').nth(0)
    this.loginModal = page.locator('#modal-account')
  }
}