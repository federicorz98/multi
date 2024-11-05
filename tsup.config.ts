import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/index.css'],
  external: [],
  format: ['esm', 'cjs'],
  esbuildPlugins: [],
  dts: 'src/index.ts',
});
