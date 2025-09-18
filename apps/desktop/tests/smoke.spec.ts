import { test, expect } from '@playwright/test';

test('title & H1', async ({ page }) => {
  await page.goto('http://localhost:5175');
  await expect(page).toHaveTitle(/Draftify/i);
  await expect(page.getByTestId('app-title')).toHaveText(/Draftify/i);
});
