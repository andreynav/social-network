import React from "react";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

function News() {
    return (
        <div>
            News
        </div>
    );
}

export default compose(
    withAuthRedirect,
)(News)