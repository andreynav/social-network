import React from "react";
import style from "./FormPostMessage.module.css";
import {TextAreaField} from "../index";

export default function FormPostMessage(props) {
    const {postsInput, area, buttonSend} = style;
    const {onSubmit, register, validationSchema, errors} = props;

    return (
        <form className={postsInput} onSubmit={onSubmit}>
            <div className={area}>
                <TextAreaField name={"postMessage"}
                               register={register}
                               validationSchema={validationSchema}
                               errors={errors?.postMessage} />
            </div>
            <button className={buttonSend}>Send</button>
        </form>
    );
}
