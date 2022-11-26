import React from "react";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {useTranslation} from "react-i18next";

function Music() {
    const {t} = useTranslation()

    return (
        <div>
            {t("music.title")}
        </div>
    );
}

export default compose(
    withAuthRedirect,
)(Music)