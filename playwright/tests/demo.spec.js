import {test,expect}from'@playwright/test';
test('launch url',async ({page}) => {
   await page.goto('https://www.facebook.com/');
}) 