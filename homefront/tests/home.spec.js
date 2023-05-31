const { test, expect } = require("playwright-test-coverage");
 
test('check homepage', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.locator('h1')).toContainText('HomePage');
});