import React, { createContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { useLocalStorage } from '../hook/useLocalStorage'
import { setThemeAC } from '../store/appReducer'
import { dark, light } from '../styles/themes'

export const ThemeContext = createContext()

export const AppThemeProvider = ({ children }) => {
	const dispatch = useDispatch()
	const [currentTheme, setCurrentTheme] = useLocalStorage('theme', 'light')
	const theme = currentTheme === 'light' ? light : dark

	useEffect(() => {
		dispatch(setThemeAC({ theme: theme }))
	}, [theme])

	return (
		<ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	)
}
