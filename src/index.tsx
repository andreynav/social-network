import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { AppContainer } from './components'
import { AppStylesProvider } from './hoc/AppStylesProvider'
import { AppThemeProvider } from './hoc/AppThemeProvider'
import { AppLocaleProvider } from './locales/i18n'
import { store } from './store/store'

const RootComponent = () => {
	return (
		<StrictMode>
			<Provider store={store}>
				<AppLocaleProvider>
					<AppStylesProvider>
						<AppThemeProvider>
							<BrowserRouter>
								<AppContainer />
							</BrowserRouter>
						</AppThemeProvider>
					</AppStylesProvider>
				</AppLocaleProvider>
			</Provider>
		</StrictMode>
	)
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as Element)
root.render(<RootComponent />)
