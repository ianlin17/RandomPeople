import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from "vite-plugin-pug"
const options = { pretty: true }
const locals = { name: "My Pug" }
export default defineConfig({
  plugins: [vue(),pugPlugin(options, locals)],
})