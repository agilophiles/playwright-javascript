const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');
const fs = require('fs');

// Helper to attach Jira info if title contains an ID

// Passing test
test('Locators', async ({ page }, testInfo) => {
  await allure.epic('Login Tests');
  await allure.feature('User Authentication');
  await allure.story('Successful Login');
  await allure.severity('critical');
  
 await page.goto('https://www.demoblaze.com/');
  await page.click('#login2');
  await page.fill('#loginusername', 'arprakash');
  await page.fill('#loginpassword', 'prakash');
  await page.click("//button[normalize-space()='Log in']");
  await expect(page.locator("//a[normalize-space()='Log out']")).toBeVisible();
});

// Another passing test
test('Locators1', async ({ page }, testInfo) => {
  await allure.epic('Login Tests');
  await allure.feature('User Authentication'); 
  await allure.story('Successful Login - Duplicate');
  await allure.severity('normal');
  
  await page.goto('https://www.demoblaze.com/');
  await page.click('#login2');
  await page.fill('#loginusername', 'arprakash');
  await page.fill('#loginpassword', 'prakash');
  await page.click("//button[normalize-space()='Log in']");
  await expect(page.locator("//a[normalize-space()='Log out']")).toBeVisible();
});

// ❌ Failing test with JIRA ID
test('Locators2', async ({ page }, testInfo) => {
  await allure.epic('Login Tests');
  await allure.feature('User Authentication');
  await allure.story('Failed Login Attempt');
  await allure.severity('critical');
  await allure.tag('bug');
  
 await page.goto('https://www.demoblaze.com/');
  await page.click('#login2');
  await page.fill('#loginusername', 'wronguser');
  await page.fill('#loginpassword', 'wrongpass');
  await page.click("//button[normalize-space()='Log in']");

  // This will fail - and that's expected for testing
  await expect(page.locator("//a[normalize-space()='Log out']")).toBeVisible();
});