import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

export default defineConfig({
  plugins: [react()],
define:{
  'process.env.STRIPE_SECRET_KEY':JSON.stringify(process.env.STRIPE_SECRET_KEY)
}
})
