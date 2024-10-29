import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ThemeProvider} from "styled-components"

import {Details} from './pages/details'

import theme from './styles/theme'
import GlobalStyles from "./styles/global"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyles/>
      <Details/>
    </ThemeProvider>
  </StrictMode>
)
