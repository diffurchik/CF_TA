import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',
  reporter: [
    ['allure-playwright'],
    ['html', { open: 'always' }],
    ['list'],
      ['line']
  ],
  use: {
    trace: 'on-first-retry',
  },
});
