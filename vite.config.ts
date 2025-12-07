import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Sets the base path for deployment. 
  // If your repo is https://github.com/user/repo, this should be '/repo/'
  // Using './' makes it relative, which works for most standard deployments.
  base: './', 
  server: {
    port: 3000
  }
});