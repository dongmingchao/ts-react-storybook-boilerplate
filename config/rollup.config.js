import typescript from 'rollup-plugin-typescript2';
// import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import rollup_postcss from 'rollup-plugin-postcss';
import postcssSplit from 'postcss-split-module';

export default {
  input: 'src/index.ts',
  output: {
    file: 'build/index.js',
    format: 'es',
    exports: 'named',
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [
    rollup_postcss({
      plugins: [
        postcssSplit(),
      ],
      modules: true,
      extract: 'build/style.css',
    }),
    typescript(),
    resolve(),
    // commonjs(),
  ],
};
