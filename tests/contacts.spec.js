const { test, expect } = require('@playwright/test');

test('Inspect Contacts module', async ({ page }) => {

test.setTimeout(60000);

// Login
await page.goto('/');

await page.getByPlaceholder('Enter your Email')
    .fill(process.env.LOGIN_EMAIL);

await page.getByRole('button', { name: 'Continue' }).click();

await page.getByRole('button', { name: 'Continue with Email' })
    .waitFor({ state: 'visible', timeout: 20000 });

await page.getByRole('button', { name: 'Continue with Email' }).click();

await expect(page).toHaveURL(/\/chatbot/, { timeout: 20000 });

// Open Contacts
await page.goto('/people/contacts');

const searchBox = page.getByPlaceholder(
    'Search by name, phone or email'
);

await expect(searchBox).toBeVisible({ timeout: 15000 });

console.log('CONTACTS PAGE OPENED');

// Search existing contact from the visible list
await searchBox.fill('Shivam_Aud_MWFXAXTEIL');

await searchBox.press('Enter');

await expect(page.locator('body'))
    .toContainText('Shivam_Aud_MWFXAXTEIL', { timeout: 15000 });

console.log('CONTACT SEARCH PASSED');

});