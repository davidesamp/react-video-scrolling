import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import url from '@rollup/plugin-url'
import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import dotenv from 'dotenv'


// import .env variables
dotenv.config({ path: './.env' })


export default {
    input: 'example/example.tsx',
    output: [
        {
            file: 'example/dist/bundle.js',
            format: 'iife',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        url(),
        json(),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env': JSON.stringify({}),
        }),
        resolve({
            preferBuiltins: true,
            browser: true,
        }),
        postcss({
            modules: true,
            use: [
                [
                    'sass', {
                        includePaths: [
                            './node_modules',
                        ],
                    },
                ],
            ],
          }),
        typescript({
            clean: true,
        }),
        commonjs({}),
        babel({
            presets: ["@babel/preset-react"],
            babelHelpers: "bundled",
        }),
        serve({
            open: true,
            port: 8181,
            contentBase: ['example', 'dist'],
        }),
        livereload({
            watch: ['dist', 'example'],
        }),
    ],
}
