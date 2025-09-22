test('GPS Tracking system simulation', async ({ browser }) => {
  const context = await browser.newContext({
    geolocation: { longitude: -122.4194, latitude: 37.7749 }, // San Francisco
    permissions: ['geolocation']
  });
  const page = await context.newPage();

  await page.goto('https://your-gps-tracking-app.com');

  // Step 1: Assert initial location
  await expect(page.locator('#current-location')).toHaveText('San Francisco');

  // Step 2: Simulate movement
  await context.setGeolocation({ longitude: -118.2437, latitude: 34.0522 }); // Los Angeles
  await page.click('#update-tracking');

  // Step 3: Assert updated location
  await expect(page.locator('#current-location')).toHaveText('Los Angeles');
});

/*
2. Change location dynamically (simulate movement 🚗)

You can update geolocation mid-test to simulate tracking a moving device:

await context.setGeolocation({ longitude: 77.5946, latitude: 12.9716 }); // Bangalore
await page.click('#refresh-location');

// Move to Chennai
await context.setGeolocation({ longitude: 80.2707, latitude: 13.0827 }); // Chennai
await page.click('#refresh-location');
*/

/*
import { test, expect } from '@playwright/test';

test('GPS Tracking - mock location', async ({ browser }) => {
  // Create a context with location and permission
  const context = await browser.newContext({
    geolocation: { longitude: 77.5946, latitude: 12.9716 }, // Example: Bangalore
    permissions: ['geolocation']
  });

  const page = await context.newPage();

  // Navigate to your GPS tracking system app
  await page.goto('https://your-gps-app.com');

  // Now your app thinks the user is in Bangalore
  await page.click('#get-location'); // Example: button that fetches GPS
  await expect(page.locator('#location-text')).toContainText('Bangalore');

  await context.close();
});
*/