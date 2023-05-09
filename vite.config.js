import { defineConfig } from 'vite';
import VitePluginInjectPreload from 'vite-plugin-inject-preload';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

import { version as appVersion } from './package.json';

export default defineConfig({
  root: 'src/',
  publicDir: '../public/',
  build: {
    emptyOutDir: true,
    outDir: '../dist/',
  },
  define: {
    'import.meta.env.APP_VERSION': appVersion,
  },
  plugins: [
    VitePluginInjectPreload({
      files: [
        {
          match: /assets\/index-[a-z-0-9]*\.css$/,
        }
      ],
    }),
    ViteMinifyPlugin({}),
  ]
});
