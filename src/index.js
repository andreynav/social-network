import React from "react";
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import store from "./store/store"
import {AppLocaleProvider} from "./locales/i18n";
import {AppThemeProvider} from "./components/hoc/AppThemeProvider"
import {AppStylesProvider} from "./components/hoc/AppStylesProvider"
import {BrowserRouter} from "react-router-dom"
import {App} from "../src/components/index"

const RootComponent = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppLocaleProvider>
                    <AppStylesProvider>
                        <AppThemeProvider>
                            <BrowserRouter>
                                <App/>
                            </BrowserRouter>
                        </AppThemeProvider>
                    </AppStylesProvider>
                </AppLocaleProvider>
            </Provider>
        </React.StrictMode>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<RootComponent/>)