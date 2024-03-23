import { defineConfig, mergeConfig, defaultExclude, coverageConfigDefaults } from 'vitest/config';
import viteConfig from './vite.config';

//SOURCE: https://vitest.dev/config/
export default mergeConfig(
    viteConfig,
    defineConfig({
        optimizeDeps: {
            exclude: ['react-ga.js'],
        },
        test: {
            include: ['src/**/*.test.{ts,tsx}'],
            exclude: [
                ...defaultExclude,
                'src/assets/**',
                'src/configs/**',
                'src/context/**',
                'src/services/**',
                'src/test-utils/**',
                'src/utils/**',
            ],
            globals: true,
            environment: 'jsdom',
            silent: true,
            coverage: {
                enabled: false,
                include: ['src/**/*.{ts,tsx}'],
                exclude: [
                    ...coverageConfigDefaults.exclude,
                    'src/assets/**',
                    'src/configs/**',
                    'src/context/**',
                    'src/services/**',
                    'src/test-utils/**',
                    'src/utils/**',
                ],
                reporter: ['text', 'lcov'],
            },
            setupFiles: './vitest.setup.ts',
        },
    })
);
