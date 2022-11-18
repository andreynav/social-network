import React from "react";
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import store from "./store/store"
import {AppThemeProvider} from "./components/hoc/AppThemeProvider"
import {GlobalStyles} from "../src/components/index"
import {BrowserRouter} from "react-router-dom"
import {App} from "../src/components/index"

const RootComponent = () => {

    return (
        // <React.StrictMode>
        <Provider store={store}>
            <AppThemeProvider>
                <GlobalStyles/>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AppThemeProvider>
        </Provider>
        // </React.StrictMode>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<RootComponent/>)