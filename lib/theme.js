import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#fcfaf7', '#1d1f26')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#FFA500')(props),      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body:`'Noto Sans KR', sans-serif`
}

const colors = {
  grassTeal: '#eeeeee',
  pink:'#FC8181'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}
const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
