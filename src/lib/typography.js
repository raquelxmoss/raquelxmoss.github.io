import Typography from 'typography'
import '../fonts/fonts.css'

// font-family: 'Playfair Display', serif;
export const fonts = {
  regular: 'Inter UI Regular',
  regularItalic: 'Inter UI Regular Italic',
  bold: 'Playfair Display',
  boldItalic: 'Playfair Display',
}

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.bold, 'serif'],
  bodyFontFamily: [fonts.regular, 'sans-serif'],
  headerColor: '#404E88',
  bodyColor: '#404E88',

  overrideStyles: ({ rhythm }) => ({
    h1: {
      color: '#404E88',
    },
    h2: {
      color: '#404E88',
    },
    h3: {
      color: '#404E88'
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
    },
  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
