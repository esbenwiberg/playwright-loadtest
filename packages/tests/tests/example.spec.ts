import { test, expect } from '@playwright/test';
import { getStarted, hasTitle } from './example';

test('has title', async ({ page }) => {
  await hasTitle(page);
});

test('get started link', async ({ page }) => {
  await getStarted(page);
});
