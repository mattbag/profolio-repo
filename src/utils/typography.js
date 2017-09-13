import Typography from 'typography'
import 'typeface-lobster'
// import Wordpress2016 from 'typography-theme-wordpress-2016'

// const typography = new Typography(Wordpress2016)
const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Lobster', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['courier', 'sans-serif'],

})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
