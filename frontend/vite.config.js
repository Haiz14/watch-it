import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  base: "/",
  plugins: [react(), ssr({prerender: true})]
}
