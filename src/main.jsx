import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ThemeProvider} from "styled-components"

import {Profile} from './pages/profile' // view para desenvolvimento

import theme from './styles/theme'
import GlobalStyles from "./styles/global"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyles/>
      <Profile/> 
    </ThemeProvider>
  </StrictMode>
)
