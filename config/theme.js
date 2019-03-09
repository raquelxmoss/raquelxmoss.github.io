import { darken, lighten } from 'polished'
import { fonts } from '../src/lib/typography'
// #C9A2D2 parentbg
//#404E88 text,etc
//#EBF4FA secondary bg
//#0C2231 border
//
const brand = {
  primary: '#EBF4FA',
  secondary: '#EBF4FA',
}

const colors = {
  primary_light: `#EBF4FA`,
  gray: '#D3D3D3',
  black: '#000',
  white: '#fff',
  bg_color: '#C9A2D2',
  body_color: '#404E88',
  link_color: '#BF223C',
  link_color_hover: `${lighten(0.2, '#BF223C')}`,
  red: '#E86C60',
  green: '#29B573',
}

const theme = {
  colors,
  fonts,
  brand,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
  transition: {
    ease: 'all 200ms ease',
  },
}

export default theme
