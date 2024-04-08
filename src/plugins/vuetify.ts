import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'
// import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify,type ThemeDefinition } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
const theme: ThemeDefinition = {
  dark: false,
  colors: {
    background: colors.shades.white,
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: colors.blue.lighten1,
    'primary-darken-1': colors.blue.darken1,
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: colors.red.lighten1,
    info: colors.grey.lighten1,
    success: colors.green.lighten1,
    warning: colors.amber.lighten1,
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'theme',
    themes: {
      theme
    }
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi
    }, 
  },
})
