// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'


const colors = {
  brand: {
    500: '#FFBA08',
    300: 'rgba(255, 186, 8, 0.5)'
  },
  dark: {
    black: '#000000',
    font: '#47585B',
    info: '#999999',
    info50: 'rgba(153, 153, 153, 0.5)',
  },
  light: {
    white: '##FFFFFF',
    font: '#F5F8FA',
    info: '#DADADA'
  },
  header: '#D9D9D9'
}

const fonts = {
  heading: 'Poppins',
  body: 'Poppins',
}

const styles = {
  global: {
    focus: {
      outline: 'none',
    },
    body: {
      bg: 'light.font',
      color: 'dark.font',
    },
  },
}

export const theme = extendTheme({ colors, styles, fonts })