import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,   // có thể đổi thành 3000 hay 3001
    open: true    // tự mở trình duyệt khi chạy npm run dev
  }
})
