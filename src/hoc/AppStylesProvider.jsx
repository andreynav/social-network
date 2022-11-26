import React from "react";
import {GlobalStyles} from "../styles/GlobalStyles";

export const AppStylesProvider = ({children}) => {
    return (
        <>
            <GlobalStyles />
            { children }
        </>
    )
}
