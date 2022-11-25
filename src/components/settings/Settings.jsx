import React, {useContext, useState} from "react";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {
    selectLanguage,
    selectLanguageToggle,
    selectTheme,
    selectThemeToggle,
    setLanguageAC,
    setLanguageToggle,
    setThemeAC,
    setThemeToggle
} from "../../store/appReducer";
import {connect, useDispatch} from "react-redux";
import styled from "styled-components";
import {ThemeContext} from "../hoc/AppThemeProvider";
import {Toggle} from "../common/Toggle/Toggle";
import {useTranslation} from "react-i18next";
import {LocaleContext} from "../../locales/i18n";

const Settings = (props) => {
    const dispatch = useDispatch()
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext)
    const [isToggled, setIsToggled] = useState(props.themeToggle || false)

    const onChangeTheme = () => {
        currentTheme === "light"
            ? (setCurrentTheme("dark") && setIsToggled(true))
            : (setCurrentTheme("light") && setIsToggled(false))

        dispatch(setThemeAC({theme: !props.theme}))
        dispatch(setThemeToggle({themeToggle: !props.themeToggle}))
    }

    const {language, setLanguage} = useContext(LocaleContext)
    const [isLanguageToggled, setLanguageToggled] = useState(props.languageToggle || false)

    const {t, i18n} = useTranslation()

    const onChangeLanguage = () => {
        language === "en"
            ? (setLanguage("ru") && setLanguageToggled(true))
            : (setLanguage("en") && setLanguageToggled(false))

        i18n.changeLanguage(language);

        dispatch(language === 'en' ? setLanguageAC({language: 'ru'}) : setLanguageAC({language: 'en'}))
        dispatch(setLanguageToggle({languageToggle: !props.languageToggle}))
    };

    return (
        <SettingsWrapper>
            <Toggle labelLeft={t("settings.toggleTheme.light")}
                    labelRight={t("settings.toggleTheme.dark")}
                    isChecked={isToggled}
                    onChange={onChangeTheme}/>
            <Toggle labelLeft={t("settings.toggleLanguage.eng")}
                    labelRight={t("settings.toggleLanguage.rus")}
                    isChecked={isLanguageToggled}
                    onChange={onChangeLanguage}/>
        </SettingsWrapper>
    )
}

let mapStateToProps = (state) => ({
    theme: selectTheme(state),
    themeToggle: selectThemeToggle(state),
    language: selectLanguage(state),
    languageToggle: selectLanguageToggle(state)
});

export default compose(
    connect(mapStateToProps, {
        setThemeAC, setThemeToggle, setLanguageAC, setLanguageToggle
    }),
    withAuthRedirect,
)(Settings)

const SettingsWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: start;
  grid-gap: 20px;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
`
