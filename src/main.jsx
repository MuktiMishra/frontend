import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, ColorModeScript } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { BrowserRouter } from'react-router-dom'

const styles= {
  global: (props)=>({
    body:{
      color:mode('gray.800', 'whiteAlpha')(props),
      bg:mode('gray.800', '#101010')(props)
    }
  })
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const colors ={
  gray:{
    light:"616161",
    dark:"#1e1e1e"
  }
}

const theme= extendTheme({config , styles, colors});



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ChakraProvider>
    <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </React.StrictMode>
  </ChakraProvider>
  </BrowserRouter>
)
