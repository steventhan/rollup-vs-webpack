import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

const OUTPUT_DIR = 'dist-rollup';
const INPUT_FILE = 'src/index.ts';
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: INPUT_FILE,
  output: {
    dir: OUTPUT_DIR,
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve({
      extensions: EXTENSIONS,
      resolveOnly: [/^\.{0,2}\//],
      browser: true,
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: ['node_modules/**'],
      extensions: EXTENSIONS,
    }),
  ],
  preserveModules: true,
};