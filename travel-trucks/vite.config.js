import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import process from 'process';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const isGitHubPages = env.VITE_DEPLOY_TARGET === 'github';

  return {
    plugins: [
      react(),
      svgr({
        exportAsDefault: true,
      }),
    ],
    base: isGitHubPages ? '/test-task-reactjs/' : '/',
    resolve: {
      alias: {
        '~': path.resolve(process.cwd(), 'src'),
      },
    },
  };
});
