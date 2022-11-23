import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {I18nextProvider, initReactI18next} from 'react-i18next'
import translationEN from './en/translation.json'
import translationRU from './ru/translation.json'
import React from 'react'

const resources = {
    en: { translation: translationEN },
    ru: { translation: translationRU }
}

i18n
    .use(LanguageDetector)
    .use (initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: "en",
        debug: true,
        detection: {
            order: ['queryString', 'cookie', 'localStorage'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        },
        resources
    })

export default i18n;

export const AppLocaleProvider = ({children}) => {
    return (
        <I18nextProvider i18n={i18n}>
           { children }
        </I18nextProvider>
    )
}


