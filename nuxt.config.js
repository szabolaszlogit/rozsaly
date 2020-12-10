
import colors from 'vuetify/es5/util/colors'
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
 
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Rozsály',
    title: 'Rozsály',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/filters.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#2196f3',
          secondary: '#009688',
          accent: '#3f51b5',
          error: '#8bc34a',
          warning: '#ff5722',
          info: '#795548',
          success:'#4caf50'
          },
        dark: {
          primary: '#03a9f4',
          secondary: '#009688',
          accent: '#00bcd4',
          error: '#f44336',
          warning: '#cddc39',
          info: '#2196f3',
          success: '#4caf50'
        }
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
