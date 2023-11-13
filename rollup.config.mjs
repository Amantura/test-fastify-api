import { defineConfig } from 'rollup'
import run from '@rollup/plugin-run'
import alias from '@rollup/plugin-alias'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import resolve from '@rollup/plugin-node-resolve'
import dotenv from 'rollup-plugin-dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  input: './index.js',
  output: {
    file: 'output/index.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    run({
      execArgv: ['-r', 'source-map-support/register'],
    }),
    alias({
      entries: [
        { find: '@', replacement: join(__dirname, 'src') },
        { find: '~', replacement: join(__dirname, 'src/db') },
      ]
    }),
    resolve(),
    dotenv()
  ],

  external: [
    'fastify',
    'fastify-plugin',
    'pino-pretty'
  ]
})