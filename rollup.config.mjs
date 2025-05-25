import { defineConfig } from 'rollup'
import nodeExternals from 'rollup-plugin-node-externals'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import dotenv from 'dotenv'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

// Load environment variables
dotenv.config();

export default defineConfig({
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: false,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: false,
        },
    ],
    plugins: [
        nodeExternals(),
        json(),
        resolve({
            preferBuiltins: true,
            browser: true,
        }),
        typescript({
            clean: true,
        }),
        babel({
            presets: ["@babel/preset-react"],
            babelHelpers: "bundled",
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
        commonjs(),
        terser(),
    ],
})