import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'


const theme = createTheme({
  palette: {
    secondary: {
      main: '#00bcd4',
      customBlue: "#2196f3"
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme = {theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
