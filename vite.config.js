import { defineConfig } from 'vite';
import UnpluginInjectPreload from 'unplugin-inject-preload/vite'
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
    UnpluginInjectPreload({
      files: [
        {
          entryMatch: /assets\/index-[a-z-0-9]*\.css$/,
        }
      ],
    }),
    ViteMinifyPlugin({}),
  ]
});
