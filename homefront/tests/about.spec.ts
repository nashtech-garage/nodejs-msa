import { test, expect } from '@playwright/test';

test('check about us page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/');

  await page.click('text=About Us');

  await expect(page).toHaveURL('http://localhost:3000/about');

  await expect(page.locator('h1')).toContainText('About us');
});