import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  base: "/watch-it",
  plugins: [react(), ssr({prerender: true})]
}
