/*
 * @Descripttion: 
 * @version: 
 * @Author: Gou xuefei
 * @Email: 
 * @Date: 2024-04-18 17:12:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2024-04-23 13:44:22
 */
import { defineConfig } from 'vitepress'
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import footer from './configs/footer'
// import { mdPlugin } from './configs/plugins'

const base = '/'

export default defineConfig({
  title: 'rui-design',
  description: '',
  appearance: false,
  base,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/rui-design-icon.svg'
      }
    ]
  ],
  themeConfig: {
    logo: '/images/rui-design-icon.svg',
    nav,
    sidebar,
    footer
  }
})
