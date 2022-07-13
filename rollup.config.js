import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: [{ dir: 'public', format: 'es' }],
  plugins: [
    resolve(), // tells Rollup how to find node_modules
    postcss({ // allows us to import the global calcite css
      extensions: ['.css']
    }),
    production && terser() // minify, but only in production
  ]
};
