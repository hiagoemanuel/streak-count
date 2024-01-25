export interface IThemes {
  dark: IThemeColors
  light: IThemeColors
}

export interface IThemeColors {
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
  textColor: string
  errorColor: string
}

export interface IThemeContext {
  theme: IThemeColors
  setTheme(newTheme: IThemeColors): void
}
