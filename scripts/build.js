import * as esbuild from 'esbuild'
import { sync } from 'glob';
import { basename, join } from 'node:path';
import inlineImage from "esbuild-plugin-inline-image";

const files = sync('./presentation/*.js');
const entryPoints = files.map((file) => {
    return { out: join('presentation', basename(file, '.js'), 'index'), in: file };
});

await esbuild.build({
  entryPoints,
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['es2020'],
  plugins: [inlineImage()],
  loader: { '.example': 'text', '.js': 'jsx' },
  format: 'esm',
  outdir: 'dist',
});