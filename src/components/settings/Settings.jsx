import React, {useContext, useState} from "react";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {selectTheme, selectThemeToggle, setThemeAC, setThemeToggle} from "../../store/appReducer";
import {connect, useDispatch} from "react-redux";
import styled from "styled-components";
import {ThemeContext} from "../hoc/AppThemeProvider";
import {Toggle} from "../common/Toggle/Toggle";
import {useTranslation} from "react-i18next";

const Settings = (props) => {
    const dispatch = useDispatch();
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext);
    const [isToggled, setIsToggled] = useState(props.themeToggle || false)

    const onChange = () => {
        currentTheme === "light"
            ? (setCurrentTheme("dark") && setIsToggled(true))
            : (setCurrentTheme("light") && setIsToggled(false))

        dispatch(setThemeAC({theme: !props.theme}))
        dispatch(setThemeToggle({themeToggle: !props.themeToggle}))
    }

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        console.log(language)
        i18n.changeLanguage(language);
    };

    return (
        <SettingsWrapper>
            <Toggle labelLeft={t("settings.toggleTheme.light")}
                    labelRight={t("settings.toggleTheme.dark")}
                    isChecked={isToggled}
                    onChange={onChange} />
            <Toggle labelLeft={t("settings.toggleLanguage.eng")}
                    labelRight={t("settings.toggleLanguage.rus")}
                    onChange={changeLanguage} />
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
        </SettingsWrapper>
    )
}

let mapStateToProps = (state) => ({
    theme: selectTheme(state),
    themeToggle: selectThemeToggle(state)
});

export default compose(
    connect(mapStateToProps, {setThemeAC, setThemeToggle}),
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
