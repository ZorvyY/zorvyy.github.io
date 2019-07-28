import Typography from 'typography'


const theme = {
  baseFontSize: '24px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Lato', 'serif'],
}

const typography = new Typography(theme)
export default typography
export const rhythm = typography.rhythm
