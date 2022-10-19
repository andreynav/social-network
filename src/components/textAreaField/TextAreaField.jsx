import React from "react";
import style from "./TextAreaField.module.css";

export default function TextAreaField(props) {
    const {
        name,
        type,
        register,
        validationSchema,
        placeholder,
        errors,
        ...areaProps
    } = props;

    return (
        <div className={style.inputWrapper}>
            <textarea className={style.inputField}
                      name={name}
                      {...register(name, validationSchema)}
                      placeholder={placeholder}
                      {...areaProps} />
            { errors && <div className={style.error}>
                {errors?.message}
            </div> }
        </div>
    )
}