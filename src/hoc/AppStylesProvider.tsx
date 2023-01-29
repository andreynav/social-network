import { GlobalStyles } from 'styles/GlobalStyles'

import { AppThemeProvider } from './AppThemeProvider'

type ChildrenT = { children: ReturnType<typeof AppThemeProvider> }

export const AppStylesProvider = ({ children }: ChildrenT) => {
	return (
		<>
			<GlobalStyles />
			{children}
		</>
	)
}
