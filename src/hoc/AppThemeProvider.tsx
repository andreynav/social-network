import { useAppDispatch } from 'hook/hooks'
import { useLocalStorage } from 'hook/useLocalStorage'
import { createContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { appActions } from 'store/appReducer'
import { ThemeProvider } from 'styled-components'
import { dark, light } from 'styles/themes'

type ThemeContextT = {
  currentTheme: 'light' | 'dark'
  setCurrentTheme: (e: string) => void
}

type ChildrenT = { children: ReturnType<typeof BrowserRouter> }

export const ThemeContext = createContext({} as ThemeContextT)

export const AppThemeProvider = ({ children }: ChildrenT) => {
  const dispatch = useAppDispatch()
  const [currentTheme, setCurrentTheme] = useLocalStorage('theme', 'light')
  const theme = currentTheme === 'light' ? light : dark

  useEffect(() => {
    dispatch(appActions.setThemeAC({ theme: theme }))
  }, [theme, dispatch])

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
