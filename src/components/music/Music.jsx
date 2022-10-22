import React from "react";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

function Music() {
    return (
        <div>
            Music
        </div>
    );
}

export default compose(
    withAuthRedirect,
)(Music)