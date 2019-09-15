// This is the main.js file. Import global CSS and scripts here.

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700'
  })
}
