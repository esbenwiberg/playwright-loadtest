import { Page, expect } from '@playwright/test';

export async function hasTitle (page: Page) {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
}

export async function getStarted (page: Page) {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
    
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
}