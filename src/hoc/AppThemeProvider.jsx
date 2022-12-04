import React, {createContext, useEffect} from "react"
import {ThemeProvider} from 'styled-components'
import {dark, light} from "../styles/themes"
import {useLocalStorage} from "../hook/useLocalStorage";
import {setThemeAC} from "../store/appReducer";
import {useDispatch} from "react-redux";

export const ThemeContext = createContext()

export const AppThemeProvider = ({ children }) => {
    const dispatch = useDispatch()
    const [currentTheme, setCurrentTheme] = useLocalStorage('theme', 'light')
    const theme = currentTheme === "light" ? light : dark

    useEffect(() => {
        dispatch(setThemeAC({theme: theme}))
    }, [theme])

    return (
        <ThemeContext.Provider value={ {currentTheme, setCurrentTheme} }>
            <ThemeProvider theme={theme}>
                { children }
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}