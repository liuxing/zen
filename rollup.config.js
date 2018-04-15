import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import pkg from './package.json'

const version = pkg.version

const banner =
`/*!
* Zen.js ${version}
* (c) 2018 Liu Xing
* Released under the MIT License.
*/`

export default [
  {
    input: './index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        banner
      },
      {
        file: pkg.module,
        format: 'es',
        banner
      }
    ],
    plugins: [
      replace({
        __VERSION__: version
      }),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }, {
    input: './index.js',
    output: {
      name: 'zen',
      file: pkg.browser,
      format: 'umd',
      banner
    },
    plugins: [
      replace({
        __VERSION__: version
      }),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }, {
    input: './index.js',
    output: {
      name: 'zen',
      file: './dist/zen.min.js',
      format: 'umd'
    },
    plugins: [
      replace({
        __VERSION__: version
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      uglify({
        output: {
          preamble: banner
        }
      })
    ]
  }]
