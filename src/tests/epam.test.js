const { test, expect } = require('@playwright/test');

test.describe('epam page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://epam.com/');
  });

  test('should have appropriate title', async ({ page }) => {
    await expect(page).toHaveTitle('EPAM | Software Engineering & Product Development Services  ')
  });

  test('should open hamburger menu', async ({ page }) => {
    await page.locator('button.hamburger-menu__button').click();
    await expect(page.locator('div.hamburger-menu__dropdown-section')).toBeVisible();
  });

})