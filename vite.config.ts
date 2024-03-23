import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    // base: loadEnv('', process.cwd()).VITE_REACT_APP_BASE_URL,
    plugins: [react()],
    resolve: { alias: { '@': '/src' } },
    build: {
        outDir: 'build',
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 8080,
    },
    preview: {
        port: 8080,
    },
});
