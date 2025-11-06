import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: '../../coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.stories.tsx',
        '**/*.spec.tsx',
        '**/*.spec.ts',
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.config.ts',
        '**/index.ts',
        'src/main.tsx',
        'src/App.tsx',
        'dist/',
        // Exclude MUI re-export wrappers (no custom logic to test)
        'src/inputs/**/*.tsx',
      ],
    },
  },
});
