import React from "react";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {useTranslation} from "react-i18next";

const News = () => {
    const {t} = useTranslation()

    return (
        <div>
            {t("news.title")}
        </div>
    );
}

export default compose(
    withAuthRedirect,
)(News)