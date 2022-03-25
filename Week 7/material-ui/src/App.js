import { createTheme, ThemeProvider, colors } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider } from '@mui/lab'
import './App.css'
// import { MuiTable } from './components/MuiTable'
import { MuiCustomTheme } from './components/MuiCustomTheme'

import { MuiTypography } from './components/MuiTypography'
import { MuiButton } from './components/MuiButton'
import { MuiAccordion } from './components/MuiAccordion'
import { MuiNavbar } from './components/MuiNavbar'
import { MuiAlert } from './components/MuiAlert'

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='App'>
          <MuiTypography />
          <MuiButton />
          <MuiAccordion />
          <MuiNavbar />
          <MuiAlert />
          <MuiCustomTheme />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App