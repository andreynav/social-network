import React, {createContext, useState} from "react"
import {ThemeProvider} from 'styled-components'
import {dark, light} from "../../styles/themes"

export const ThemeContext = createContext()

export const AppThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState("light") // initial value from local storage
    const theme = currentTheme === "light" ? light : dark

    return (
        <ThemeContext.Provider value={ {currentTheme, setCurrentTheme} }>
            <ThemeProvider theme={theme}>
                { children }
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}