import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "styled-reset"

const themeLight = {
  fontFamily: {
    sans: "Nunito sans, sans-serif",
    serif: "Arvo, sans",
    monospace: '"Ubuntu Mono", monospace',
  },
  fontSize: {
    s: "14px",
    m: "16px",
    l: "20px",
  },
  fontWeight: {
    thin: 300,
    thick: 600,
    bold: 800,
  },
  colors: {
    inputText: "hsl(0, 0%, 52%)",
    bg: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
    elementsBg: "hsl(0, 0%, 100%)",
    shadow: "rgba(0,0,0,0.05)",
  },
}

const themeDark = {
  fontFamily: {
    sans: "Nunito sans, sans-serif",
    serif: "Arvo, sans",
    monospace: '"Ubuntu Mono", monospace',
  },
  fontSize: {
    s: "14px",
    m: "16px",
    l: "20px",
  },
  fontWeight: {
    thin: 300,
    thick: 600,
    bold: 800,
  },
  colors: {
    elementsBg: "hsl(209, 23%, 22%)",
    bg: "hsl(207, 26%, 17%)",
    text: "hsl(0, 0%, 100%)",
    shadow: "rgba(0,0,0,0.05)",
  },
}

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *:before, *:after {
      box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
  }

  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${({ theme }) => theme.colors.bg};
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={themeDark}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Layout
