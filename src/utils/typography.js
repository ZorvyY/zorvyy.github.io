import Typography from 'typography'


const theme = {
  baseFontSize: '21px',
  baseLineHeight: 1.6,
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  overrideStyles: () => ({
    h1: {
      textTransform: 'uppercase',
    },
    h2: {
      textTransform: 'uppercase',
    },
    h3: {
      textTransform: 'uppercase',
    },
    h4: {
      textTransform: 'uppercase',
    },
    a: {
      color: 'inherit',
    }

  })
}

const typography = new Typography(theme)
export default typography
export const rhythm = typography.rhythm
