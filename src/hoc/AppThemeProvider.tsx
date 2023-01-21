import React, { createContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { useAppDispatch } from '../hook/hooks'
import { useLocalStorage } from '../hook/useLocalStorage'
import { setThemeAC } from '../store/appReducer'
import { dark, light } from '../styles/themes'

type ThemeContextT = {
	currentTheme: 'light' | 'dark'
	setCurrentTheme: (e: string) => void
}

export const ThemeContext = createContext({} as ThemeContextT)

export const AppThemeProvider = ({
	children
}: {
	children: ReturnType<typeof BrowserRouter>
}) => {
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
