import { test, expect } from '@playwright/test';

test('Handle Help page in new tab', async ({ browser }) => {
  // Create a new context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 1: Navigate to redbus.in
  await page.goto('https://www.redbus.in/');

  // Step 2: Click on Help (opens new tab)
  const [helpPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for the new tab
    page.click("//div[normalize-space()='Help']") // Click Help link
  ]);

  // Step 3: Wait for the new page to load
  await helpPage.waitForLoadState();

  // Step 4: Assertion in Help page
  await expect(helpPage.locator("//div[normalize-space()='redBus Help']")).toHaveText("redBus Help");

  // Step 5: Close Help page
  await helpPage.close();

  // Step 6: Back to main page
  await expect(page.locator("[data-autoid='headerText']")).toHaveText("India's No. 1 online bus ticket booking site");
 // Example assertion on main page

  // Close context
  await context.close();
});
