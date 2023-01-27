import i18n from 'i18next'
import { createContext, useEffect } from 'react'
import { initReactI18next, useTranslation } from 'react-i18next'

import { AppStylesProvider } from '../hoc/AppStylesProvider'
import { useAppDispatch } from '../hook/hooks'
import { useLocalStorage } from '../hook/useLocalStorage'
import { appActions } from '../store/appReducer'
import translationEN from './en/translation.json'
import translationRU from './ru/translation.json'

const resources = {
	en: { translation: translationEN },
	ru: { translation: translationRU }
}

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	lng: 'en',
	debug: false,
	interpolation: {
		escapeValue: false
	},
	resources
})

type LocaleContextT = {
	language: 'English' | 'Russian'
	setLanguage: (e: string) => void
}

type ChildrenT = { children: ReturnType<typeof AppStylesProvider> }

export const LocaleContext = createContext({} as LocaleContextT)

export const AppLocaleProvider = ({ children }: ChildrenT) => {
	const dispatch = useAppDispatch()
	const [language, setLanguage] = useLocalStorage('lang', 'en')
	const { i18n } = useTranslation()

	useEffect(() => {
		dispatch(appActions.setLanguageAC({ language: language }))
		i18n.changeLanguage(language)
	}, [language, dispatch, i18n])

	return (
		<LocaleContext.Provider value={{ language, setLanguage }}>
			{children}
		</LocaleContext.Provider>
	)
}
