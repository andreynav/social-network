import React from "react";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

function Settings(props) {
    return (
        <div>
            Settings
        </div>
    );
}

export default compose(
    withAuthRedirect,
)(Settings)