import React, {createContext, useState} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {App} from "../src/components/index";
import store from './store/store'
import {Provider} from 'react-redux'
import {GlobalStyles} from "../src/components/index";
import {ThemeProvider} from 'styled-components'
import {light, dark} from "./styles/themes";

export const ThemeContext = createContext();

const RootComponent = () => {
    const [currentTheme, setCurrentTheme] = useState("light")
    const theme = currentTheme === "light" ? light : dark

    return (
        // <React.StrictMode>
        <Provider store={store}>
            <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
            </ThemeContext.Provider>
        </Provider>
        // </React.StrictMode>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<RootComponent/>)