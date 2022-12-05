import i18n from 'i18next'
import {initReactI18next, useTranslation} from 'react-i18next'
import translationEN from './en/translation.json'
import translationRU from './ru/translation.json'
import React, {createContext, useEffect} from "react"
import {useLocalStorage} from "../hook/useLocalStorage"
import {useDispatch} from "react-redux";
import {setLanguageAC} from "../store/appReducer"

const resources = {
    en: {translation: translationEN},
    ru: {translation: translationRU}
}

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: "en",
        debug: false,
        interpolation: {
            escapeValue: false
        },
        resources
    })

export const LocaleContext = createContext()

export const AppLocaleProvider = ({children}) => {
    const dispatch = useDispatch()
    const [language, setLanguage] = useLocalStorage('lang', 'en')
    const {i18n} = useTranslation();

    useEffect(() => {
        dispatch(setLanguageAC({language: language}))
        i18n.changeLanguage(language);
    }, [language])

    return (
        <LocaleContext.Provider value={{language, setLanguage}}>
            { children }
        </LocaleContext.Provider>
    )
}


