import { test, expect } from '@playwright/test';

test('check about us page', async ({ page }) => {
  await page.goto('http://localhost:3000/about');

  await expect(page).toHaveURL('http://localhost:3000/about');

  await expect(page.locator('h1')).toContainText('About us');
});