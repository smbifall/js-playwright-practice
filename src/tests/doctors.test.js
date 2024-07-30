const { test, expect } = require('@playwright/test');

test.describe('Doctors page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
  });

  test('Check page title', async ({ page }) => {
    await expect(page).toHaveTitle('Appointment Planner -  Syncfusion Angular Components Showcase App');
  });

  test('Open modal window for adding a new doctor', async ({ page }) => {
    // click on doctors item in the side menu
    await page.locator('[routerlink="/doctors"]').filter({ hasText: /^Doctors$/ }).click();
    // click on add new doctor btn
    await page.locator('.specialization-types button.e-control').click();
    // check that a modal window is displayed
    await expect(page.locator('[role="dialog"].new-doctor-dialog')).toBeVisible();
  });

})