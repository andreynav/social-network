import React from "react";
import style from "./InputField.module.css";

export default function InputField(props) {
    const {
        name,
        label,
        type,
        register,
        validationSchema,
        placeholder,
        errors,
        ...inputProps
    } = props;

    return (
        <div className={style.inputWrapper}>
            <label className={style.labelTitle} htmlFor={name}>
                <span >{label}</span>
            </label>
            <input className={style.inputField}
                   name={name}
                   type={type}
                   {...register(name, validationSchema)}
                   placeholder={placeholder}
                   {...inputProps}
            />
            { errors && <div className={style.error}>
                {errors?.message}
            </div> }
        </div>
    )
}