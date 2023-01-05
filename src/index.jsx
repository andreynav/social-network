import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App } from './components'
import { AppStylesProvider } from './hoc/AppStylesProvider'
import { AppThemeProvider } from './hoc/AppThemeProvider'
import { AppLocaleProvider } from './locales/i18n'
import { store } from './store/store'

const RootComponent = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<AppLocaleProvider>
					<AppStylesProvider>
						<AppThemeProvider>
							<BrowserRouter>
								<App />
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
root.render(<RootComponent />)
