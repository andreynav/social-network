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
        <div>
            <label htmlFor={name}>
                <span>{label}</span>
            </label>
            <input className={style.formInput}
                   name={name}
                   type={type}
                   {...register(name, validationSchema)}
                   placeholder={placeholder}
                   {...inputProps}
            />
            { errors !== undefined && <div>{errors?.message}</div> }
        </div>
    )
}