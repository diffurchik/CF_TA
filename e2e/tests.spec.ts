import {test, expect} from '@playwright/test';
import {FreeGraphicsPage} from './pages/free-graphics-page';
import {FreeGraphicsSteps} from './steps/graphics-page-steps';

test.describe('Free Graphics Page', () => {

    test.beforeEach(async ({page}) => {
        const steps = new FreeGraphicsSteps(page)
        await steps.goto();
        await steps.closeNotificationAlert()
    })

    // First of all need to check monetization and that user can get needed product (the user's very first target - get a template)
    test('user can click on the download button and redirect to a cart', async ({page}) => {
        const steps = new FreeGraphicsSteps(page)

        await steps.clickDownloadButton()
        await page.waitForURL('**/free-trial/')

        const title = page.locator('h1:text("www.creativefabrica.com")'); // there is a captcha page between user steps so will check this page as proof that Download button is work and redirect a user
        await expect(title).toBeVisible();
    });

    // Information about a product is necessary to make a purchasing decision.
    test('user can see photos and reviews of a position', async ({page}) => {
        const freePage = new FreeGraphicsPage(page)

        await expect(freePage.carouselSection).toBeVisible()
        await expect(freePage.reviewSection).toBeVisible()
    })


    test('user can activate free trial', async ({page}) => {
        const steps = new FreeGraphicsSteps(page)

        await steps.clickActivateTrialButton()
        const title = page.locator('h1:text("www.creativefabrica.com")');
        await expect(title).toBeVisible();
    })

    // After that we can check other main user flows

    test('user can use a search from the current page', async ({page}) => {
        const steps = new FreeGraphicsSteps(page)

        await steps.fillInputAndSubmit('embroidery')

        await page.waitForURL('**/?query=embroidery')
        const title = page.locator('h1:text("www.creativefabrica.com")');
        await expect(title).toBeVisible();
    })

    test('user can open login modal on the current page', async ({page}) => {
        const freePage = new FreeGraphicsPage(page)
        await freePage.loginButton.click()

        await expect(freePage.loginModal).toBeVisible() // The goal is to test the page, not the login flow.
    })
})