import React, { createContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { useAppDispatch } from '../hook/hooks'
import { useLocalStorage } from '../hook/useLocalStorage'
import { setThemeAC } from '../store/appReducer'
import { dark, light } from '../styles/themes'

export const ThemeContext = createContext()

export const AppThemeProvider = ({ children }) => {
	const dispatch = useAppDispatch()
	const [currentTheme, setCurrentTheme] = useLocalStorage('theme', 'light')
	const theme = currentTheme === 'light' ? light : dark

	useEffect(() => {
		dispatch(setThemeAC({ theme: theme }))
	}, [theme, dispatch])

	return (
		<ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	)
}
