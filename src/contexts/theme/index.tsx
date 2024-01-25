'use client'

import React, { createContext, useState } from 'react'
import { type IThemeContext, type IThemes } from './types'
import { Variables } from '@/styles/variables'

export const themes: IThemes = {
  dark: {
    primaryColor: '#1E1E1E',
    secondaryColor: '#151515',
    tertiaryColor: '#FC6011',
    textColor: '#FFFFFF',
    errorColor: '#FF4141'
  },
  light: {
    primaryColor: '#F3F3F3',
    secondaryColor: '#C2C2C2',
    tertiaryColor: '#FC6011',
    textColor: '#1E1E1E',
    errorColor: '#FF4141'
  }
}

export const ThemeContext = createContext<IThemeContext>({
  theme: themes.dark,
  setTheme(newTheme) {}
})

export default function ThemeProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState(themes.dark)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Variables $theme={theme} />
      {children}
    </ThemeContext.Provider>
  )
}
