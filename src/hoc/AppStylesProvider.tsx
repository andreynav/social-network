import React from 'react'

import { GlobalStyles } from '../styles/GlobalStyles'
import { AppThemeProvider } from './AppThemeProvider'

export const AppStylesProvider = ({
	children
}: {
	children: ReturnType<typeof AppThemeProvider>
}) => {
	return (
		<>
			<GlobalStyles />
			{children}
		</>
	)
}
