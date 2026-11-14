// const { test } = require('@playwright/test');

// test('Inspect Zen Dashboard login page', async ({ page }) => {
//     page.on('console', msg => {
//     if (msg.type() === 'error') {
//         console.log('BROWSER ERROR:', msg.text());
//     }
// });

// page.on('pageerror', error => {
//     console.log('PAGE ERROR:', error.message);
// });

// page.on('requestfailed', request => {
//     console.log('REQUEST FAILED:', request.url(), request.failure()?.errorText);
// });
//     await page.goto('/', {
//         waitUntil: 'domcontentloaded',
//         timeout: 60000
//     });

//     await page.waitForTimeout(5000);

// await page.screenshot({
//     path: 'login-debug.png',
//     fullPage: true
// });

// console.log('FINAL URL:', page.url());
// console.log('FINAL BODY:', await page.locator('body').innerText());

// await page.getByText('Checking session...').waitFor({
//     state: 'hidden',
//     timeout: 30000
// }).catch(() => {});

//     console.log('Page URL:', page.url());
//     console.log('TEST EXECUTED SUCCESSFULLY');
//     console.log('Page Title:', await page.title());
//     console.log('BODY TEXT:', await page.locator('body').innerText());
// console.log('IFRAMES:', await page.locator('iframe').count());
// console.log('HTML:', (await page.locator('body').innerHTML()).slice(0, 2000));

//     const inputs = await page.locator('input').evaluateAll(elements =>
//         elements.map(input => ({
//             type: input.type,
//             placeholder: input.placeholder,
//             name: input.name
//         }))
//     );

//     const buttons = await page.getByRole('button').allTextContents();

//     console.log('INPUT FIELDS:', inputs);
//     console.log('BUTTONS:', buttons);
// });

const { test, expect } = require('@playwright/test');

test('Verify Zen Dashboard login page', async ({ page }) => {

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    await page.waitForTimeout(5000);

    await expect(
        page.getByPlaceholder('Enter your Email')
    ).toBeVisible();

    await expect(
        page.getByRole('button', { name: 'Continue' })
    ).toBeVisible();

    await expect(
        page.getByText("World's Coolest AI CRM")
    ).toBeVisible();
 

    console.log('EMAIL CONFIGURED:', !!process.env.LOGIN_EMAIL);

    await page.getByPlaceholder('Enter your Email').fill(process.env.LOGIN_EMAIL);

await page.getByRole('button', { name: 'Continue' }).click();

await page.getByText('Continue with Email').click();

await page.waitForTimeout(2000);

console.log('AFTER EMAIL OPTION:', await page.locator('body').innerText());

await page.waitForTimeout(3000);

console.log('AFTER CONTINUE:', await page.locator('body').innerText());

await expect(page).toHaveURL(/\/chatbot/);

await expect(page.getByText('Ask Serri Assistant')).toBeVisible();

console.log('LOGIN AND CHATBOT PAGE TEST PASSED');



});
