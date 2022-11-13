import React, {useContext} from "react";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {light, dark} from "../../styles/themes";
import {selectTheme, setThemeAC} from "../../store/appReducer";
import {connect, useDispatch} from "react-redux";
import styled from "styled-components";
import {ThemeContext} from "../../index";

const Settings = () => {
    const dispatch = useDispatch();
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext);

    const onChange = () => {
        currentTheme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
        dispatch(setThemeAC({theme: currentTheme}))
    }

    return (
        <SettingsWrapper>
            <SettingTitle>Settings</SettingTitle>
            <MainWrapper>
                <ButtonTheme name="theme" onClick={onChange}>switch theme</ButtonTheme>
            </MainWrapper>
        </SettingsWrapper>
    )
}

let mapStateToProps = (state) => ({
    theme: selectTheme(state)
});

export default compose(
    connect(mapStateToProps, {setThemeAC}),
    withAuthRedirect,
)(Settings)

const ButtonTheme = styled.button`
  color: ${props => props.theme.textColor};
`

const SettingTitle = styled.div`
  color: ${props => props.theme.textColor};
`

const SettingsWrapper = styled.div`
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
`

const MainWrapper = styled.div`
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
`