import React, {useContext, useState} from "react";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    selectLanguage,
    selectLanguageToggle,
    selectTheme,
    setLanguageAC,
    setLanguageToggle,
    setThemeAC,
} from "../../store/appReducer";
import {connect, useDispatch} from "react-redux";
import styled from "styled-components";
import {ThemeContext} from "../../hoc/AppThemeProvider";
import {Toggle} from "../common/Toggle/Toggle";
import {useTranslation} from "react-i18next";
import {LocaleContext} from "../../locales/i18n";
import {Radio} from "../index";

const Settings = (props) => {
    const dispatch = useDispatch()
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext)

    const onChangeTheme = (event) => {
        setCurrentTheme(event.target.value);
        dispatch(setThemeAC({theme: !props.theme}))
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
    }

    return (
        <SettingsWrapper>
            <ThemeWrapper onChange={onChangeTheme}>
                <h2>{t("settings.toggleTheme.title")}</h2>
                <Radio name="themeRadio"
                       value="light"
                       label={t("settings.toggleTheme.light")}
                       isChecked={currentTheme === "light"} />
                <Radio name="themeRadio"
                       value="dark"
                       label={t("settings.toggleTheme.dark")}
                       isChecked={currentTheme === "dark"} />
            </ThemeWrapper>
            <LanguageWrapper>
                <h2>{t("settings.toggleLanguage.title")}</h2>
                <Toggle labelLeft={t("settings.toggleLanguage.eng")}
                        labelRight={t("settings.toggleLanguage.rus")}
                        isChecked={isLanguageToggled}
                        onChange={onChangeLanguage}/>
            </LanguageWrapper>
        </SettingsWrapper>
    )
}

let mapStateToProps = (state) => ({
    theme: selectTheme(state),
    language: selectLanguage(state),
    languageToggle: selectLanguageToggle(state)
});

export default compose(
    connect(mapStateToProps, {
        setThemeAC, setLanguageAC, setLanguageToggle
    }),
    withAuthRedirect,
)(Settings)

const SettingsWrapper = styled.div`
  display: grid;
  align-content: start;
  grid-gap: 20px;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
`

const ThemeWrapper = styled.div`
  display: grid;
  grid-template-rows: 26px 36px 36px;
`

const LanguageWrapper = styled.div`
  display: grid;
  
  & div:nth-child(2) {
    justify-content: center;
  }
`