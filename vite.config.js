import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build',
        emptyOutDir: true,
    },
    optimizeDeps: {
        exclude: [
            '@chakra-ui',
            '@emotion/react',
            '@emotion/styled',
            'framer-motion',
        ],
    },
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        port: 8080,
    },
})
