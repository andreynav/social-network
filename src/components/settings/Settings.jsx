import React, {useContext, useState} from "react";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {light, dark} from "../../styles/themes";
import {selectTheme, selectThemeToggle, setThemeAC, setThemeToggle} from "../../store/appReducer";
import {connect, useDispatch} from "react-redux";
import styled from "styled-components";
import {ThemeContext} from "../../index";
import {Toggle} from "../common/Toggle/Toggle";

const Settings = (props) => {
    const dispatch = useDispatch();
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext);
    const [isToggled, setIsToggled] = useState(props.themeToggle || false)

    const onChange = () => {
        if (currentTheme === "light") {
            setCurrentTheme("dark")
            dispatch(setThemeAC({theme: "dark"}))
            setIsToggled(true)
            dispatch(setThemeToggle({themeToggle: true}))
        }
        if (currentTheme === "dark") {
            setCurrentTheme("light")
            dispatch(setThemeAC({theme: "light"}))
            setIsToggled(false)
            dispatch(setThemeToggle({themeToggle: false}))
        }
    }

    return (
        <SettingsWrapper>
            <Toggle labelLeft ="Light"
                    labelRight="Dark"
                    isChecked={isToggled}
                    onChange={onChange}/>
            <Toggle labelLeft ="English"
                    labelRight="Russian"
                    />
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
