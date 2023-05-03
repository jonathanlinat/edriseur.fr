import { defineConfig } from 'vite';
import VitePluginInjectPreload from 'vite-plugin-inject-preload';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [
    VitePluginInjectPreload({
      files: [
        {
          match: /assets\/index-[a-z-0-9]*\.css$/,
        }
      ]
    }),
    ViteMinifyPlugin({}),
  ]
});
