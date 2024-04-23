/*
 * @Descripttion: 
 * @version: 
 * @Author: Gou xuefei
 * @Email: 
 * @Date: 2024-04-18 15:57:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2024-04-22 17:18:49
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { alias } from "../../scripts";

export default defineConfig(async ({ command, mode }) => {
  return {
    server: {
      port: '3933'
    },
    plugins: [react()],
    build: {
      outDir: 'lib',
      rollupOptions: {
        external: ['react', 'react-dom', 'ant-design']
      },
      lib: {
        entry: path.resolve(__dirname, './components/index.ts'),
        name: 'Rui',
        fileName: 'rui-ant-design',
        formats: ['es', 'cjs', 'umd', 'iife']
      }
    },
    resolve: {
      alias: await alias()
    }
  }
})
