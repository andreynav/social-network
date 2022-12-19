import React, {ChangeEvent, useContext} from "react"
import {compose} from "@reduxjs/toolkit"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {useTranslation} from "react-i18next"
import {ThemeContext} from "../../hoc/AppThemeProvider"
import {LocaleContext} from "../../locales/i18n"
import styled from "styled-components"
import {Toggle} from "../common/Toggle/Toggle"
import {Radio, Select} from "../index"

const Settings = () => {
    const {t} = useTranslation()
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext)
    const {language, setLanguage} = useContext(LocaleContext)

    const onChangeTheme = (event: ChangeEvent<HTMLInputElement>): void => {
        setCurrentTheme(event.target.value)
    }

    const onChangeLanguage = (event: ChangeEvent<HTMLInputElement>): void => {
        setLanguage(event.target.value)
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
                <Select value={language}
                        onChange={onChangeLanguage}
                        options={[{"value": "en", "name": "English"}, {"value": "ru", "name": "Russian"}]} />
            </LanguageWrapper>
            <ShowNotifications>
                <h2>{t("settings.general.title")}</h2>
                {/* @ts-ignore */}
                <Toggle labelRight={t("settings.general.notifications")} /> {/*will be implemented further*/}
            </ShowNotifications>
        </SettingsWrapper>
    )
}

export default compose(withAuthRedirect)(Settings)

const SettingsWrapper = styled.div`
  display: grid;
  align-content: start;
  grid-gap: 20px;
  background-color: ${props => props.theme.bgColorSecondary};
`

const ThemeWrapper = styled.div`
  display: grid;
  grid-template-rows: 26px 36px 36px;
`

const LanguageWrapper = styled.div`
  display: grid;
  grid-template-rows: 32px 36px;
`

const ShowNotifications = styled.div`
  display: grid;
  
  & div {
    padding: 10px 0;
  }
  
`